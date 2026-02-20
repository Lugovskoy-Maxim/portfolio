"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/shared/lib/skills";
import Image from "next/image";
import dots_image from "../../../../public/bg/dots_image.svg";
import { usePathname } from "next/navigation";

export default function SkillsList() {
  const pathname = usePathname();
  const isAboutPage = pathname?.startsWith("/about") ?? false;

  return (
    <div className="flex w-full flex-col gap-8 py-4 md:flex-row md:items-start">
      {!isAboutPage && (
        <div className="hidden md:grid md:w-1/4 lg:w-1/3 grid-cols-3 gap-4 place-items-center opacity-60">
          <div className="h-10 w-10 transition-transform hover:scale-110">
            <Image src={dots_image} alt="" width={32} height={32} />
          </div>
          <div className="h-24 w-20 rounded-lg border-2 border-[var(--border)] animate-pulse hover:scale-105" />
          <div />
          <div className="h-14 w-14 rounded-lg border-2 border-[var(--primary)]/50 animate-pulse hover:scale-105" />
          <div />
          <div className="h-10 w-10 opacity-50 transition-transform hover:scale-110">
            <Image src={dots_image} alt="" width={32} height={32} />
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4 md:w-3/4 lg:w-2/3">
        {skillsData.map((category, i) => (
          <motion.div
            key={category.title}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--primary)]/30 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <h3 className="border-b border-[var(--border-muted)] px-4 py-3 text-lg font-semibold text-[var(--foreground)]">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2 p-4">
              {category.items.map((item, index) => (
                <li
                  key={index}
                  className="rounded-md bg-[var(--background-elevated)] px-2.5 py-1 text-sm text-[var(--foreground-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
