"use client";

import { motion } from "framer-motion";
import { UserProfile } from "@/entities";
import { ContactButtons } from "@/features/contacts";
import {
  HERO_DESCRIPTION,
  HERO_PROFESSION,
  HERO_TITLE,
} from "@/shared/lib/constants";

export default function HeroSection() {
  return (
    <section className="flex w-full max-w-5xl flex-col items-center gap-10 px-4 py-12 md:px-8 lg:flex-row lg:justify-between lg:gap-16 lg:py-20">
      <div className="flex flex-col gap-4 text-center lg:max-w-xl lg:text-left">
        <motion.h1
          className="text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {HERO_TITLE}{" "}
          <span className="text-[var(--primary)]">{HERO_PROFESSION[0]}</span>
          <span> и </span>
          <span className="text-[var(--primary)]">{HERO_PROFESSION[1]}</span>
        </motion.h1>
        <motion.p
          className="text-base text-[var(--foreground-muted)] sm:text-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {HERO_DESCRIPTION}
        </motion.p>
        <motion.div
          className="flex justify-center gap-3 lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ContactButtons />
        </motion.div>
      </div>
      <motion.div
        className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <UserProfile />
      </motion.div>
    </section>
  );
}
