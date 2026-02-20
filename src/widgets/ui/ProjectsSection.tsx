"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/shared/lib/projects";
import { ProjectCard } from "@/features/projects";
import { HeadingSectionTitle } from "@/shared";

export default function ProjectsSection() {
  const pathname = usePathname();
  const isProjectsPage = pathname?.startsWith("/projects") ?? false;
  const displayedProjects = isProjectsPage ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section className="flex w-full max-w-5xl flex-col gap-6 px-4 py-12 md:px-8" aria-labelledby="projects-heading">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {!isProjectsPage && (
          <HeadingSectionTitle title="проекты" />
        )}
        {!isProjectsPage && (
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded px-2 py-1 transition-colors"
          >
            Посмотреть все →
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
