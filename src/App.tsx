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
        <p>
          Welcome to my portfolio!
          <br />
          Here you will find a collection of the creative work I have completed
          during my first year as a front-end development student at Noroff.
          This site showcases everything from wireframes and design mockups to
          fully coded websites using HTML, CSS and JavaScript.
          <br />I am someone who values structure, creativity, and functional
          design. Feel free to explore my work and get in touch if you want to
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
