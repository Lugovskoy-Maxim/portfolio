import type { Metadata } from "next";
import Header from "@/features/header";
import { Fira_Code } from "next/font/google";
import "../shared/styles/globals.css";
import { Footer } from "@/features/footer";


const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
