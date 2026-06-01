import Header from "./components/Header";
import Footer from "./components/Footer";
import ThumbnailCard from "./components/ThumbnailCard";
import ProjectCard from "./components/ProjectCard";
import "./variable.css";
import "./globalStyleSheet.css";
import "./App.css";
import "./index.css";
import "./Logo.css";
import ProjectCard02 from "./components/ProjectCard02";

function App() {
  return (
    <>
      <Header />
      <section id="intro">
        <h1>Portfolio</h1>
        <p>
          Welcome to my portfolio!
          <br />
          Here you’ll find a collection of the creative work I’ve completed
          during my first year as a front-end development student at Noroff.
          This site showcases everything from wireframes and design mockups to
          fully coded websites using HTML, CSS and JavaScript.
          <br />
          I'm someone who values structure, creativity, and functional design.
          Feel free to explore my work and get in touch if you want to learn
          more!
        </p>
      </section>
      <ProjectCard02 />
      <section id="about">
        <h2>About me</h2>
        <ThumbnailCard />
      </section>
      <section id="projects">
        <h2>A collection of my work</h2>
        <ProjectCard />
      </section>
      <Footer />
    </>
  );
}

export default App;
