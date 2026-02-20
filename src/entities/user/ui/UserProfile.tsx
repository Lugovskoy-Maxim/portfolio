"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../../../public/logo_default.svg";
import userImage from "../../../../public/user/Image.png";
import dots_image from "../../../../public/bg/dots_image.svg";
import { USER_STATUS } from "@/shared/lib/constants";

export default function UserProfile() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64">
        <Image
          src={logo}
          alt=""
          width={48}
          height={48}
          className="absolute left-0 top-0 z-0 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20"
        />
        <Image
          src={userImage}
          alt="Фото профиля"
          fill
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
          className="object-cover z-10 rounded-lg"
        />
        <Image
          src={dots_image}
          alt=""
          width={40}
          height={40}
          className="absolute bottom-2 right-0 z-20 h-10 w-10 animate-pulse opacity-70 sm:h-12 sm:w-12"
        />
      </div>
      <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-[var(--success)] animate-pulse" aria-hidden />
        <p className="text-sm text-[var(--foreground-muted)]">{USER_STATUS}</p>
      </div>
    </motion.div>
  );
}
