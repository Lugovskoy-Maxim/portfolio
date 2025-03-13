import React from "react";
import Image from "next/image";
import tg_icon from "../../../../public/media/tg.svg";
import git_icon from "../../../../public/media/git.svg";
import { HERO_TITLE } from "@/shared/lib/constants";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center border-t border-gray-400 bg-(--background) my-4 px-4 md:px-18 max-w-5xl w-full ">
      <div className=" flex flex-col justify-center items-center container mx-auto max-w-4xl my-4">
        <div className="flex justify-between container">
          <div className="flex flex-col">
            {/* Имя и контактная информация */}
            <div className="flex mb-3 gap-2 items-center">
              <h2 className="text-lg font-bold text-gray-300 italic">{HERO_TITLE}</h2>
              <p className="text-lg  text-gray-400">lugovskou.myu@ya.ru</p>
            </div>

            {/* Роль */}
            <p className="text-md text-gray-400 mb-3">
              Web designer and front-end developer
            </p>
          </div>

          {/* Ссылки на медиа */}
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-gray-300 italic mb-2">Медиа</h2>
            <div className="flex items-center space-x-4">
            <a
              href="https://t.me/TomiloDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image src={tg_icon} alt="Telegram" width={24} height={24} />
            </a>
            <a
              href="https://github.com/your_github"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75 transition-opacity"
            >
              <Image src={git_icon} alt="GitHub" width={24} height={24} />
            </a>
          </div>
        </div>
        </div>

        {/* Копирайт */}
        <p className="text-sm text-gray-500 mb-6">
          Copyright 2024-{new Date().getFullYear()}. Создан Tomilo
        </p>
      </div>
    </footer>
  );
}
