import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectCard02.css";

const ProjectCard02 = () => {
  return (
    <section className="project-card02-section">
      {projects.map((project) => (
        <div className="project-card02__card" key={project.id}>
          <a
            className="project-card02__media"
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} live site`}
          >
            <img
              className="project-card02__image"
              src={project.image}
              alt={project.imageAlt}
            />
          </a>

          <div className="project-card02__content">
            <div className="project-card02__header">
              <h3 className="project-card02__title">
                {project.title}
                <br />
                {project.subtitle}
              </h3>
            </div>

            <div className="project-card02__body">
              <p className="project-card02__text">{project.description}</p>
              {project.figmaPassword ? (
                <p className="project-card02__text project-card02__text--small">
                  Password for the Figma design: {project.figmaPassword}
                </p>
              ) : null}
              <nav className="project-card02__links" aria-label="Project links">
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  Live site
                </a>
                <Link to={`/projects/${project.id}`}>Read more</Link>
              </nav>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectCard02;
