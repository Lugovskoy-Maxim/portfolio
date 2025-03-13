"use client";
import { skillsData } from "../../../shared/lib/skills";
import Image from "next/image";

import dots_image from "../../../../public/bg/dots_image.svg";
import { usePathname } from "next/navigation";

export default function SkillsList() {
  const pathname = usePathname();
  const isAboutPage = pathname?.startsWith("/about") ?? false;
  return (
    <div className="flex w-full text-white py-6 px-6 md:px-0 justify-center flex-col md:flex-row">
      {/* левая часть */}
      {!isAboutPage && (
        <div className="hidden mx-2 md:grid md:w-1/4 lg:w-2/5 relative h-96 grid-cols-3 gap-4 items-center ">
          <div className="w-12 h-12 opacity-25 hover:scale-125 transition-transform duration-300">
            <Image src={dots_image} alt={"dots"} width={32} height={32} />
          </div>
          <div className="border-2 opacity-40 border-gray-500 w-22 h-32 animate-pulse hover:scale-125 transition-transform duration-300"></div>
          <div></div>
          <div className="border-2 border-sky-300 w-16 h-16 animate-pulse hover:scale-125 transition-transform duration-300"></div>
          <div></div>
          <div className="w-12 h-12  opacity-15 hover:scale-250 transition-transform duration-300">
            <Image src={dots_image} alt={"dots"} width={32} height={32} />
          </div>
        </div>
      )}
      {/* правая часть */}
      <div className="flex flex-wrap gap-6 w-full md:w-3/4 lg:w-3/5 justify-center">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="border border-gray-400 w-full md:w-fit md:max-w-57 sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]lg:w-fit"
          >
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-400 w-full px-5 py-1">
              {category.title}
            </h3>
            <ul className="flex flex-wrap justify-start gap-4 space-y-1 px-5 py-2 w-full">
              {category.items.map((item, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
