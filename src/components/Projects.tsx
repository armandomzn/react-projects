import { AiFillGithub } from "react-icons/ai";
import { useFetchProjects } from "../fetchProjects";

const Projects = () => {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <div className="loading-parent">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <section className="projects">
      <div className="section-title">
        <h3>projects</h3>
        <div className="underline"></div>
      </div>
      <div className="project-items">
        {projects.map((project) => {
          const image = project.image.fields.file.url;
          return (
            <article className="project" key={project.id}>
              <a href={project.url_project} target="_blank">
                <img src={image} alt={project.title} />
              </a>
              <div className="project-info">
                <h4>{project.title}</h4>
                <div className="project-icon">
                  <a href={project.github} target="_blank">
                    <span className="project-icon">
                      <AiFillGithub />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
