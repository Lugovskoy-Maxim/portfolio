import { initialProjects } from '../../constants/constants';

const Projects = () => (
  <section className="projects" id="projects">
    <h1 className="projects-title">Проекты</h1>
    <div className="projects__container">
      <ul className="projects__container-list">
        {initialProjects.map((project) => (
          <li
            className="projects__container-list-item"
            key={project.name}
            title={project.about_full}
          >
            <a
              className="projects__container-list-item"
              href={project.link}
              title={project.about_full}
            >
              <div
                className="projects__container-list-item-background"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="projects__container-list-item-content">
                <p className="projects__container-list-item-category">
                  {project.name}
                </p>
                <h3 className="projects__container-list-item-heading">
                  {project.about}
                </h3>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
