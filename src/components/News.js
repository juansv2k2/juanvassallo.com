import React, { useState, useEffect } from "react";

function News({ newsItems }) {
  const [websiteData, setWebsiteData] = useState({});
  const [loadingStates, setLoadingStates] = useState({});
  const [requestedUrls, setRequestedUrls] = useState(new Set());

  // Default news items (no need for manual IDs)
  const defaultNews = [
    {
      date: "2026-06-24",
      title:
        "World Premiere of 'Transmutation (i) – the birth of the poem' at Bled Contemporary Music Week",
      content:
        "World premiere of my piece 'Transmutation (i) – the birth of the poem' for the ensemble .abeceda., performed at the Bled Contemporary Music Week. The piece was developed in the framework of the precept.concept.percept XIII residency program.",
      link: "https://abeceda.io/",
    },
    {
      date: "2026-06-13",
      title: "Norwegian Piano Perspectives – World Premiere of 'Pu Werken'",
      content:
        "Concert at Kulturhuset i Bergen featuring Bergen-based pianist Tore Eide Bordal performing new works by Norwegian and Norway-based composers. The program includes the world premiere of my piece 'Pu Werken (the messenger)' with texts by Javier Villalba. The concert is organized by NyMusikk Bergen and NyMusikk Komponistgruppen, and supported by Morten Eide Pedersen Minnefond, Fond for Utøvere Kunstnere, Bergen Kommune, and Norsk Komponistforening.",
      link: "https://www.kulturhusetibergen.no/program/norwegian-piano-perspectives",
    },
    {
      date: "2026-05-16",
      title:
        "Performance at the 51st. International Computer Music Conference (ICMC) in Hamburg",
      content:
        "Selected as a composer to participate in the ICMC 2026 in Hamburg, Germany. My new piece 'Elevator Pitch' for cello and electronics will be performed by Antonio Lo Curto (Ensemble 404).",
      link: "https://icmc2026.ligeti-zentrum.de/",
    },
    {
      date: "2026-03-22",
      title: "Den Store Krapylkonserten 2026",
      content:
        "Performed as part of Den Store Krapylband at Den Store Krapylkonserten 2026, organized by nyMusikk Bergen at Grieghallen (Peer Gynt Salen). The concert featured young musiciansand the dance class of Langhaugen videregående school.",
      link: "https://nymusikk.no/arrangementer/den-store-krapylkonserten-2026",
      customImage:
        "https://imgproxy01.kloner.clh.no/59e419b062930af756d272d9d9f9b73b3c051e2d41c32a4cba5b6b46725becaf5b7ca13525b51bf242ebfb776f23d817001cc131115e91253b9a6c49d1e4936e/width:1600/plain/https://cms.nymusikk.no/wp-content/uploads/2026/03/POSTER.png",
    },
    {
      date: "2026-03-01",
      title:
        "Performance at St. Petersburg Festival through reMusik.org Academy",
      content:
        "Selected as a composer to participate in in the prestigious reMusik.org Academy composition program, culminating in the performance of my new mixed quintet piece at the XII St. Petersburg International Festival of New Music. The academy provides intensive training with international faculty and includes lectures, concerts, workshops, and reading sessions.",
      link: "https://www.remusik.org/",
    },
    {
      date: "2026-02-15",
      title: "Concert in Bergen with the vocal ensemble 'Tabula Rasa'",
      content:
        "The series of concerts 'Møtepunkt' proposes a meeting point between performers and composers to explore experimental approaches to vocal music. In this edition, I will perform live electronics together with the vocal ensemble 'Tabula Rasa', presenting the result of our recent collaboration in a series of workshops held during January-February 2026.",
      link: "https://tabularasa.no/aktuelt-2/",
    },
    {
      date: "2025-12-05",
      title:
        "Concert at Bergen Kjøtt with the flutist/improviser Daiyen Jone Castro",
      content:
        "The concert will feature some improvised music, developed through a series of meetings and rehearsals during the last months of 2025. The concert is part of the event 'Litterario – Intimidad y Palabra' a new literary project created by and for the Spanish-speaking community of Bergen, where poetry, storytelling, music, and dialogue meet in a space of closeness and Hispanic literature",
      link: "https://www.bergenkjott.org/kalendar/litteratio5des",
    },

    {
      date: "2026-04-13",
      title: "Selected for oUTHEAR New Music Week Symposium & Masterclass",
      content:
        "Selected as a composer to participate in the prestigious oUTHEAR New Music Week Symposium & Masterclass 5th Edition (April 13-21, 2026). The program features ensembles in residence KLANGFORUM and PPCM Graz, with distinguished faculty including Mark Andre, Annesley Black, Dimitri Papageorgiou, and Orestis Toufektsis.",
      link: "https://www.outhearnewmusic.com/",
    },
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
      link: "https://www.tenor-conference.org/",
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
      title: "Publication of Doctoral Reflection in Research Catalog",
      content:
        "My doctoral reflection 'Outward Threads – Intuitive Computers / Rational Composers' culminating four years of artistic research at the University of Bergen has been finally published. It can also be accessed in its own dedicated website.",
      link: "https://www.outwardthreads.net",
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
      link: "https://www.hslu.ch/en/lucerne-school-of-music/",
    },
    {
      date: "2025-04-25",
      title: "Publication in Frontiers of Computer Science",
      content:
        "Research article on constraint-based composition and neural networks published in Frontiers of Computer Science, contributing new insights to the field of AI-assisted musical creativity.",
      link: "https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1543074/abstract",
      customImage: "https://www.frontiersin.org/favicons/apple-touch-icon.png",
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
    {
      date: "2024-09-16",
      title: "New release with JÓR Saxophone Quartet",
      content:
        "My composition 'I am Strange Loop' performed by JÓR Saxophone Quartet has been released in the platform Bandcamp. Check it out!",
      link: "https://juanvassallo.bandcamp.com/track/i-am-a-strange-loop",
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

  // Fetch website metadata using Microlink API (browser-friendly, no CORS issues)
  const fetchWebsiteData = async (url, itemId, customImage) => {
    if (!url || websiteData[itemId] || requestedUrls.has(url)) return;

    const domain = getDomain(url);

    // Check localStorage cache to avoid redundant API calls across sessions
    // (skipped when customImage is provided — always use the override)
    const cacheKey = `news_preview_${btoa(encodeURIComponent(url)).substring(0, 60)}`;
    if (!customImage) {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const cachedData = JSON.parse(cached);
          setWebsiteData((prev) => ({ ...prev, [itemId]: cachedData }));
          return;
        }
      } catch (e) {
        // ignore cache read errors
      }
    }

    // If a custom image is provided, skip the API fetch entirely
    if (customImage) {
      const websiteInfo = {
        title: domain,
        description: "Visit website for more information",
        thumbnail: customImage,
        domain: domain,
        loaded: true,
      };
      setWebsiteData((prev) => ({ ...prev, [itemId]: websiteInfo }));
      return;
    }

    // Mark this URL as requested to prevent duplicates
    setRequestedUrls((prev) => new Set([...prev, url]));
    setLoadingStates((prev) => ({ ...prev, [itemId]: true }));

    const setFallback = () => {
      const fallbackData = {
        title: domain,
        description: "Visit website for more information",
        thumbnail: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
        domain: domain,
        loaded: true,
        error: true,
      };
      setWebsiteData((prev) => ({ ...prev, [itemId]: fallbackData }));
      setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(
        `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
        { signal: controller.signal },
      );

      clearTimeout(timeoutId);

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();

      if (data.status === "success" && data.data) {
        const { title, description, image, logo } = data.data;
        const thumbnail =
          image?.url ||
          logo?.url ||
          `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

        const websiteInfo = {
          title: title || domain,
          description: (
            description || "Visit website for more information"
          ).substring(0, 200),
          thumbnail,
          domain: domain,
          loaded: true,
        };

        // Cache result in localStorage
        try {
          localStorage.setItem(cacheKey, JSON.stringify(websiteInfo));
        } catch (e) {
          // ignore cache write errors (e.g. storage full)
        }

        setWebsiteData((prev) => ({ ...prev, [itemId]: websiteInfo }));
        setLoadingStates((prev) => ({ ...prev, [itemId]: false }));
      } else {
        setFallback();
      }
    } catch (error) {
      setFallback();
    }
  };

  // Fetch website data for all items with links
  useEffect(() => {
    const processedItems = processNewsItems(newsItems || defaultNews);

    // Start all requests with staggered timing
    processedItems.forEach((item, index) => {
      if (item.link && !websiteData[item.id] && !requestedUrls.has(item.link)) {
        setTimeout(() => {
          fetchWebsiteData(item.link, item.id, item.customImage);
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
