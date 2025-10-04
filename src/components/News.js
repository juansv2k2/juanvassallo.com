import React, { useState, useEffect } from "react";

function News({ newsItems }) {
  const [websiteData, setWebsiteData] = useState({});
  const [loadingStates, setLoadingStates] = useState({});

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
        "I will be presenting the article 'MOZ'lib and PWforMax: Rewiring CAC heritage' at the 10th International Conference on Music Representation and Notation in Beijing on October 26.",
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
        "My final concert featuring works that explore the intersection of AI/ML and music will happen in the Auditorium Knut Knaus at the University of Bergen.",
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

  // Function to fetch website metadata
  const fetchWebsiteData = async (url, itemId) => {
    if (!url || websiteData[itemId]) return;

    setLoadingStates((prev) => ({ ...prev, [itemId]: true }));

    try {
      // Using a CORS proxy service to fetch website metadata
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        url
      )}`;
      const response = await fetch(proxyUrl);
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
          `https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=128`;

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
      console.warn(`Failed to fetch metadata for ${url}:`, error);

      // Fallback data
      setWebsiteData((prev) => ({
        ...prev,
        [itemId]: {
          title: getDomain(url),
          description: "Visit website for more information",
          thumbnail: `https://www.google.com/s2/favicons?domain=${getDomain(
            url
          )}&sz=128`,
          domain: getDomain(url),
          loaded: true,
          error: true,
        },
      }));
    } finally {
      setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
    }
  };

  // Fetch website data for all items with links
  useEffect(() => {
    items.forEach((item) => {
      if (item.link && !websiteData[item.id]) {
        fetchWebsiteData(item.link, item.id);
      }
    });
  }, [items]);

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
                          e.target.src = `https://www.google.com/s2/favicons?domain=${
                            websiteData[item.id].domain
                          }&sz=128`;
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
