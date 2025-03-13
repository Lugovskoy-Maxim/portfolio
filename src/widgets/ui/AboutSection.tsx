"use client";
import { HeadingSectionTitle, TextArea } from "@/shared";
import { Button } from "@/shared/ui/Button";
import Image from "next/image";

import user_image from "../../../public/user/Image.png";
import dots_image from "../../../public/bg/dots_image.svg";
import {
  ABOUT_DESCRIPTION,
  ABOUT_HELLO,
  HERO_TITLE,
} from "@/shared/lib/constants";
import { usePathname } from "next/navigation";

export default function AboutSection() {
    const pathname = usePathname();
    const isAboutPage = pathname?.startsWith("/about") ?? false;
  return (
    <section
      id="about"
      className="flex shrink-0 px-4 md:px-18 w-full max-w-5xl items-start justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col "
    >
      <HeadingSectionTitle title="обо мне" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-20 py-6 px-6 md:px-0">
        <div className="container md:max-w-1/2 w-full">
          {/* Заголовок */}
          <TextArea >
            {`${ABOUT_HELLO} ${HERO_TITLE}`}
          </TextArea>
          {/* Описание */}
          <TextArea>{ABOUT_DESCRIPTION}</TextArea>
          {/* Кнопка "Узнать больше" */}
          {!isAboutPage && <Button variant="primary">{"Узнать больше ->"}</Button>}
        </div>

        {/* Картинка */}
        <div className="md:flex hidden relative justify-end items-end shrink-0 max-w-3xs border-b border-sky-400">
          <Image
            src={dots_image}
            alt="dots"
            width={32}
            height={32}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute z-10 left-1/10 top-4/15 animate-pulse"
          />
          <Image
            src={dots_image}
            alt="dots"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-18 lg:h-18 absolute z-20 right-1/10 bottom-1/15 animate-pulse"
          />
          <Image
            src={user_image}
            alt="Tomilo"
            width={250}
            height={150}
            className="z-15"
          />
        </div>
      </div>
    </section>
  );
}
