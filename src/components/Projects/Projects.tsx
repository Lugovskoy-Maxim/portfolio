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
              href={project.link}
              className="projects__container-list-item-link"
              target="__blank"
            >
              <img
                className="projects__container-list-item-image"
                src={project.image}
                alt={project.name}
              />
              <div className="projects__container-list-item-description">
                <p className="projects__container-list-item-name">
                  {project.name}
                </p>
                <p className="projects__container-list-item-about">
                  {project.about}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Projects;
