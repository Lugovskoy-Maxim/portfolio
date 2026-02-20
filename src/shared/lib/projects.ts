import project_image_1 from '../../../public/projects/1.png';
import project_image_2 from '../../../public/projects/2.png';
import project_image_3 from '../../../public/projects/3.png';
import project_image_4 from '../../../public/projects/4.png';

export const PROJECTS = [
  {
    id: 1,
    title: "Tomilo-lib (клиент)",
    description: "Фронтенд приложения для чтения манги онлайн Tomilo-lib.ru",
    technologies: ["TypeScript", "React", "Next.js"],
    demo: "https://tomilo-lib.ru",
    code: "https://github.com/Lugovskoy-Maxim/tomilo-lib-client",
    image: project_image_1.src,
  },
  {
    id: 2,
    title: "Tomilo-lib (сервер)",
    description: "Бекенд приложения для чтения манги онлайн Tomilo-lib.ru",
    technologies: ["TypeScript", "Node.js", "API"],
    demo: "http://tomilo-lib.ru/api",
    code: "https://github.com/Lugovskoy-Maxim/tomilo-lib-server",
    image: project_image_2.src,
  },
  {
    id: 3,
    title: "Портфолио",
    description: "Страница с информацией обо мне и моих проектах",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    demo: "https://lugovskoy-maxim.github.io/portfolio/",
    code: "https://github.com/Lugovskoy-Maxim/portfolio",
    image: project_image_3.src,
  },
  {
    id: 4,
    title: "Маркетплейс",
    description: "Функциональная составляющая маркетплейса: корзина, оплата заказов валютой или коинами",
    technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "API"],
    demo: "https://lugovskoy-maxim.github.io/marketplace/",
    code: "https://github.com/Lugovskoy-Maxim/marketplace",
    image: project_image_4.src,
  },
  {
    id: 5,
    title: "Nest Server API",
    description: "Сервер с авторизацией на NestJS",
    technologies: ["TypeScript", "NestJS", "API"],
    code: "https://github.com/Lugovskoy-Maxim/nest_server_api",
    image: project_image_4.src,
  },
];