import React from 'react';

const About = () => {
  return (
    <div
      className="min-h-70 min-w-screen border-b-2"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div
        className="max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60.8%] ml-[5%] sm:ml-[10%] md:ml-[15%] lg:ml-[19.4%] border-l border-r font-mono text-[15px] leading-relaxed py-4 sm:py-6"
        style={{ borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
      >
        <h1 className="text-3xl px-8 font-bold mb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          About
        </h1>

        <div className="p-8 font-thin leading-6" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
          <p className="mb-4">
            Hi! I'm <span className="font-semibold">Piyush Kumar</span>, a fresher data analyst with a strong foundation in statistics, data cleaning, and data visualization. I recently completed my degree in <span className="font-semibold">Bachelor's of Computer Application</span> from <span className="font-semibold">ST. Xavier's College, Patna</span>.
          </p>

          <p className="mb-4">
            With hands-on experience in <span className="font-semibold">Python, SQL, and Excel</span>, I combine technical skills with analytical thinking to clean, analyze, and visualize data effectively. I enjoy solving real-world problems, identifying patterns, and building data-driven solutions that create value and impact.
          </p>

          <p className="mb-4">
            Beyond data analysis, I spend my time building responsive websites, improving my SQL querying skills, and exploring modern tools in the data ecosystem. I'm naturally curious, detail-oriented, and always eager to learn, grow, and adapt in a fast-evolving data-driven world.
          </p>

          <p className="mb-4">
            <br />Peace Out ✌️
          </p>
        </div>
      </div>

      <div
        className="min-w-screen min-h-10 border-b-2 border-t-2"
        style={{
          borderColor: 'var(--border-color)',
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
        }}
      ></div>
    </div>
  );
};

export default About;
