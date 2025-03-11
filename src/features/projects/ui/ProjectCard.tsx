import { Button } from "@/shared/ui/Button";
import Image from "next/image";

interface ProjectCardProps {
  project: PROJECTS;
}

interface PROJECTS {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demo?: string; 
  code: string; 
  image: string; 
}


export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className=" border border-gray-600 mx-2 h-fit">
      <Image className="w-full " src={project.image} alt={project.title} width={250} height={100}/>
      <div className="border border-gray-600 p-2  flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 text-sm text-gray-300">
            {tech}
          </span>
        ))}
      </div>
      <h3 className=" px-4 py-2 text-xl font-bold text-white">{project.title}</h3>
      <p className=" px-4 py-2  text-gray-400">{project.description}</p>

      <div className="flex gap-2 px-4 py-2 ">
        {project.demo && (
          <Button
            as="a"
            href={project.demo}
          >
        {"Демо <~>"}
          </Button>
        )}
        <Button
          as="a"
          href={project.code}
          variant="secondary"
        >
          {"Код ≥"}
        </Button>
      </div>
    </div>
  );
}