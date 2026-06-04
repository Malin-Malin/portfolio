import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import "./ProjectDetailsPage.css";

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const linkClassName = (url: string) =>
    url === "#"
      ? "project-details__button project-details__button--disabled"
      : "project-details__button";

  return (
    <section
      className="project-details"
      aria-labelledby="project-details-title"
    >
      <Link className="project-details__back" to="/#projects">
        Back to projects
      </Link>

      <figure className="project-details__media">
        <img src={project.image} alt={project.imageAlt} />
      </figure>

      <div className="project-details__content">
        <h2 id="project-details-title" className="project-details__title">
          {project.title}
          <br />
          <span className="project-details__subtitle">{project.subtitle}</span>
        </h2>

        <p className="project-details__text">{project.description}</p>

        {project.figmaPassword ? (
          <p className="project-details__password">
            Password for the Figma design: {project.figmaPassword}
          </p>
        ) : null}

        <nav
          className="project-details__links"
          aria-label="Project detail links"
        >
          <a
            className={linkClassName(project.links.live)}
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
          >
            Live site
          </a>
          <a
            className={linkClassName(project.links.figma)}
            href={project.links.figma}
            target="_blank"
            rel="noreferrer"
          >
            Figma design
          </a>
          <a
            className={linkClassName(project.links.github)}
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </nav>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
