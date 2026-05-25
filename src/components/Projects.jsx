import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const FEATURED_IDS = [
  "covid19-powerbi-dashboard",
  "bank-fraud-detection-sql",
  "saas-churn-analysis",
];

const featuredProjects = projects.filter(p => FEATURED_IDS.includes(p.id));
const remainingProjects = projects.filter(p => !FEATURED_IDS.includes(p.id));

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--border-color)" }}>
      {/* Main Row */}
      <div className="flex items-center px-4 sm:px-6 md:px-8 py-4 gap-4">

        {/* Project image thumbnail */}
        <div style={{
          width: "48px", height: "48px", flexShrink: 0,
          border: "1px solid var(--border-color)", borderRadius: "6px", overflow: "hidden"
        }}>
          <img src={project.image} alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Title + description */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "var(--text-color)", fontWeight: 600, fontSize: "14px" }}>
            {project.title}
          </div>
          <div style={{ color: "var(--text-color)", opacity: 0.5, fontSize: "12px", marginTop: "2px",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {project.description}
          </div>
        </div>

        {/* Tech tags — hidden on mobile */}
        <div className="hidden md:flex flex-wrap gap-1" style={{ maxWidth: "280px" }}>
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} style={{
              fontSize: "9px", padding: "2px 8px",
              border: "1px solid var(--border-color)",
              borderRadius: "20px", color: "var(--text-color)",
              whiteSpace: "nowrap", opacity: 0.8
            }}>{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span style={{
              fontSize: "9px", padding: "2px 8px",
              border: "1px solid var(--border-color)",
              borderRadius: "20px", color: "var(--text-color)", opacity: 0.5
            }}>+{project.tech.length - 3}</span>
          )}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-3" style={{ flexShrink: 0 }}>
          {/* GitHub link */}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer"
              style={{ color: "var(--text-color)", opacity: 0.6 }}
              className="hover:opacity-100 transition-opacity"
              onClick={e => e.stopPropagation()}
            >
              <GitHubIcon />
            </a>
          )}

          {/* Dropdown toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              color: "var(--text-color)", opacity: 0.6, background: "none",
              border: "none", cursor: "pointer", padding: "2px"
            }}
            className="hover:opacity-100 transition-opacity"
          >
            <ChevronDown open={open} />
          </button>
        </div>
      </div>

      {/* Dropdown Details */}
      {open && (
        <div style={{
          borderTop: "1px solid var(--border-color)",
          background: "var(--cover-bg)",
          animation: "fadeIn 0.25s ease",
        }}>
          {/* Project image */}
          <div style={{ borderBottom: "1px solid var(--border-color)" }}>
            <img src={project.image} alt={project.title}
              style={{ width: "100%", maxHeight: "320px", objectFit: "cover", display: "block" }} />
          </div>

          <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Details sections */}
            {project.details?.map((section, idx) => (
              <div key={idx}>
                <div style={{
                  fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--text-color)", opacity: 0.5,
                  marginBottom: "6px"
                }}>
                  {section.heading}
                </div>
                <div style={{
                  fontSize: "13px", lineHeight: "1.7",
                  color: "var(--text-color)", opacity: 0.8,
                  whiteSpace: "pre-line"
                }}>
                  {section.content}
                </div>
              </div>
            ))}

            {/* Tech Stack */}
            <div>
              <div style={{
                fontSize: "11px", fontWeight: "bold", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--text-color)", opacity: 0.5,
                marginBottom: "8px"
              }}>
                Tech Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    fontSize: "11px", padding: "4px 12px",
                    border: "1px solid var(--border-color)",
                    borderRadius: "20px", color: "var(--text-color)",
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* View on GitHub button */}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                fontSize: "12px", fontWeight: "bold", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--text-color)",
                textDecoration: "none", opacity: 0.7,
                borderTop: "1px solid var(--border-color)",
                paddingTop: "12px", marginTop: "4px"
              }}
              className="hover:opacity-100 transition-opacity"
              >
                <GitHubIcon /> View on GitHub ↗
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-b-2 w-full" style={{ borderColor: "var(--border-color)" }}>

      {/* Header */}
      <div className="w-full border-b-2 flex justify-center" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] text-2xl sm:text-3xl font-semibold flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          <span>Projects</span>
          <span style={{ fontSize: "11px", opacity: 0.4, fontWeight: 500, letterSpacing: "0.1em" }}>
            {projects.length} projects
          </span>
        </div>
      </div>

      {/* Projects list */}
      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Featured */}
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Divider */}
          <div style={{
            width: "100%", minHeight: "32px", borderTop: "2px solid var(--border-color)",
            borderBottom: "2px solid var(--border-color)",
            backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
          }} />

          {/* Remaining */}
          {showMore && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              {remainingProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
              <div style={{
                width: "100%", minHeight: "32px",
                borderTop: "2px solid var(--border-color)",
                borderBottom: "2px solid var(--border-color)",
                backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
              }} />
            </div>
          )}

          {/* Show More button */}
          <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <button
              onClick={() => setShowMore(!showMore)}
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "8px 24px", fontSize: "12px", fontWeight: "bold",
                letterSpacing: "0.1em", textTransform: "uppercase",
                border: "1px solid var(--border-color)",
                color: "var(--text-color)", background: "transparent",
                borderRadius: "20px", cursor: "pointer",
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
              {showMore ? "↑ Show Less" : `↓ Show More (${remainingProjects.length})`}
            </button>
          </div>
        </div>
      </div>

      {/* Footer divider */}
      <div style={{
        width: "100%", minHeight: "40px",
        borderTop: "2px solid var(--border-color)",
        borderBottom: "2px solid var(--border-color)",
        backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
      }} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Projects;
