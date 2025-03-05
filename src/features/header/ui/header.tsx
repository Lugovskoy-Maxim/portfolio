"use client"; // Указываем, что это клиентский компонент

import { useState } from "react";
import Image from "next/image";
import { HeaderLink } from "@/shared/ui";

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-(--background) md:px-10 ">
      <div className="absolute left-8 top-0 hidden flex-col space-y-4 items-center md:flex z-20">
        {/* Вертикальная линия с навигацией */}
        <div className="w-px h-40 bg-gray-400"></div>
        <HeaderLink
          href={"/"}
          variant="secondary"
          icon={true}
          activeClassName="font-bold text-white"
          onClick={closeMenu}
          iconSrc={git_logo}
          iconAlt="Github"
          iconSize="h-6 w-6"
        />

        <HeaderLink
          href={"/"}
          variant="secondary"
          icon={true}
          activeClassName="font-bold text-white"
          onClick={closeMenu}
          iconSrc={tg_logo}
          iconAlt="Telegram"
          iconSize="h-6 w-6"
        />

        <HeaderLink
          href={"/"}
          variant="secondary"
          icon={true}
          activeClassName="font-bold text-white"
          onClick={closeMenu}
          iconSrc={email_logo}
          iconAlt="Email"
          iconSize="h-6 w-6"
        />
      </div>

      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Логотип */}
        <div className="flex gap-1 select-none">
          <Image src={logo_default} alt="TomiloDev" className="h-8 w-8" />
          <p className="text-white font-bold text-2xl">TomiloDev</p>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex space-x-9">
          <HeaderLink
            href="/"
            variant="secondary"
            activeClassName="font-bold text-white"
            text="главная"
          />

          <HeaderLink
            href="/projects"
            variant="secondary"
            activeClassName="font-bold text-white"
            text="проекты"
          />
          <HeaderLink
            href="/about"
            variant="secondary"
            activeClassName="font-bold text-white"
            text="обо мне"
          />

          <HeaderLink
            href="/contacts"
            variant="secondary"
            activeClassName="font-bold text-white"
            text="контакты"
          />
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
            <HeaderLink
              href="/"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={closeMenu}
              text="главная"
            />

            <HeaderLink
              href="/projects"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={closeMenu}
              text="проекты"
            />

            <HeaderLink
              href="/about"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={closeMenu}
              text="обо мне"
            />

            <HeaderLink
              href="/contacts"
              variant="mobile"
              activeClassName="font-bold text-white"
              onClick={closeMenu}
              text="контакты"
            />

            {/* Социальные иконки */}
            <div className="flex gap-8 mt-auto justify-center sticky bottom-0 bg-background py-4">
              <HeaderLink
                href={"/"}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                onClick={closeMenu}
                iconSrc={git_logo}
                iconAlt="Github"
              />

              <HeaderLink
                href={"/"}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                onClick={closeMenu}
                iconSrc={tg_logo}
                iconAlt="Telegram"
              />
              <HeaderLink
                href={"/"}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                onClick={closeMenu}
                iconSrc={email_logo}
                iconAlt="Email"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
