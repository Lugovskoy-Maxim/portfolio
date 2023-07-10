import blog from '../images/blog.png';
import exploper from '../images/explorer.png';
import exploper_api from '../images/explorer-api.png';
import mesto from '../images/mesto.png';
import travel from '../images/travel.png';
import learn from '../images/learn.png';

export const initialProjects = [
  {
    name: 'partfolio-blog',
    about: 'Сайт блог',
    about_full: `Сайт блог.
    Стек технологий: Js, React, Redux
    Основная цель: полигон для изучения новых технологий и поведения браузера.
    `,
    image: `${blog.src}`,
    link: 'https://github.com/Lugovskoy-Maxim/partfolio-blog-react',
  },
  {
    name: 'exploper',
    about: 'Обозреватель фильмов',
    image: 'https://i.ibb.co/q03Qb8L/2023-07-10-042548.png',
    link: `${exploper.src}`,
    about_full: `Сайт с фильмами
    Стек технологий: Js, React
    Основная цель: создание полноценного приложения состоящего из 2 частей фронта и бека.
    Функцианальность: защищёные роуты, личный профиль, api, сохранение и удаление фильмов.
    `,
  },
  {
    name: 'explorer-api',
    about: 'Серверное приложение',
    image: `${exploper_api.src}`,
    link: 'https://github.com/Lugovskoy-Maxim/movies-explorer-api',
    about_full: `Серверное приложение.
    Стек технологий: Js, Express.js, Node.js
    Основная цель: создание полноценного приложения состоящего из 2 частей фронта и бека.
    Функцианальность: защищёные роуты, валидация, логирование.
    `,
  },
  {
    name: 'react-mesto-api',
    about: 'Веб приложение с фото',
    image: `${mesto.src}`,
    link: 'https://github.com/Lugovskoy-Maxim/react-mesto-api-full',
    about_full: `React Mesto API Full
    Стек технологий: Js, React, Express.js, Node.js
    Основная цель: это полнофункциональное веб-приложение, разработанное с использованием React и Node.js, предназначенное для создания и управления галереи изображений.`,
  },
  {
    name: 'russian-travel',
    about: 'Путешествие по России',
    image: `${travel.src}`,
    link: 'https://github.com/Lugovskoy-Maxim/russian-travel',
    about_full: `Сайт о путешествиях по России
    Стек технологий: HTML, CSS, BEM
    Основная цель: изучение и закреплен материала адаптивной верстки.
    `,
  },
  {
    name: 'how-to-learn',
    about: 'Научиться учиться',
    image: `${learn.src}`,
    link: 'https://github.com/Lugovskoy-Maxim/how-to-learn',
    about_full: `Одностроничный сайт
    Стек технологий: HTML, CSS, BEM
    Основная цель: изучение и закреплен материала адаптивной верстки.
    `,
  },
];
