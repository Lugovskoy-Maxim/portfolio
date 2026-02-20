import {
  AboutSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  QuoteSection,
  SkillsSection,
} from "@/widgets";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 w-full">
      <HeroSection />
      <QuoteSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
