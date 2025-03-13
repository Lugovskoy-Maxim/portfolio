
import { SkillsList } from "@/features/skills";
import { HeadingSectionTitle } from "@/shared";

export default function SkillsSection() {
  return (
    <section id='skills' className="flex shrink-0 px-4 md:px-18 max-w-5xl w-full items-start justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col ">
      <HeadingSectionTitle title="навыки" />
      <SkillsList />
    </section>
  );
}
