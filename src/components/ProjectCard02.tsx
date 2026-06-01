import "./ProjectCard02.css";
import RainyDays from "../assets/RainyDays.jpg";
import SemesterProject1 from "../assets/SemesterProject1.jpg";
import Exam2025 from "../assets/Exam2025.jpg";

const ProjectCard02 = () => {
  return (
    <section className="project-card02-section">
      {/* RainyDays Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://rainy-days-malin.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the RainyDays live site"
        >
          <img
            className="project-card02__image"
            src={RainyDays}
            alt="RainyDays project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              The RainyDays
              <br />
              First front-end project
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              RainyDays was my first front-end project: a fictional webshop for
              rain jackets built with HTML and CSS. JavaScript was added later.
              I focused on clean structure, responsive design, and user-friendly
              navigation.
            </p>
            <p className="project-card02__text project-card02__text--small">
              Password for the Figma design: Design-Malin-2025
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://rainy-days-malin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a
                href="https://www.figma.com/design/cz2XeWJILbv0AsgwyVpErZ/Rainy-days-nettside?node-id=1-55&m=dev&t=TpV8uqXX9Wg8Jnof-1"
                target="_blank"
                rel="noreferrer"
              >
                Figma design
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Malin-Malin/rainyDays-with-js"
              >
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Community Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://community-science-museum-malin.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Community Science Museum live site"
        >
          <img
            className="project-card02__image"
            src={SemesterProject1}
            alt="Community Science Museum project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              Community Science Museum <br />
              Semester project
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              This semester project was about designing and building a website
              for a fictional science museum aimed at children and young teens.
              I focused on playful design, clear structure, and accessibility,
              using only HTML and CSS. It was a great challenge that helped me
              grow in both creativity and coding confidence.
            </p>
            <p className="project-card02__text project-card02__text--small">
              Password for the Figma design: Design-Malin-2025
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://community-science-museum-malin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a
                href="https://www.figma.com/design/PcjaK78LWGKnyWJ6MJvBxM/Semester-project-1?node-id=157-251&p=f&t=6bmwF81KrDgIeBun-0"
                target="_blank"
                rel="noreferrer"
              >
                Figma design
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Malin-Malin/CommunityScienceMuseum"
              >
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Jæren makerspace Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://courageous-stroopwafel-073cc9.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Jaeren Makerspace live site"
        >
          <img
            className="project-card02__image"
            src={Exam2025}
            alt="Jæren Makerspace project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              Jæren Makerspace <br />
              Exam Project
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              For my first-year exam, I created a website for a fictional
              creative space called Jæren Makerspace. The site includes multiple
              pages, a blog system, and forms – all built using HTML, CSS and
              JavaScript. This project brought together everything I’ve learned
              so far, with a strong focus on structure, usability, and visual
              consistency.
            </p>
            <p className="project-card02__text project-card02__text--small">
              Password for the Figma design: Design-Malin-2025
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://courageous-stroopwafel-073cc9.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a
                href="https://www.figma.com/design/XK4EWZGT7lsvJkwN0gE2Tc/Exam-idea?node-id=2-151&p=f&t=tTlTa2mfEfUZXNPg-0"
                target="_blank"
                rel="noreferrer"
              >
                Figma design
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Malin-Malin/FED1-PE1-Malin-Malin"
              >
                GitHub Repository (private)
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard02;
