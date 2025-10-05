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
      date: "2025-10-26",
      title: "Upcoming Presentation at TENOR 2025",
      content:
        "I will be presenting the article 'MOZ'lib and PWforMax: Rewiring CAC heritage' at the 10th International Conference on Notation and Music Representation (TENOR) in Beijing (China)on October 26.",
      link: "https://zhuanti.ccom.edu.cn/tenorbjen/index.htm",
    },
    {
      date: "2025-10-12",
      title: "Concert 'Cry of the Earth' with Ensemble EcoVoice Project",
      content:
        "Excited to announce the premiere of my piece 'Romance del Niño del Agua', based on the poem by the same name by Antonio Esteban Agüero, with the Ensemble EcoVoice Project.",
      link: "https://ecovoiceproject.org/cry-of-the-earth",
    },
    {
      date: "2025-9-20",
      title: "Performance at Den Krapyl – Biblioteksmusikk in Bergen",
      content:
        "I will be performing at Den Krapyl – Biblioteksmusikken in Bergen on September 20, 2025. The program will consists of an improvised set for children: a sound trip to Argentina.",
      link: "https://www.facebook.com/events/1755005521818465",
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

  // Function to fetch website metadata with timeout and multiple proxies
  const fetchWebsiteData = async (url, itemId) => {
    if (!url || websiteData[itemId] || requestedUrls.has(url)) return;

    // Mark this URL as requested to prevent duplicates
    setRequestedUrls((prev) => new Set([...prev, url]));
    setLoadingStates((prev) => ({ ...prev, [itemId]: true }));

    // Check for problematic domains that usually block CORS proxies
    const domain = getDomain(url);
    const problematicDomains = [
      "facebook.com",
      "www.facebook.com",
      "instagram.com",
      "linkedin.com",
    ];

    if (problematicDomains.includes(domain)) {
      // Skip proxy attempts for known problematic domains and use fallback immediately
      const fallbackData = {
        title:
          domain === "facebook.com" || domain === "www.facebook.com"
            ? "Facebook Event"
            : domain,
        description: "Visit link for more information",
        thumbnail: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
        domain: domain,
        loaded: true,
        error: false, // Don't mark as error since this is expected behavior
        skipped: true,
      };

      setWebsiteData((prev) => ({
        ...prev,
        [itemId]: fallbackData,
      }));
      setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
      return;
    }

    // Immediate fallback function to ensure loading never gets stuck
    const setFallbackData = () => {
      const fallbackData = {
        title: domain,
        description: "Visit website for more information",
        thumbnail:
          domain === "zhuanti.ccom.edu.cn"
            ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDA5MEQ5Ci8+Cjwvc3ZnPgo="
            : `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
        domain: domain,
        loaded: true,
        error: true,
      };

      setWebsiteData((prev) => ({
        ...prev,
        [itemId]: fallbackData,
      }));
      setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
    };

    // Set a maximum timeout for the entire operation to prevent infinite loading
    const maxTimeoutId = setTimeout(() => {
      setFallbackData();
    }, 12000); // 12 seconds maximum for all attempts

    // List of CORS proxies to try in order
    const corsProxies = [
      (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
      (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
      (url) =>
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
      (url) => `https://cors-anywhere.herokuapp.com/${url}`, // Last resort
    ];

    for (let i = 0; i < corsProxies.length; i++) {
      try {
        // Add timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000); // 4 second timeout per proxy

        const proxyUrl = corsProxies[i](url);
        const response = await fetch(proxyUrl, {
          signal: controller.signal,
          headers: {
            Accept: "application/json, text/html, */*",
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        let data;
        const contentType = response.headers.get("content-type");

        if (i === 0) {
          // allorigins format
          data = await response.json();
          if (!data.contents) throw new Error("No contents in response");
        } else if (i === 1) {
          // corsproxy format
          const text = await response.text();
          data = { contents: text };
        } else if (i === 2) {
          // codetabs format
          const text = await response.text();
          data = { contents: text };
        } else {
          // cors-anywhere format
          const text = await response.text();
          data = { contents: text };
        }

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

          // Helper function to clean and extract readable text
          const getCleanDescription = () => {
            let description =
              getMetaContent("og:description") ||
              getMetaContent("twitter:description") ||
              getMetaContent("description");

            // If meta description exists and looks clean, use it
            if (
              description &&
              description.length > 10 &&
              !description.includes("[et_pb_") &&
              !description.includes("_builder_version")
            ) {
              return description.trim();
            }

            // Fallback: extract text from common content areas, avoiding WordPress/Divi shortcodes
            const contentSelectors = [
              "main p",
              ".content p",
              ".entry-content p",
              ".post-content p",
              "article p",
              ".page-content p",
              "h1 + p",
              "h2 + p",
            ];

            for (const selector of contentSelectors) {
              const elements = doc.querySelectorAll(selector);
              for (const element of elements) {
                let text = element.textContent || "";
                text = text.trim();

                // Skip if it contains WordPress/Divi shortcodes or is too short
                if (
                  text.length > 20 &&
                  !text.includes("[et_pb_") &&
                  !text.includes("_builder_version") &&
                  !text.includes("shortcode") &&
                  !text.includes("admin-ajax")
                ) {
                  return text;
                }
              }
            }

            return "Visit website for more information";
          };

          const title =
            getMetaContent("og:title") ||
            getMetaContent("twitter:title") ||
            doc.querySelector("title")?.textContent ||
            getDomain(url);

          const description = getCleanDescription();

          const image =
            getMetaContent("og:image") ||
            getMetaContent("twitter:image") ||
            (getDomain(url) === "zhuanti.ccom.edu.cn"
              ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDA5MEQ5Ci8+Cjwvc3ZnPgo="
              : `https://www.google.com/s2/favicons?domain=${getDomain(
                  url
                )}&sz=128`);

          // Special handling for known problematic domains
          let finalTitle = title.trim();
          let finalDescription = description.substring(0, 200);

          if (getDomain(url) === "icmc2025.sites.northeastern.edu") {
            finalTitle =
              finalTitle ||
              "ICMC 2025 - International Computer Music Conference";
            if (
              finalDescription.includes("[et_pb_") ||
              finalDescription.includes("_builder_version")
            ) {
              finalDescription =
                "International Computer Music Conference 2025 in Boston, featuring concerts and presentations.";
            }
          }

          const websiteInfo = {
            title: finalTitle,
            description: finalDescription,
            thumbnail: image,
            domain: getDomain(url),
            loaded: true,
            proxy: i, // Track which proxy worked
          };

          setWebsiteData((prev) => ({
            ...prev,
            [itemId]: websiteInfo,
          }));

          clearTimeout(maxTimeoutId); // Clear the maximum timeout
          setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
          return; // Success! Exit the proxy loop
        } else {
          throw new Error("Failed to fetch content");
        }
      } catch (error) {
        // If this wasn't the last proxy, try the next one silently
        if (i < corsProxies.length - 1) {
          // Only log if debugging is needed
          // console.warn(`Proxy ${i + 1} failed for ${url}, trying next proxy...`);
          continue;
        }

        // All proxies failed - handle gracefully with minimal logging
        if (process.env.NODE_ENV === "development") {
          if (error.name === "AbortError") {
            console.warn(`All proxies timed out for ${url}`);
          } else {
            console.warn(`All proxies failed for ${url}:`, error.message);
          }
        }

        // Clear timeout and set fallback data
        clearTimeout(maxTimeoutId);
        setFallbackData();
        return;
      }
    }

    // This should never be reached, but just in case
    clearTimeout(maxTimeoutId);
    setFallbackData();
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
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNDA5MEQ5Ci8+Cjwvc3ZnPgo=";
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
