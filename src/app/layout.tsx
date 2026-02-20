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
    <html lang="ru" className="scroll-pt-20">
      <body
        className={`${firaCode.variable} min-h-screen w-full max-w-screen flex flex-col items-center overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]`}
      >
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-[var(--background)] focus:rounded-lg">
          Перейти к основному содержимому
        </a>
        <Header />
        <div id="main" className="flex flex-col flex-1 w-full" tabIndex={-1}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
