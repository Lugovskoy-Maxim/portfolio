import tg_icon from "../../../../public/media/tg.svg";
import git_icon from "../../../../public/media/git.svg";
import { HERO_EMAIL, HERO_GITHUB, HERO_PROFESSION, HERO_TELEGRAM, HERO_TITLE } from "@/shared/lib/constants";
import { HeaderLink, TextArea } from "@/shared";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center border-t border-sky-400 bg-(--background) mt-12 px-4 md:px-18 max-w-5xl w-full ">
      <div className=" flex flex-col justify-center items-center space-y-6  container mx-auto max-w-4xl my-6 ">
        <div className="flex justify-between container">
          <div className="flex flex-col">
            {/* Имя и контактная информация */}
            <div className="flex mb-3 gap-2 items-center">
              <h2 className="text-lg font-bold text-gray-300 italic">
                {HERO_TITLE}
              </h2>
              <TextArea className="m-0 p-0 italic">{HERO_EMAIL}</TextArea>
            </div>

            {/* Роль */}
            <div className="flex gap-2">
            <TextArea className="italic">{HERO_PROFESSION[0]} и {HERO_PROFESSION[1]}</TextArea>
            </div>
          </div>

          {/* Ссылки на медиа */}
          <div className="flex flex-col items-center">
            <h2 className="text-md font-bold text-gray-300 italic mb-2">
              Медиа
            </h2>
            <div className="flex items-center space-x-4">
              <HeaderLink
                href={HERO_TELEGRAM}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                iconSrc={tg_icon}
                iconAlt="telegram"
                iconSize="h-6 w-6"
              />
              <HeaderLink
                href={HERO_GITHUB}
                variant="secondary"
                icon={true}
                activeClassName="font-bold text-white"
                iconSrc={git_icon}
                iconAlt="GitHub"
                iconSize="h-6 w-6"
              />
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <p className="text-sm text-gray-500 mb-6">
          Copyright 2024-{new Date().getFullYear()}. Создан {HERO_TITLE}
        </p>
      </div>
    </footer>
  );
}
