"use client"; // Добавьте эту директиву, если используете клиентские хуки

import { usePathname } from "next/navigation";
import { PROJECTS } from "@/shared/lib/projects";
import { ProjectCard } from "@/features/projects";
import Link from "next/link";
import { HeadingSectionTitle } from "@/shared";

export default function ProjectsSection() {
  const pathname = usePathname();
  const isProjectsPage = pathname?.startsWith("/projects") ?? false;

  const displayedProjects = isProjectsPage ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section className="flex shrink-0 m-4 px-4 md:px-18 max-w-5xl w-full items-center justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col ">
      <div className="flex flex-wrap justify-between items-center w-full h-fit sm:px-18 md:px-0 px-8">
        {!isProjectsPage && <HeadingSectionTitle title="проекты" />}
        <Link href={"/projects"} className="flex shrink-0">
          {!isProjectsPage && (
            <p className="text-white ">{"Посмотреть все ~~>"}</p>
          )}
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-0">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
