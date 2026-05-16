import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

// Featured project IDs — shown by default
const FEATURED_IDS = [
  "covid19-powerbi-dashboard",
  "bank-fraud-detection-sql",
  "saas-churn-analysis",
];

const featuredProjects = projects.filter(p => FEATURED_IDS.includes(p.id));
const remainingProjects = projects.filter(p => !FEATURED_IDS.includes(p.id));

const ProjectCard = ({ project, idx, total }) => (
  <div key={project.id}>
    <Link
      to={`/projects/${project.id}`}
      className="flex flex-col md:flex-row border-b cursor-pointer"
      style={{ borderColor: "var(--border-color)", textDecoration: "none" }}
    >
      <div
        className="w-full md:w-1/3 border-b md:border-b-0 md:border-r"
        style={{ borderColor: "var(--border-color)" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 md:h-40 object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <div className="pb-2 mb-2 border-b" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium" style={{ color: "var(--text-color)" }}>
              {project.title}
            </h3>
          </div>
          <p className="text-sm mt-1" style={{ color: "var(--muted-text-color)" }}>
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((techItem, tIdx) => (
            <span
              key={tIdx}
              className="text-xs rounded-full px-3 py-1"
              style={{ border: "1px solid var(--border-color)", color: "var(--text-color)" }}
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </Link>

    {idx !== total - 1 && (
      <div
        className="w-full min-h-8 md:min-h-5 border-y-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    )}
  </div>
);

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="border-b-2 w-full" style={{ borderColor: "var(--border-color)" }}>
      <div className="w-full border-b-2 flex justify-center" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] text-2xl sm:text-3xl font-semibold flex items-center px-4 sm:px-6 md:px-8 py-3 border-x-2"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          Experiences
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2"
          style={{ borderColor: "var(--border-color)" }}
        >
          {/* Featured Projects */}
          {featuredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              total={featuredProjects.length}
            />
          ))}

          {/* Divider */}
          <div
            className="w-full min-h-8 md:min-h-5 border-y-2"
            style={{
              borderColor: "var(--border-color)",
              backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
            }}
          />

          {/* Remaining Projects */}
          {showMore && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              {remainingProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  idx={idx}
                  total={remainingProjects.length}
                />
              ))}
              <div
                className="w-full min-h-8 md:min-h-5 border-y-2"
                style={{
                  borderColor: "var(--border-color)",
                  backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
                }}
              />
            </div>
          )}

          {/* Show More / Show Less Button */}
          <div className="w-full flex justify-center py-5">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-2 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300"
              style={{
                border: "1px solid var(--border-color)",
                color:  "black",
                background: "white",
                cursor: "pointer",
              }}
            >
              {showMore ? "↑ Show Less" : `↓ Show More Projects (${remainingProjects.length} more)`}
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full min-h-10 border-y-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Projects;
 