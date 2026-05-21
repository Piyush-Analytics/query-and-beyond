import { useState } from "react";

const books = [
  {
    id: 1,
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    year: "2002",
    genre: "Magical Realism",
    description: "A young boy runs away from home and a series of bizarre events unfold across Japan in this dreamlike masterpiece.",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGr6UkKjc0JVsznyLuLpa-98sj6CgR3wYOryq6s1GPdVUpyCwrYV_nqrucq1nmzcLH4qzyo7n6_7W0WI4RDB9nKYOfFy3t88x8hH5XvA&s=10",
    pdfLink: "https://www.google.com/search?q=Kafka+on+the+Shore+Haruki+Murakami+read+online+free",
  },
  {
    id: 2,
    title: "A Little Life",
    author: "Hanya Yanagihara",
    year: "2015",
    genre: "Literary Fiction",
    description: "An unforgettable story of four college friends navigating trauma, friendship, and the struggle to survive.",
    cover: "https://covers.openlibrary.org/b/isbn/9780804172707-L.jpg",
    pdfLink: "https://www.google.com/search?q=A+Little+Life+Hanya+Yanagihara+read+online+free",
  },
  {
    id: 3,
    title: "Tuesdays with Morrie",
    author: "Mitch Albom",
    year: "1997",
    genre: "Memoir",
    description: "A touching true story of lessons about life, love and loss shared between a dying professor and his former student.",
    cover: "https://covers.openlibrary.org/b/isbn/9780751527377-L.jpg",
    pdfLink: "https://www.google.com/search?q=Tuesdays+with+Morrie+Mitch+Albom+read+online+free",
  },
  {
    id: 4,
    title: "White Nights",
    author: "Fyodor Dostoevsky",
    year: "1848",
    genre: "Romantic Fiction",
    description: "A lonely dreamer falls in love during four magical white nights in St. Petersburg — a timeless tale of longing.",
    cover: "https://covers.openlibrary.org/b/isbn/9780140449228-L.jpg",
    pdfLink: "https://www.gutenberg.org/files/36034/36034-h/36034-h.htm",
  },
  {
    id: 5,
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    year: "2019",
    genre: "Magical Realism",
    description: "In a small Tokyo café, customers can travel back in time — but only under one condition: finish before the coffee gets cold.",
    cover: "https://covers.openlibrary.org/b/isbn/9781529029581-L.jpg",
    pdfLink: "https://www.google.com/search?q=Before+the+Coffee+Gets+Cold+Kawaguchi+read+online+free",
  },
];

export default function Bookshelf() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="border-b-2 w-full" style={{ borderColor: "var(--border-color)" }}>

      {/* Header */}
      <div className="w-full border-b-2 flex justify-center" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          <span className="text-2xl sm:text-3xl font-semibold">Bookshelf</span>
          <span
            className="text-[10px] font-medium tracking-widest uppercase"
            style={{ opacity: 0.4, color: "var(--text-color)" }}
          >
            {books.length} books
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2 border-b-2 px-4 sm:px-6 md:px-8 py-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <p
            className="text-sm font-medium"
            style={{ color: "var(--text-color)", opacity: 0.55, lineHeight: "1.7", fontStyle: "italic" }}
          >
            Between datasets and dashboards, I escape into stories. Here are a few novels that have stayed with me long after the last page.
          </p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              borderBottom: "1px solid var(--border-color)",
            }}
          >
            {books.map((book, idx) => (
              <div
                key={book.id}
                style={{
                  borderRight: idx !== books.length - 1 ? "1px solid var(--border-color)" : "none",
                  borderBottom: "1px solid var(--border-color)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Cover */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    borderBottom: "1px solid var(--border-color)",
                  }}
                  onMouseEnter={() => setHovered(book.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => window.open(book.pdfLink, '_blank')}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      display: "block",
                      filter: hovered === book.id ? "brightness(0.5)" : "brightness(1)",
                      transition: "filter 0.3s ease",
                    }}
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'var(--icon-bg)';
                      e.target.parentElement.style.height = '220px';
                    }}
                  />

                  {/* Hover overlay */}
                  {hovered === book.id && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      padding: "12px",
                      textAlign: "center",
                    }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span style={{
                        color: "white",
                        fontSize: "11px",
                        fontWeight: "bold",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}>
                        Read Online
                      </span>
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div style={{ padding: "12px", flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "var(--text-color)",
                    lineHeight: "1.4",
                  }}>
                    {book.title}
                  </div>
                  <div style={{
                    fontSize: "10px",
                    opacity: 0.5,
                    color: "var(--text-color)",
                  }}>
                    {book.author}
                  </div>
                  <div style={{
                    fontSize: "9px",
                    opacity: 0.35,
                    color: "var(--text-color)",
                    marginTop: "2px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {book.genre} · {book.year}
                  </div>
                  <div style={{
                    fontSize: "9px",
                    opacity: 0.45,
                    color: "var(--text-color)",
                    marginTop: "4px",
                    lineHeight: "1.5",
                  }}>
                    {book.description}
                  </div>
                </div>

                {/* Read button */}
                <div style={{ padding: "0 12px 12px" }}>
                  <a
                    href={book.pdfLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "6px",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-color)",
                      fontSize: "9px",
                      fontWeight: "bold",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "var(--text-color)";
                      e.currentTarget.style.color = "var(--bg-color)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--text-color)";
                    }}
                  >
                    ↗ Read Online
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer divider */}
      <div
        className="w-full min-h-10 border-y-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
}
