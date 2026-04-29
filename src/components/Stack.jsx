import React, { useState } from "react";

const Stack = () => {
  const categorizedStack = {
    "Data Analysis": [
      "python",
      "mysql",
      "postgresql",
    ],
    "Visualization": [
      "matplotlib",
      "jupyter",
    ],
    "Web & Tools": [
      "html5",
      "css3",
      "javascript",
      "git",
      "github",
      "figma",
    ],
    "Platforms": [
      "microsoftsqlserver",
      "vscode",
      "linux",
    ],
  };

  const categories = Object.keys(categorizedStack);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const getIconUrl = (name) => {
    const custom = {
      github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      matplotlib: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      microsoftsqlserver: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    };
    return custom[name] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
  };

  const getIconClass = (name) => {
    const needsInvert = ["github"];
    return needsInvert.includes(name)
      ? "w-9 h-9 dark:invert hover:scale-110 transition-transform duration-300"
      : "w-9 h-9 hover:scale-110 transition-transform duration-300";
  };

  const formatName = (str) => {
    const names = {
      html5: "HTML5", css3: "CSS3", mysql: "MySQL", postgresql: "PostgreSQL",
      github: "GitHub", javascript: "JavaScript", matplotlib: "Matplotlib",
      jupyter: "Jupyter", microsoftsqlserver: "SQL Server", vscode: "VS Code",
      linux: "Linux", figma: "Figma", git: "Git", python: "Python",
    };
    return names[str] || str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getOfficialUrl = (name) => {
  const urls = {
    python: "https://www.python.org",
    mysql: "https://www.mysql.com",
    postgresql: "https://www.postgresql.org",
    matplotlib: "https://matplotlib.org",
    jupyter: "https://jupyter.org",
    html5: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css3: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    git: "https://git-scm.com",
    github: "https://github.com",
    figma: "https://www.figma.com",
    microsoftsqlserver: "https://www.microsoft.com/en-us/sql-server",
    vscode: "https://code.visualstudio.com",
    linux: "https://www.linux.org",
  };
  return urls[name] || "#";
};

  const Tooltip = ({ name }) => (
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-md border bg-[var(--bg-color)] text-[var(--text-color)] border-[var(--border-color)] shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
      {formatName(name)}
    </span>
  );

  const IconWithTooltip = ({ name }) => (
    <a
    href={getOfficialUrl(name)}
    target="_blank"
    rel="noopener noreferrer"
    className="relative group flex flex-col items-center p-2"
    title={formatName(name)}
  >
    <Tooltip name={name} />
    <img src={getIconUrl(name)} alt={`${name} icon`} className={getIconClass(name)} onError={(e) => { e.target.style.display='none'; }} />
  </a>
);

  return (
    <div className="border-b-2 w-full flex flex-col transition-colors duration-400" style={{ borderColor: "var(--border-color)" }}>
      <div className="w-full border-b-2 flex justify-center transition-colors duration-400" style={{ borderColor: "var(--border-color)" }}>
        <div
          className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] text-2xl sm:text-3xl font-bold flex items-center px-4 sm:px-6 md:px-8 py-4 border-x-2 transition-colors duration-400"
          style={{ borderColor: "var(--border-color)", color: "var(--text-color)" }}
        >
          Tech Stack
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex justify-center">
          <div className="flex gap-3 flex-wrap min-w-[61.5%] border-x-2 border-b-2 px-8 py-4 border-[var(--border-color)]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[var(--text-color)] text-[var(--bg-color)] shadow-md scale-105"
                    : "border-[var(--border-color)] text-[var(--text-color)] hover:bg-[var(--border-color)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[61.5%] border-x-2 px-7 py-6 relative"
            style={{
              borderColor: "var(--border-color)",
              backgroundImage: `radial-gradient(var(--cover-dot) 1px, transparent 0.1px)`,
              backgroundSize: "14px 14px",
            }}
          >
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6 place-items-center">
              {categorizedStack[activeCategory].map((name) => (
                <IconWithTooltip key={name} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="block sm:hidden">
        <div
          className="w-full max-w-[90%] mx-auto border-x-2 px-6 py-8 space-y-10"
          style={{
            borderColor: "var(--border-color)",
            backgroundImage: `radial-gradient(var(--cover-dot) 1px, transparent 0.1px)`,
            backgroundSize: "14px 14px",
          }}
        >
          {Object.entries(categorizedStack).map(([category, stack]) => (
            <div key={category} className="bg-[var(--bg-color)]/50 backdrop-blur-sm p-4 rounded-xl border border-[var(--border-color)]">
              <h2 className="text-xl font-bold mb-6 text-center tracking-wide" style={{ color: "var(--text-color)" }}>
                {category}
              </h2>
              <div className="grid grid-cols-4 gap-y-8 gap-x-4 place-items-center">
                {stack.map((name) => (
                  <IconWithTooltip key={name} name={name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full min-h-12 border-y-2"
        style={{
          borderColor: "var(--border-color)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      />
    </div>
  );
};

export default Stack;
