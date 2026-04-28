import React, { useEffect, useRef, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Cover from './components/Cover'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Socials from './components/Socials'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import StatsBridge from './components/StatsBridge'
import DinoGame from './components/DinoGame'
import ProjectDetails from "./components/ProjectDetails";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const noiseRef = useRef(null);
  const [showLogoVideo, setShowLogoVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!noiseRef.current) return;
    const canvas = noiseRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = imageData.data;
      for (let i = 0; i < buffer.length; i += 4) {
        const shade = Math.random() * 255;
        buffer[i] = shade; buffer[i + 1] = shade; buffer[i + 2] = shade; buffer[i + 3] = 20;
      }
      ctx.putImageData(imageData, 0, 0);
    };
    let frame;
    const loop = () => { generateNoise(); frame = requestAnimationFrame(loop); };
    loop();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <canvas ref={noiseRef} className="fixed inset-0 pointer-events-none z-[9999]" style={{ opacity: 1 }} />
          <Header showLogoVideo={showLogoVideo} />
          <section className="relative z-10 mt-10">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Cover setShowLogoVideo={setShowLogoVideo} />
                    <Profile />
                    <Bio />
                    <Socials />
                    <About />
                    <Stack />
                    <Projects />
                    <StatsBridge />
                    <DinoGame />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/portfolio"
                element={
                  <>
                    <Cover setShowLogoVideo={setShowLogoVideo} />
                    <Profile />
                    <Bio />
                    <Socials />
                    <About />
                    <Stack />
                    <Projects />
                    <StatsBridge />
                    <DinoGame />
                    <Footer />
                  </>
                }
              />
              <Route path="/projects" element={<div className="mt-4"><Projects /></div>} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </section>
        </>
      )}
    </Router>
  );
};

export default App;
