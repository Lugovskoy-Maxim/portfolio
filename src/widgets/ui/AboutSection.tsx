"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HeadingSectionTitle, TextArea } from "@/shared";
import { Button } from "@/shared/ui/Button";
import user_image from "../../../public/user/Image.png";
import dots_image from "../../../public/bg/dots_image.svg";
import {
  ABOUT_DESCRIPTION,
  ABOUT_HELLO,
  HERO_TITLE,
} from "@/shared/lib/constants";

export default function AboutSection() {
  const pathname = usePathname();
  const isAboutPage = pathname?.startsWith("/about") ?? false;

  return (
    <section
      id="about"
      className="flex w-full max-w-5xl flex-col gap-8 px-4 py-12 md:px-8"
      aria-labelledby="about-heading"
    >
      {!isAboutPage && <HeadingSectionTitle title="обо мне" />}
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <motion.div
          className="flex flex-1 flex-col gap-4"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <TextArea>
            {`${ABOUT_HELLO} ${HERO_TITLE}`}
          </TextArea>
          <TextArea>{ABOUT_DESCRIPTION}</TextArea>
          {!isAboutPage && (
            <Button variant="primary" as="a" href="/about">
              Узнать больше →
            </Button>
          )}
        </motion.div>
        <motion.div
          className="relative hidden shrink-0 md:block"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative max-w-[250px] border-b-2 border-[var(--primary)]/50 pb-2">
            <Image
              src={dots_image}
              alt=""
              width={32}
              height={32}
              className="absolute left-2 top-4 z-10 animate-pulse opacity-60"
            />
            <Image
              src={dots_image}
              alt=""
              width={32}
              height={32}
              className="absolute bottom-4 right-2 z-10 animate-pulse opacity-60"
            />
            <Image
              src={user_image}
              alt="Фото"
              width={250}
              height={150}
              className="relative z-0 w-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
