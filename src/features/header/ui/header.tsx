"use client"; // Указываем, что это клиентский компонент

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/shared/ui";

import logo_default from "../../../../public/logo_default.svg";
import tg_logo from "../../../../public/media/tg.svg";
import git_logo from "../../../../public/media/git.svg";
import email_logo from "../../../../public/media/email.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления меню

  // Переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-(--background)">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex gap-1">
          <Image src={logo_default} alt="TomiloDev" className="h-8 w-8" />
          <p className="text-white font-bold text-2xl">TomiloDev</p>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex space-x-9">
          <Link
            href="/"
            variant="secondary"
            activeClassName="font-bold text-white"
          >
            главная
          </Link>
          <Link
            href="/projects"
            variant="secondary"
            activeClassName="font-bold text-white"
          >
            проекты
          </Link>
          <Link
            href="/about"
            variant="secondary"
            activeClassName="font-bold text-white"
          >
            обо мне
          </Link>
          <Link
            href="/contacts"
            variant="secondary"
            activeClassName="font-bold text-white"
          >
            контакты
          </Link>
        </nav>

        {/* Кнопка бургера/крестика для мобилок */}
        <button
          className="md:hidden p-2 text-white hover:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            // Иконка крестика (закрытие)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Иконка гамбургера (открытие)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Мобильное меню (ссылки) */}
        <nav
          className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-(--background) transition-transform duration-300 ease-in-out transform z-10 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="justify-start items-center container mx-auto px-4 py-12 flex flex-col space-y-8  h-full overflow-y-auto">
            {/* Ссылки меню */}
            <Link
              href="/"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={toggleMenu}
            >
              главная
            </Link>
            <Link
              href="/projects"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={toggleMenu}
            >
              проекты
            </Link>
            <Link
              href="/about"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={toggleMenu}
            >
              обо мне
            </Link>
            <Link
              href="/contacts"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={toggleMenu}
            >
              контакты
            </Link>

            {/* Социальные иконки */}
            <div className="flex gap-8 mt-auto justify-center sticky bottom-0 bg-background py-4">
              <Link
                href={"/"}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                onClick={toggleMenu}
              >
                <Image src={git_logo} alt="Github" className="h-16 w-16" />
              </Link>
              <Link
                href={"/"}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                onClick={toggleMenu}
              >
                <Image src={tg_logo} alt="Telegram" className="h-16 w-16" />
              </Link>
              <Link
                href={"/"}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                onClick={toggleMenu}
              >
                <Image src={email_logo} alt="Email" className="h-16 w-16 hover:text-gray-200" />
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}