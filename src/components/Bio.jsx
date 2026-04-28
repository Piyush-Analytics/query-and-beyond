import React from 'react';
import { Code2, MapPin, Mail, Globe, BookOpen } from 'lucide-react';

const Bio = () => {
  return (
    <div>
      <div
        style={{ borderColor: "var(--border-color)" }}
        className="border-b-2 min-h-[25vh] sm:min-h-[30vh] min-w-screen"
      >
        <div
          style={{ borderColor: "var(--border-color)" }}
          className="flex flex-col space-y-2 justify-center border-l border-r ml-[5%] sm:ml-[10%] md:ml-[15%] lg:ml-[19.4%] max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[60.8%] pl-3 sm:pl-4 py-4 sm:py-6"
        >
          {[
            { icon: <Code2 size={14} />, text: 'Data Analyst · SQL & Python & Data Visualization' },
            { icon: <BookOpen size={14} />, text: 'BCA · ST. Xavier\'s College, Patna (2021–2024)' },
            { icon: <MapPin size={14} />, text: 'Patna, Bihar, India' },
            { icon: <Mail size={14} />, text: 'kumarpkindian500@gmail.com', link: 'mailto:kumarpkindian500@gmail.com' },
            { icon: <Globe size={14} />, text: 'github.com/Piyush-Analytics', link: 'https://github.com/Piyush-Analytics' },
          ].map(({ icon, text, link }, index) => (
            <div key={index} className="flex items-center space-x-3 font-light text-sm sm:text-base">
              <div
                style={{
                  backgroundColor: "var(--icon-bg)",
                  color: "var(--icon-color)",
                  borderRadius: "9999px",
                  transition: "background-color 0.4s ease, color 0.4s ease",
                }}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center"
              >
                {icon}
              </div>
              <div style={{ color: "var(--text-color)" }} className="font-thin leading-6">
                {link ? (
                  <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="hover:underline transition-all">
                    {text}
                  </a>
                ) : (
                  text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--cover-bg)",
          backgroundImage: `repeating-linear-gradient(-45deg, var(--cover-dot) 0px, var(--cover-dot) 1px, transparent 1px, transparent 8px)`,
          transition: "background-color 0.4s ease, background-image 0.4s ease",
        }}
        className="min-w-screen min-h-10 border-b-2"
      ></div>
    </div>
  );
};

export default Bio;
