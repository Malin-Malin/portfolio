import RainyDays from "../assets/RainyDays.jpg";
import SemesterProject1 from "../assets/SemesterProject1.jpg";
import Exam2025 from "../assets/Exam2025.jpg";

import "./Thumbnail.css";

const ProjectCard = () => {
  return (
    <div className="projects thumbnail-containor ">
      <div className="thumbnail">
        <img
          className="thumbnail-img"
          src={RainyDays}
          alt="image from the website RainyDays"
        />
        <div className="thumbnail-content">
          <h3>
            RainyDays
            <br />
            First front-end project
          </h3>
          <div className="flex-container">
            <a
              className="project-site"
              target="_blank"
              href="https://rainy-days-malin.netlify.app/"
            >
              Explore the RainyDays project
            </a>
            <a
              className="project-site"
              target="_blank"
              href="https://github.com/Malin-Malin/rainyDays-with-js"
            >
              GitHub Repository
            </a>
            <a
              className="project-site"
              target="_blank"
              href="https://www.figma.com/design/cz2XeWJILbv0AsgwyVpErZ/Rainy-days-nettside?node-id=1-55&m=dev&t=TpV8uqXX9Wg8Jnof-1"
            >
              Figma design
            </a>
          </div>
          <p className="small-text">
            Password for the Figma design: Design-Malin-2025
          </p>
          <br />
          <p>
            RainyDays was my first front-end project: a fictional webshop for
            rain jackets built with HTML and CSS. (JavaScript was added later).
            <br />I focused on clean structure, responsive design, and
            user-friendly navigation. It marked the start of my coding journey
            Looking back, I’m proud of how far I’ve come since then – but
            RainyDays will always be a milestone that marked the start of my
            journey into web development.
          </p>
        </div>
      </div>
      <div className="thumbnail">
        <img
          className="thumbnail-img"
          src={SemesterProject1}
          alt="image from the website Community Science Museum"
        />
        <div className="thumbnail-content">
          <h3>
            Community Science Museum <br />
            Semester project
          </h3>
          <div className="flex-container">
            <a
              className="project-site"
              target="_blank"
              href="https://community-science-museum-malin.netlify.app/"
            >
              Explore the Semester project
            </a>
            <a
              className="project-site"
              target="_blank"
              href="https://github.com/Malin-Malin/CommunityScienceMuseum"
            >
              GitHub Repository
            </a>
            <a
              className="project-site"
              target="_blank"
              href="https://www.figma.com/design/PcjaK78LWGKnyWJ6MJvBxM/Semester-project-1?node-id=157-251&p=f&t=6bmwF81KrDgIeBun-0"
            >
              Figma design
            </a>
          </div>
          <p className="small-text">
            Password for the Figma design: Design-Malin-2025
          </p>
          <br />
          <p>
            This semester project was about designing and building a website for
            a fictional science museum aimed at children and young teens. I
            focused on playful design, clear structure, and accessibility, using
            only HTML and CSS. It was a great challenge that helped me grow in
            both creativity and coding confidence.
          </p>
        </div>
      </div>
      <div className="thumbnail">
        <img
          className="thumbnail-img"
          src={Exam2025}
          alt="image from the website Jæren Makerspace"
        />
        <div className="thumbnail-content">
          <h3>
            Jæren Makerspace <br />
            Exam Project
          </h3>
          <div className="flex-container">
            <a
              className="project-site"
              target="_blank"
              href="https://courageous-stroopwafel-073cc9.netlify.app/"
            >
              Explore the project
            </a>
            <a
              className="project-site"
              target="_blank"
              href="https://github.com/Malin-Malin/FED1-PE1-Malin-Malin"
            >
              GitHub Repository (Private)
            </a>
            <a
              className="project-site"
              target="_blank"
              href="https://www.figma.com/design/XK4EWZGT7lsvJkwN0gE2Tc/Exam-idea?node-id=2-151&p=f&t=tTlTa2mfEfUZXNPg-0"
            >
              Figma design
            </a>
          </div>
          <p className="small-text">
            Password for the Figma design: Exam-Malin-2025
          </p>
          <br />
          <p>
            For my first-year exam, I created a website for a fictional creative
            space called Jæren Makerspace. The site includes multiple pages, a
            blog system, and forms – all built using HTML, CSS and JavaScript.
            This project brought together everything I’ve learned so far, with a
            strong focus on structure, usability, and visual consistency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
