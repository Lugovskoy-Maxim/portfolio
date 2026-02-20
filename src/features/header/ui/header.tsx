"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderLink } from "@/shared";
import clsx from "clsx";

import logo_default from "../../../../public/logo_default.svg";
import tg_logo from "../../../../public/media/tg.svg";
import git_logo from "../../../../public/media/git.svg";
import email_logo from "../../../../public/media/email.svg";
import {
  HERO_EMAIL,
  HERO_GITHUB,
  HERO_TELEGRAM,
  SITE_TITLE,
} from "@/shared/lib/constants";

const navLinks = [
  { href: "/", text: "главная" },
  { href: "/projects", text: "проекты" },
  { href: "/about", text: "обо мне" },
  { href: "/cv", text: "резюме" },
  { href: "/contacts", text: "контакты" },
];

const socialLinks = [
  { href: HERO_GITHUB, iconSrc: git_logo, iconAlt: "Github" },
  { href: HERO_TELEGRAM, iconSrc: tg_logo, iconAlt: "Telegram" },
  { href: `mailto:${HERO_EMAIL}`, iconSrc: email_logo, iconAlt: "Email" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={clsx(
        "site-header sticky top-0 z-30 w-full border-b border-[var(--border-muted)]",
        "bg-[var(--background)]/95 backdrop-blur-md",
        "flex justify-center px-4 md:px-8 py-4"
      )}
    >
      <div className="flex w-full max-w-5xl items-center justify-between">
        {/* Left: social links (desktop) */}
        <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
          <div className="h-16 w-px bg-[var(--border)]" aria-hidden />
          {socialLinks.map(({ href, iconSrc, iconAlt }) => (
            <HeaderLink
              key={href}
              href={href}
              variant="secondary"
              icon
              iconSrc={iconSrc}
              iconAlt={iconAlt}
              iconSize="h-5 w-5"
              activeClassName="font-bold text-[var(--foreground)]"
              onClick={closeMenu}
              className="opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          ))}
        </div>

        {/* Center: logo + nav */}
        <div className="flex flex-1 items-center justify-between lg:justify-center gap-8">
          <div className="flex select-none items-center gap-2">
            <Image src={logo_default} alt="" className="h-8 w-8" />
            <span className="text-lg font-bold text-[var(--foreground)]">
              {SITE_TITLE}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1" aria-label="Основная навигация">
            {navLinks.map(({ href, text }) => (
              <HeaderLink
                key={href}
                href={href}
                variant="secondary"
                activeClassName="font-semibold text-[var(--primary)]"
                text={text}
                className="px-3 py-2 rounded-lg hover:bg-[var(--surface)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
              />
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-[var(--border-muted)] bg-[var(--background-elevated)]"
            aria-label="Мобильное меню"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map(({ href, text }) => (
                <HeaderLink
                  key={href}
                  href={href}
                  variant="mobile"
                  activeClassName="font-semibold text-[var(--primary)]"
                  onClick={closeMenu}
                  text={text}
                  className="rounded-lg px-4 py-3 text-[var(--foreground-muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                />
              ))}
              <div className="mt-4 flex justify-center gap-6 border-t border-[var(--border-muted)] pt-4">
                {socialLinks.map(({ href, iconSrc, iconAlt }) => (
                  <HeaderLink
                    key={href}
                    href={href}
                    variant="secondary"
                    icon
                    iconSrc={iconSrc}
                    iconAlt={iconAlt}
                    iconSize="h-6 w-6"
                    activeClassName="font-bold text-[var(--foreground)]"
                    onClick={closeMenu}
                  />
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
