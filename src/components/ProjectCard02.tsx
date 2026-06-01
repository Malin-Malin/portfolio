import "./ProjectCard02.css";
import RainyDays from "../assets/RainyDays.jpg";

const ProjectCard02 = () => {
  return (
    <section className="project-card02-section">
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
    </section>
  );
};

export default ProjectCard02;
