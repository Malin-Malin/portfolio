import "./ProjectCard02.css";
import RainyDays from "../assets/RainyDays.jpg";
import SemesterProject1 from "../assets/SemesterProject1.jpg";
import Exam2025 from "../assets/Exam2025.jpg";
import Skretcher from "../assets/Skretcher.png";
import cssFrameworks from "../assets/cssFrameworks.png";
import Exame2026 from "../assets/Exam2026.png";
import SemesterProject02 from "../assets/SemesterProject02.png";

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

      {/* Walk in dinner Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://courageous-stroopwafel-073cc9.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Walk in Dinner live site"
        >
          <img
            className="project-card02__image"
            src={SemesterProject02}
            alt="Walk in Dinner project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              Walk in Dinner <br />
              Semester Project 2
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              Walk In Dinner was developed as my semester project after
              receiving approval to create a custom assignment based on a
              real-world concept. The application was designed to support a
              local dining event by simplifying participant registration, event
              information sharing, and overall event management. This project
              allowed me to work through the complete development process, from
              planning and design to implementation and testing. It provided
              valuable experience in creating a solution based on actual user
              needs and practical requirements.
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://walk-in-dinner.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Figma design
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Social Media Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://courageous-stroopwafel-073cc9.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Social Media live site"
        >
          <img
            className="project-card02__image"
            src={cssFrameworks}
            alt="Social Media project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              Social Media <br />
              CSS Framework Project
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              This project focused on learning Bootstrap and understanding how
              to use the framework to create responsive and user-friendly web
              pages. The goal was not to build a complex application, but to
              explore Bootstrap’s grid system, components, and built-in styling
              features. Through this assignment, I gained practical experience
              in implementing a CSS framework and learned how it can improve
              development efficiency while maintaining a consistent design
              across a website.
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://sosial-media-application.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Skretcher Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://genuine-sundae-0c12fa.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Skretcher live site"
        >
          <img
            className="project-card02__image"
            src={Skretcher}
            alt="Skretcher project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              Skretcher <br />
              React Framework Project
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              This project was created as part of our introduction to the React
              framework. The main objective was to learn component-based
              development, state management, routing, and API integration. I
              chose to collaborate with a fellow student, which gave us the
              opportunity to work with GitHub and Kanban workflows in a more
              professional setting. Throughout the project, we developed both
              our technical React skills and our understanding of teamwork,
              communication, task management, and collaborative software
              development practices.
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://genuine-sundae-0c12fa.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Figma design
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Exam2 Project Card */}
      <div className="project-card02__card">
        <a
          className="project-card02__media"
          href="https://holidaze-ms.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Holidaze live site"
        >
          <img
            className="project-card02__image"
            src={Exame2026}
            alt="Holidaze project screenshot"
          />
        </a>

        <div className="project-card02__content">
          <div className="project-card02__header">
            <h3 className="project-card02__title">
              Holidaze <br />
              Exam Project
            </h3>
          </div>

          <div className="project-card02__body">
            <p className="project-card02__text">
              Holidaze was my final exam project, where the task was to develop
              a complete accommodation booking platform. The application
              includes user registration and authentication, venue management,
              booking functionality, and full CRUD operations. One aspect that
              makes this project particularly meaningful is that I built all
              interface components from scratch. At the time, I was unaware that
              pre-built component libraries were allowed, which resulted in a
              deeper learning experience and a stronger understanding of
              component architecture, styling, and reusable code. This project
              demonstrates my ability to develop a larger-scale web application
              independently while implementing complex functionality and
              maintaining a cohesive user experience.
            </p>
            <nav className="project-card02__links" aria-label="Project links">
              <a
                href="https://holidaze-ms.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live site
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Figma design
              </a>
              <a target="_blank" rel="noreferrer" href="#">
                GitHub Repository
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard02;
