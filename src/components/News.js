import React, { useState, useEffect } from "react";

function News({ newsItems }) {
  const [websiteData, setWebsiteData] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [requestedUrls, setRequestedUrls] = useState(new Set());

  // Default news items (no need for manual IDs)
  const defaultNews = [
    {
      date: "2025-10-05",
      title: "Artist Residency at Bergen Center for Electronic Arts (BEK)",
      content:
        "Selected as resident artist at the Bergen Center for Electronic Arts (BEK) for February 2026. During the residency, I will develop 'Frecuencia 76', a new composition for piano and electronics commissioned by renowned pianist Késia Decoté.",
      link: "https://bek.no/en/residencies/",
    },
    {
      date: "2025-11-11",
      title: "Research Presentation at AI Week Lübeck",
      content:
        "Presenting my research on AI-assisted composition at the Artilacs Symposium during AI Week in Lübeck, Germany. The presentation will explore the intersection of artificial intelligence and creative musical practice.",
      link: "https://woche-der-ki.de/index.php/artilacs-symposium-in-luebeck/",
    },
    {
      date: "2025-10-21",
      title: "Guest Research Presentation at MetaCreation Lab",
      content:
        "Invited to present my research work at the MetaCreation Lab, Simon Fraser University. The presentation will focus on compositional application of newly developed creative AI applications.",
      link: "https://www.metacreation.net/",
    },
    {
      date: "2025-10-26",
      title: "Paper Presentation at TENOR 2025 Beijing",
      content:
        "Presenting 'MOZ'lib and PWforMax: Rewiring CAC Heritage' at the 10th International Conference on Notation and Music Representation (TENOR) in Beijing, China.",
      link: "https://zhuanti.ccom.edu.cn/tenorbjen/index.htm",
    },
    {
      date: "2025-10-12",
      title: "World Premiere with EcoVoice Project",
      content:
        "World premiere of 'Romance del Niño del Agua' in the concert 'Cry of the Earth' with Ensemble EcoVoice Project. The piece is based on the poem by Argentine poet Antonio Esteban Agüero.",
      link: "https://ecovoiceproject.org/cry-of-the-earth",
    },
    {
      date: "2025-09-20",
      title: "Interactive Performance for Children in Bergen",
      content:
        "Special performance at Den Krapyl – Biblioteksmusikk in Bergen featuring an improvised sonic journey to Argentina, designed as an interactive concert for young audiences.",
      link: "https://www.facebook.com/events/1755005521818465",
    },
    {
      date: "2025-09-11",
      title: "Doctoral Defense at University of Bergen",
      content:
        "Defending my doctoral dissertation 'Outward Threads – Intuitive Computers / Rational Composers' at the University of Bergen, culminating four years of artistic research in human-computer collaboration.",
      link: "https://kmd.uib.no/no/kalender/disputas-og-midtveisevaluering/juan-vassallo-disputas",
    },
    {
      date: "2025-06-17",
      title: "Performance at International Computer Music Conference",
      content:
        "Performance of 'Oscillations (iii)' by Hinge Quartet (US) at the prestigious International Computer Music Conference (ICMC) 2025 in Boston.",
      link: "https://icmc2025.sites.northeastern.edu/concerts-hall-part-1/#hall13",
    },
    {
      date: "2025-06-07",
      title: "New Music Days Lucerne Performance",
      content:
        "Performance of 'Elevator Pitch' by pianist Elide Sulsenti as part of her Final Master's Recital during the New Music Days festival in Lucerne, Switzerland.",
      link: "https://www.hslu.ch/en/lucerne-school-of-music/agenda/events/master-abschlusskonzerte/",
    },
    {
      date: "2025-04-25",
      title: "Publication in Frontiers of Computer Science",
      content:
        "Research article on constraint-based composition and neural networks published in Frontiers of Computer Science, contributing new insights to the field of AI-assisted musical creativity.",
      link: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1543074/abstract",
    },
    {
      date: "2025-02-20",
      title: "Final Concert as Research Fellow",
      content:
        "'Outward Threads' concert at the University of Bergen's Auditorium Knut Knaus, marking the culmination of my artistic research fellowship at the Grieg Academy of Music.",
      link: "https://kmd.uib.no/en/Calendar/concerts-sound/outward-threads--intuitive-computers-rational-composers",
    },
    {
      date: "2024-09-26",
      title: "Bologna Performance in 'Instantanea Urbana'",
      content:
        "Performance of 'Elevator Pitch' by Elide Sulsenti in the 'How to Make a Manifesto' concert, part of the 'Instantanea Urbana' series during Bologna Estate festival.",
      link: "https://www.bolognaestate.it/calendario-bolognaestate-2024/istantanea-urbana",
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

  // Universal function to fetch website metadata with improved image extraction
  const fetchWebsiteData = async (url, itemId) => {
    if (!url || websiteData[itemId] || requestedUrls.has(url)) return;

    // Mark this URL as requested to prevent duplicates
    setRequestedUrls((prev) => new Set([...prev, url]));
    setLoadingStates((prev) => ({ ...prev, [itemId]: true }));

    const domain = getDomain(url);

    // Universal fallback function that works for any domain
    const setUniversalFallback = () => {
      const fallbackData = {
        title: domain,
        description: "Visit website for more information",
        thumbnail: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
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
      setUniversalFallback();
    }, 8000); // 8 seconds maximum for all attempts

    // List of CORS proxies to try in order
    const corsProxies = [
      (url) => `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
      (url) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
      (url) =>
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    ];

    for (let i = 0; i < corsProxies.length; i++) {
      try {
        // Add timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout per proxy

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
        if (i === 0) {
          // allorigins format
          data = await response.json();
          if (!data.contents) throw new Error("No contents in response");
        } else {
          // other proxies return HTML directly
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

          // Enhanced description extraction
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

            // Fallback: extract text from common content areas
            const contentSelectors = [
              "main p",
              ".content p",
              ".entry-content p",
              ".post-content p",
              "article p",
              "h1 + p",
              "h2 + p",
            ];

            for (const selector of contentSelectors) {
              const elements = doc.querySelectorAll(selector);
              for (const element of elements) {
                let text = element.textContent || "";
                text = text.trim();

                // Skip if it contains shortcodes or is too short
                if (
                  text.length > 20 &&
                  !text.includes("[et_pb_") &&
                  !text.includes("_builder_version") &&
                  !text.includes("shortcode")
                ) {
                  return text;
                }
              }
            }

            return "Visit website for more information";
          };

          // Enhanced image extraction with multiple sources
          const getImageUrl = () => {
            // Special case for Frontiers domain - use favicon instead of article images
            if (domain.includes("frontiersin.org")) {
              return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
            }

            // Try Open Graph and Twitter meta images first
            let image =
              getMetaContent("og:image") || getMetaContent("twitter:image");

            if (image) {
              // Make relative URLs absolute
              if (image.startsWith("//")) {
                image = "https:" + image;
              } else if (image.startsWith("/")) {
                image = new URL(url).origin + image;
              } else if (!image.startsWith("http")) {
                image = new URL(url).origin + "/" + image;
              }
              return image;
            }

            // Try to find images in the page content
            const imageSelectors = [
              'meta[name="image"]',
              'link[rel="image_src"]',
              'img[class*="logo"]',
              'img[id*="logo"]',
              'img[class*="banner"]',
              'img[class*="header"]',
              ".header img",
              ".logo img",
              "article img:first-of-type",
              "main img:first-of-type",
            ];

            for (const selector of imageSelectors) {
              const element = doc.querySelector(selector);
              if (element) {
                let src =
                  element.getAttribute("content") ||
                  element.getAttribute("href") ||
                  element.getAttribute("src");
                if (src && src.length > 10) {
                  // Make relative URLs absolute
                  if (src.startsWith("//")) {
                    src = "https:" + src;
                  } else if (src.startsWith("/")) {
                    src = new URL(url).origin + src;
                  } else if (!src.startsWith("http")) {
                    src = new URL(url).origin + "/" + src;
                  }
                  return src;
                }
              }
            }

            // Final fallback to favicon service
            return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
          };

          const title =
            getMetaContent("og:title") ||
            getMetaContent("twitter:title") ||
            doc.querySelector("title")?.textContent ||
            domain;

          const description = getCleanDescription();
          const image = getImageUrl();

          const websiteInfo = {
            title: title.trim(),
            description: description.substring(0, 200),
            thumbnail: image,
            domain: domain,
            loaded: true,
            proxy: i,
          };

          setWebsiteData((prev) => ({
            ...prev,
            [itemId]: websiteInfo,
          }));

          clearTimeout(maxTimeoutId);
          setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
          return; // Success! Exit the proxy loop
        } else {
          throw new Error("Failed to fetch content");
        }
      } catch (error) {
        // If this wasn't the last proxy, try the next one silently
        if (i < corsProxies.length - 1) {
          continue;
        }

        // All proxies failed - use fallback
        if (process.env.NODE_ENV === "development") {
          console.warn(`All proxies failed for ${url}:`, error.message);
        }

        clearTimeout(maxTimeoutId);
        setUniversalFallback();
        return;
      }
    }

    // This should never be reached, but just in case
    clearTimeout(maxTimeoutId);
    setUniversalFallback();
  };

  // Fetch website data for all items with links
  useEffect(() => {
    const processedItems = processNewsItems(newsItems || defaultNews);

    // Start all requests with staggered timing
    processedItems.forEach((item, index) => {
      if (item.link && !websiteData[item.id] && !requestedUrls.has(item.link)) {
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
                          // Universal fallback on image error
                          e.target.src = `https://www.google.com/s2/favicons?domain=${
                            websiteData[item.id].domain
                          }&sz=64`;
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
