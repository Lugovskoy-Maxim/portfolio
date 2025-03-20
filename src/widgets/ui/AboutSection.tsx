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
      className="flex shrink-0 m-4 px-4 md:px-18 w-full max-w-5xl items-start justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col "
    >
      {!isAboutPage && <HeadingSectionTitle title="обо мне" />}
      <div className="flex flex-col md:flex-row justify-between items-center gap-20 py-6 px-6 md:px-0">
        <div className="container md:max-w-1/2 w-full space-y-4">
          {/* Заголовок */}
          <TextArea >
            {`${ABOUT_HELLO} ${HERO_TITLE}`}
          </TextArea>
          {/* Описание */}
          <TextArea>{ABOUT_DESCRIPTION}</TextArea>
          {/* Кнопка "Узнать больше" */}
          {!isAboutPage && <Button variant="primary" as="a" href="/about">{"Узнать больше ->"}</Button>}
        </div>

        {/* Картинка */}
        <div className="md:flex hidden relative justify-end items-end shrink-0 max-w-3xs border-b border-sky-400">
          <Image
            src={dots_image}
            alt="dots"
            width={32}
            height={32}
            className="ww-auto h-auto   absolute z-10 left-1/10 top-4/15 animate-pulse"
          />
          <Image
            src={dots_image}
            alt="dots"
            width={32}
            height={32}
            className="w-auto h-auto  absolute z-20 right-1/10 bottom-1/15 animate-pulse"
          />
          <Image
            src={user_image}
            alt="Tomilo"
            width={250}
            height={150}
            className="z-15 w-auto h-auto  "
          />
        </div>
      </div>
    </section>
  );
}
