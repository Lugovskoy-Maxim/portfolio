import project_image_1 from '../../../public/projects/1.png';
import project_image_2 from '../../../public/projects/2.png';
import project_image_3 from '../../../public/projects/3.png';
import project_image_4 from '../../../public/projects/4.png';

export const PROJECTS = [
  {
    id: 5,
    title: "Портфолио",
    description: "Страница с информацией обо мне и моих проектах",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    demo: "https://lugovskoy-maxim.github.io/portfolio/",
    code: "https://github.com/Lugovskoy-Maxim/portfolio",
    image: project_image_1.src, 
  },
  {
    id: 4,
    title: "Маркетплейс",
    description:  "Функциональная составляющая маркетплейса, которая позволяет добавлять товары в корзину и оплачивать заказы за валюты или коины",
    technologies: ["React", "Next.js", "Typescript", "Redux Toolkit", "API"],
    code: "https://github.com/Lugovskoy-Maxim/marketplace",
    demo: "https://lugovskoy-maxim.github.io/marketplace/",
    image: project_image_2.src, 
  },
  {
    id: 3,
    title: "Movie explorer frontend",
    description:  "Приложение для поиска фильмов. Дипломный проект курса по web разработке Яндекс Практикум",
    technologies: ["HTML", "SCSS", "React", "API"],
    code: "https://github.com/Lugovskoy-Maxim/movies-explorer-frontend",
    image: project_image_3.src, 
  },
  {
    id: 2,
    title: "Movie explorer backend",
    description:  "API для приложения Movie explorer frontend. Дипломный проект курса по web разработке Яндекс Практикум",
    technologies: ["Express", "MongoDB", "API"],
    code: "https://github.com/Lugovskoy-Maxim/movies-explorer-frontend",
    image: project_image_3.src, 
  },
  {
    id: 1,
    title: "Место",
    description:  "Приложение для для создания и управления галереей изображений",
    technologies: ["CSS", "Express", "MongoDB", "React", "React Router", "Node.js"],
    code: "https://github.com/Lugovskoy-Maxim/react-mesto-api-full",
    image: project_image_4.src, 
  }
];