import type { KeyboardEvent, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectCard02.css";

const ProjectCard02 = () => {
  const navigate = useNavigate();

  const isInteractiveTarget = (target: EventTarget | null) => {
    return (
      target instanceof Element &&
      !!target.closest("a, button, input, select, textarea")
    );
  };

  const handleCardClick = (
    event: MouseEvent<HTMLElement>,
    projectId: string,
  ) => {
    if (isInteractiveTarget(event.target)) {
      return;
    }

    navigate(`/projects/${projectId}`);
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    projectId: string,
  ) => {
    if (isInteractiveTarget(event.target)) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <section className="project-card02-section">
      {projects.map((project) => (
        <article
          className="project-card02__card"
          key={project.id}
          role="link"
          tabIndex={0}
          aria-label={`Open details for ${project.title}`}
          onClick={(event) => handleCardClick(event, project.id)}
          onKeyDown={(event) => handleCardKeyDown(event, project.id)}
        >
          <span className="project-card02__media" aria-hidden="true">
            <img className="project-card02__image" src={project.image} alt="" />
          </span>

          <div className="project-card02__content">
            <div className="project-card02__header">
              <h3 className="project-card02__title">
                {project.title}
                <span className="project-card02__subtitle">
                  {project.subtitle}
                </span>
              </h3>
            </div>

            <div className="project-card02__body">
              <p className="project-card02__text project-card02__text--description">
                {project.description}
              </p>
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
        </article>
      ))}
    </section>
  );
};

export default ProjectCard02;
