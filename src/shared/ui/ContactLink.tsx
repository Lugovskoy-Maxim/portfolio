import Image from "next/image";

import tg_icon from "../../../public/media/tg.svg";
import git_icon from "../../../public/media/git.svg";
import email_icon from "../../../public/media/email.svg";

interface ContactLinkProps {
  item: {
    title: string; 
    type: string; 
    link: string; 
  };
  className?: string; 
  onClick?: () => void; 
}

export default function ContactLink({ item, className = "", onClick }: ContactLinkProps) {
  // Функция для получения иконки по типу
  const getIcon = (type: string) => {
    switch (type) {
      case "email":
        return email_icon;
      case "telegram":
        return tg_icon;
      case "github":
        return git_icon;
    }
    return null;
  };

  return (
    <div className={`flex flex-col ${className}`}>

      {/* Элемент с иконкой и ссылкой */}
      <div className="flex items-center">
        {/* Иконка */}
        <Image
          src={getIcon(item.type)}
          alt={item.type} 
          width={24}
          height={24}
          className="mr-2"
        />

        {/* Ссылка */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-gray-400"
          onClick={onClick}
        >
          {item.title}
        </a>
      </div>
    </div>
  );
}