"use client";

import { usePathname } from "next/navigation";
import { SkillsList } from "@/features/skills";
import { HeadingSectionTitle } from "@/shared";

export default function SkillsSection() {
  const pathname = usePathname();
  const isAboutPage = pathname?.startsWith("/about") ?? false;

  return (
    <section
      id="skills"
      className="flex w-full max-w-5xl flex-col gap-6 px-4 py-12 md:px-8"
      aria-labelledby="skills-heading"
    >
      {!isAboutPage && <HeadingSectionTitle title="навыки" />}
      <SkillsList />
    </section>
  );
}
