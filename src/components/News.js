import React from "react";

function News({ newsItems }) {
  // Default news items if none are provided via props
  const defaultNews = [
    {
      id: 1,
      date: "2025-10-01",
      title: "New Album Release: 'Digital Fragments'",
      content:
        "Excited to announce the release of my latest experimental album exploring the intersection of computational composition and human expression.",
      link: null,
    },
    {
      id: 2,
      date: "2025-09-15",
      title: "Upcoming Performance at ICMC 2025",
      content:
        "I'll be presenting my piece 'Neural Harmonics' at the International Computer Music Conference in Berlin this November.",
      link: "https://example.com/icmc-2025",
    },
    {
      id: 3,
      date: "2025-08-20",
      title: "Research Paper Published",
      content:
        "My latest research on machine learning in compositional practice has been published in the Journal of Music Technology.",
      link: "https://example.com/research-paper",
    },
    {
      id: 4,
      date: "2025-07-10",
      title: "Workshop: 'AI and Creative Process'",
      content:
        "Leading a workshop on integrating artificial intelligence into creative musical workflows at the University of Arts Helsinki.",
      link: null,
    },
  ];

  // Use provided news items or default ones
  const items = newsItems || defaultNews;

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
              <a
                href={item.link}
                className="news-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
