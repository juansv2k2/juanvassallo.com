import React, { useState, useEffect } from "react";

function News({ newsItems }) {
  const [websiteData, setWebsiteData] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [requestedUrls, setRequestedUrls] = useState(new Set());

  // Default news items (no need for manual IDs)
  const defaultNews = [
    {
      date: "2025-11-11",
      title: "Presentation at the AI week in Lübeck",
      content:
        "I will be presenting my research work at the Artilacs Symposium during the AI week in Lübeck, Germany.",
      link: "https://woche-der-ki.de/index.php/artilacs-symposium-in-luebeck/",
    },
    {
      date: "2025-10-21",
      title: "Presentation at the MetaCreation Lab at Simon Fraser University",
      content:
        "I will be presenting my research work at the MetaCreation Lab at Simon Fraser University.",
      link: "https://www.metacreation.net/",
    },
    {
      date: "2025-10-12",
      title: "Concert: 'Cry of the Earth' with Ensemble EcoVoice Project",
      content:
        "Excited to announce the premiere of my piece 'Romance del Niño del Agua', based on the poem by the same name by Antonio Esteban Agüero, with the Ensemble EcoVoice Project.",
      link: "https://ecovoiceproject.org/cry-of-the-earth",
    },
    {
      date: "2025-10-26",
      title: "Upcoming Presentation at TENOR 2025",
      content:
        "I will be presenting the article 'MOZ'lib and PWforMax: Rewiring CAC heritage' at the 10th International Conference on Notation and Music Representation (TENOR) in Beijing (China)on October 26.",
      link: "https://zhuanti.ccom.edu.cn/tenorbjen/sd/a2025.htm",
    },
    {
      date: "2025-09-11",
      title: "Doctoral Defense",
      content:
        "My doctoral defense will take place on September 11, 2025, at the University of Bergen. ",
      link: "https://kmd.uib.no/no/kalender/disputas-og-midtveisevaluering/juan-vassallo-disputas",
    },
    {
      date: "2025-06-17",
      title: "Concert at the ICMC 2025",
      content:
        "My piece 'Oscillations (iii)' will be performed at the International Computer Music Conference (ICMC) 2025 in Boston (USA).",
      link: "https://icmc2025.sites.northeastern.edu/concerts-hall-part-1/#hall13",
    },
    {
      date: "2025-04-25",
      title: "Research Paper Published",
      content:
        "My latest research on constraint-based composition and neural networks has been published in the Journal Frontiers of Computer Science.",
      link: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1543074/abstract",
    },
    {
      date: "2025-02-20",
      title: "Concert 'Outward Threads'",
      content:
        "My final concert as artistic research fellow at the Grieg Academy of Music will happen in the Auditorium Knut Knaus at the University of Bergen.",
      link: "https://kmd.uib.no/en/Calendar/concerts-sound/outward-threads--intuitive-computers-rational-composers",
    },
  ];

  // Function to automatically assign IDs to news items
  const processNewsItems = (items) => {
    return items.map((item, index) => ({
      ...item,
      id: item.id !== undefined ? item.id : index, // Use existing ID or assign index
    }));
  };

  // Use provided news items or default ones, with automatic ID assignment
  const items = processNewsItems(newsItems || defaultNews);

  // Function to extract domain from URL
  const getDomain = (url) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  // Function to fetch website metadata with timeout
  const fetchWebsiteData = async (url, itemId) => {
    if (!url || websiteData[itemId] || requestedUrls.has(url)) return;

    // Mark this URL as requested to prevent duplicates
    setRequestedUrls((prev) => new Set([...prev, url]));
    setLoadingStates((prev) => ({ ...prev, [itemId]: true }));

    try {
      // Add timeout to prevent hanging requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      // Using a CORS proxy service to fetch website metadata
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        url
      )}`;
      const response = await fetch(proxyUrl, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (data.contents) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, "text/html");

        // Extract Open Graph and meta data
        const getMetaContent = (property) => {
          const element =
            doc.querySelector(`meta[property="${property}"]`) ||
            doc.querySelector(`meta[name="${property}"]`);
          return element ? element.getAttribute("content") : "";
        };

        const title =
          getMetaContent("og:title") ||
          getMetaContent("twitter:title") ||
          doc.querySelector("title")?.textContent ||
          getDomain(url);

        const description =
          getMetaContent("og:description") ||
          getMetaContent("twitter:description") ||
          getMetaContent("description") ||
          "Visit website for more information";

        const image =
          getMetaContent("og:image") ||
          getMetaContent("twitter:image") ||
          (getDomain(url) === "zhuanti.ccom.edu.cn"
            ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDA5MEQ5Ii8+Cjwvc3ZnPgo="
            : `https://www.google.com/s2/favicons?domain=${getDomain(
                url
              )}&sz=128`);

        const websiteInfo = {
          title: title.trim(),
          description: description.trim().substring(0, 200),
          thumbnail: image,
          domain: getDomain(url),
          loaded: true,
        };

        setWebsiteData((prev) => ({
          ...prev,
          [itemId]: websiteInfo,
        }));
      } else {
        throw new Error("Failed to fetch content");
      }
    } catch (error) {
      // Handle timeout and other errors gracefully
      if (error.name === "AbortError") {
        console.warn(`Request timeout for ${url}`);
      } else {
        console.warn(`Failed to fetch metadata for ${url}:`, error);
      }

      // Fallback data
      const domain = getDomain(url);
      setWebsiteData((prev) => ({
        ...prev,
        [itemId]: {
          title: domain,
          description: "Visit website for more information",
          thumbnail:
            domain === "zhuanti.ccom.edu.cn"
              ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDA5MEQ5Ii8+Cjwvc3ZnPgo="
              : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
          domain: domain,
          loaded: true,
          error: true,
        },
      }));
    } finally {
      setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  // Fetch website data for all items with links - run immediately but non-blocking
  useEffect(() => {
    const processedItems = processNewsItems(newsItems || defaultNews);

    // Start all requests immediately but asynchronously
    processedItems.forEach((item, index) => {
      if (item.link && !websiteData[item.id] && !requestedUrls.has(item.link)) {
        // Stagger requests slightly to avoid overwhelming the proxy
        setTimeout(() => {
          fetchWebsiteData(item.link, item.id);
        }, index * 100); // 100ms delay between each request
      }
    });
  }, []); // Empty dependency array - only run once on mount

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="news-section">
      <div className="news-container">
        {items.map((item) => (
          <div key={item.id} className="news-item">
            <div className="news-date">{formatDate(item.date)}</div>
            <h3 className="news-title">{item.title}</h3>
            <p className="news-content">{item.content}</p>
            {item.link && (
              <div className="website-preview">
                {loadingStates[item.id] ? (
                  <div className="website-loading">
                    <div className="loading-placeholder">
                      <div className="loading-thumbnail"></div>
                      <div className="loading-info">
                        <div className="loading-line short"></div>
                        <div className="loading-line"></div>
                        <div className="loading-line medium"></div>
                      </div>
                    </div>
                  </div>
                ) : websiteData[item.id] ? (
                  <a
                    href={item.link}
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="website-thumbnail">
                      <img
                        src={websiteData[item.id].thumbnail}
                        alt={websiteData[item.id].title}
                        onError={(e) => {
                          // Better fallback for problematic domains
                          if (
                            websiteData[item.id].domain ===
                            "zhuanti.ccom.edu.cn"
                          ) {
                            e.target.src =
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDA5MEQ5Ii8+Cjwvc3ZnPgo=";
                          } else {
                            e.target.src = `https://www.google.com/s2/favicons?domain=${
                              websiteData[item.id].domain
                            }&sz=64`;
                          }
                        }}
                      />
                    </div>
                    <div className="website-info">
                      <h4 className="website-title">
                        {websiteData[item.id].title}
                      </h4>
                      <p className="website-description">
                        {websiteData[item.id].description}
                      </p>
                      <span className="website-domain">
                        {websiteData[item.id].domain}
                      </span>
                    </div>
                  </a>
                ) : (
                  <a
                    href={item.link}
                    className="news-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
