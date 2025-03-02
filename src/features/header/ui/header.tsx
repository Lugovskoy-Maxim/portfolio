import Image from "next/image";
import Link from "next/link";

// import logo_outline from "../../../../public/logo_outline.svg";
import logo_default from "../../../../public/logo_default.svg";


export default function Header() {
  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="flex gap-2 text-xl font-bold text-gray-800">
          <Image src={logo_default} alt="TomiloDev" className="h-8 w-8" />
          <p className="text-white">TomiloDev</p>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            Обо мне
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900">
            Проекты
          </Link>
          <Link href="/contacts" className="text-gray-600 hover:text-gray-900">
            Контакты
          </Link>
        </nav>

        {/* Мобильное меню (иконка гамбургера) */}
        <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}