import project_image_1 from '../../../public/projects/1.png';
import project_image_2 from '../../../public/projects/2.png';
import project_image_3 from '../../../public/projects/3.png';
import project_image_4 from '../../../public/projects/4.png';

export const PROJECTS = [
  {
    id: 1,
    title: "Проект 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: ["HTML", "SCSS", "Typescript", "Redux Toolkit"],
    demo: "demo",
    code: "#",
    image: project_image_1.src, 
  },
  {
    id: 2,
    title: "Проект 2",
    description:  "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: ["React", "Next.js", "Node.js"],
    code: "code",
    image: project_image_2.src, 
  },
  {
    id: 3,
    title: "Проект 3",
    description:  "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: ["HTML", "SCSS", "Python", "Flask"],
    code: "code",
    image: project_image_3.src, 
  },
  {
    id: 4,
    title: "Проект 4",
    description:  "lorem ipsum dolor sit amet, consectetur adipiscing elit",
    technologies: ["CSS", "Express", "Node.js"],
    demo: "demo",
    code: "#",
    image: project_image_4.src, 
  }
];