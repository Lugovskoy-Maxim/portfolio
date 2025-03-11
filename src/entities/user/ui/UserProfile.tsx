import Image from "next/image";
import logo from "../../../../public/logo_default.svg";
import userImage from "../../../../public/user/Image.png";
import dots_image from "../../../../public/bg/Dots.png";
import { USER_STATUS } from "@/shared/lib/constants";

export default function UserProfile() {
  return (
    <div className="flex flex-col items-center space-y-2 relative">
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
        <Image
          src={logo}
          alt="Логотип"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 absolute z-0 left-0 top-0"
        />
        <Image
          src={userImage}
          alt="Фото профиля"
          fill
          className="object-cover z-10"
        />
                <Image
          src={dots_image}
          alt="dots"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute z-20 right-0 bottom-1/15"
        />
      </div>
      <div className="flex items-center gap-2 border border-gray-600 text-gray-400 py-1 px-3">
        <div className="w-3 h-3 bg-sky-400"></div>
        <p className="text-sm sm:text-md md:text-base lg:text-lg">{USER_STATUS}</p>
      </div>
    </div>
  );
}