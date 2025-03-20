import { ProjectsSection } from "@/widgets";


export default function ProjectsPage () {
  return (
        <div className="flex items-start w-full flex-col justify-items-center h-full font-[family-name:var(--font-geist-sans)] relative space-y-4" >
          <main className="flex flex-col justify-center space-y-10 w-full mt-0 ml-auto mr-auto items-center">
          <ProjectsSection/>
          </main>
        </div>
  )
}