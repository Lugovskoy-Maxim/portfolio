
"use client"
import { SkillsList } from "@/features/skills";
import { HeadingSectionTitle } from "@/shared";
import { usePathname } from "next/navigation";

export default function SkillsSection() {
  const pathname = usePathname();
  const isAboutPage = pathname?.startsWith("/about") ?? false;

  return (
    <section id='skills' className="flex shrink-0 m-4 px-4 md:px-18 max-w-5xl w-full items-start justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col ">
      {!isAboutPage && <HeadingSectionTitle title="навыки" />}
      <SkillsList />
    </section>
  );
}
