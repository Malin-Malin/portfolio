import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThumbnailCard from "./components/ThumbnailCard";
import ProjectCard02 from "./components/ProjectCard02";
import ProjectDetailsPage from "./components/ProjectDetailsPage";

import "./variable.css";
import "./globalStyleSheet.css";
import "./App.css";
import "./index.css";
import "./Logo.css";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const targetId = decodeURIComponent(hash.replace("#", ""));
    let attempts = 0;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (attempts < 20) {
        attempts += 1;
        requestAnimationFrame(scrollToTarget);
      }
    };

    scrollToTarget();
  }, [hash]);

  return null;
};

const HomePage = () => {
  return (
    <main>
      <section id="intro">
        <h1>Portfolio</h1>
        <p>Welcome to my portfolio!</p>
        <p>
          <br />
          Here you will find a collection of projects I have completed during my
          two years as a Front-End Development student at Noroff. This site
          showcases my work with modern technologies such as HTML, CSS,
          JavaScript, React, TypeScript, and API integration. <br />
          <br />
          Throughout my studies, I have developed everything from smaller
          learning projects to larger applications and exam projects, allowing
          me to strengthen both my technical and creative skills. <br />
          Feel free to explore my work and get in touch if you would like to
          learn more!
        </p>
      </section>
      <section id="about">
        <h2>About me</h2>
        <ThumbnailCard />
      </section>
      <section id="projects">
        <h2>A collection of my work</h2>
        <ProjectCard02 />
      </section>
    </main>
  );
};

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/:projectId"
          element={
            <main>
              <ProjectDetailsPage />
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
