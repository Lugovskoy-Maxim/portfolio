import { HeroSection } from "@/widgets/ui/HeroSection";
import { ProjectsSection } from "@/widgets/ui/ProjectsSection";
import { QuoteText } from "@/widgets/ui/Quote";


export default function Home() {
  return (
    <div className="flex items-start w-full flex-col justify-items-center min-h-full font-[family-name:var(--font-geist-sans)] relative space-y-4" >
      <main className="flex flex-col justify-center space-y-10 w-full mt-0 ml-auto mr-auto items-center">
      <HeroSection/>
      <QuoteText/>
      <ProjectsSection/>
      </main>
      <footer className="flex justify-items-center mt-0 ml-auto mr-auto items-start">
        1223
      </footer>
    </div>
  );
}
