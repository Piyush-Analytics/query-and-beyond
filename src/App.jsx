import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import FloatingBg from "./components/FloatingBg";
import Header from './components/Header'
import Cover from './components/Cover'
import Profile from './components/Profile'
import Bio from './components/Bio'
import Socials from './components/Socials'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FooterName from './components/FooterName'
import StatsBridge from './components/StatsBridge'
import DinoGame from './components/DinoGame'
import ProjectDetails from "./components/ProjectDetails";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [showLogoVideo, setShowLogoVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const warmup = () => {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctx.resume().then(() => ctx.close());
      document.removeEventListener('click', warmup);
    };
    document.addEventListener('click', warmup);
    return () => document.removeEventListener('click', warmup);
  }, []);

  return (
    <Router>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header showLogoVideo={showLogoVideo} />
          <FloatingBg />
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
                    <FooterName />
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
                    <FooterName />
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
