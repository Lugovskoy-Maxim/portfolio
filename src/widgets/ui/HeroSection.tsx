import { UserProfile } from "@/entities";
import { ContactButtons } from "@/features/contacts";
import {
  HERO_DESCRIPTION,
  HERO_PROFESSION,
  HERO_TITLE,
} from "@/shared/lib/constants";

export default function HeroSection() {
  return (
    <section className="flex shrink-0 px-4 md:px-18 max-w-5xl w-full items-center justify-between bg-(--background) gap-5 md:gap-8 lg:gap-10 flex-col lg:flex-row ">
      <div className="flex flex-col space-y-2 lg:space-y-5 md:max-w-lg w-full text-center lg:text-left">
        {" "}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          {HERO_TITLE}{" "}
          <span className="text-sky-400">{HERO_PROFESSION[0]}</span>
          <span>{" и "}</span>  
          <span className="text-sky-400">{HERO_PROFESSION[1]}</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-md md:text-base lg:text-lg">
          {HERO_DESCRIPTION}
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <ContactButtons />
        </div>
      </div>
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <UserProfile />
      </div>
    </section>
  );
}
