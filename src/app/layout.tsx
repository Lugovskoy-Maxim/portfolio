import type { Metadata } from "next";
import Header from "@/features/header";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Footer } from "@/features/footer";


const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Луговской Максим | Frontend-разработчик и веб-дизайнер | Создание современных сайтов",
  description: "Профессиональный фронтенд-разработчик и веб-дизайнер. Создаю адаптивные, быстрые и современные сайты на React/Next.js. Индивидуальный подход, чистый код и продуманный дизайн.",
  keywords: [
    "фронтенд разработчик",
    "веб-дизайнер",
    "создание сайтов",
    "верстка сайтов",
    "React разработчик",
    "Next.js",
    "JavaScript",
    "веб-разработка",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${firaCode.variable} min-h-screen min-w-screen max-w-screen flex flex-col justify-start items-center overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
