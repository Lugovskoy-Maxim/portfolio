"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/shared/ui/Button";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    demo?: string;
    code: string;
    image: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors hover:border-[var(--primary)]/40 hover:bg-[var(--surface-hover)]"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--background-elevated)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-[var(--border-muted)] p-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-md bg-[var(--primary-muted)] px-2 py-0.5 text-xs font-medium text-[var(--primary)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          {project.title}
        </h3>
        <p className="flex-1 text-sm text-[var(--foreground-muted)] leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.demo && (
            <Button as="a" href={project.demo} variant="primary">
              Демо →
            </Button>
          )}
          <Button as="a" href={project.code} variant="secondary">
            Код
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
