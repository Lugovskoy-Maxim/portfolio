import Link from "next/link";
import Image from "next/image";
import {
  HERO_EMAIL,
  HERO_GITHUB,
  HERO_PROFESSION,
  HERO_TITLE,
  HERO_TELEGRAM,
} from "@/shared/lib/constants";
import tg_icon from "../../../../public/media/tg.svg";
import git_icon from "../../../../public/media/git.svg";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[var(--border-muted)] bg-[var(--background-elevated)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="text-lg font-semibold text-[var(--foreground)]">
            {HERO_TITLE}
          </p>
          <p className="text-sm text-[var(--foreground-muted)]">
            {HERO_PROFESSION[0]} и {HERO_PROFESSION[1]}
          </p>
          <a
            href={`mailto:${HERO_EMAIL}`}
            className="mt-1 text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded"
          >
            {HERO_EMAIL}
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-[var(--foreground-muted)]">
            Медиа
          </span>
          <div className="flex gap-4">
            <Link
              href={HERO_TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
              aria-label="Telegram"
            >
              <Image src={tg_icon} alt="" width={24} height={24} />
            </Link>
            <Link
              href={HERO_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
              aria-label="GitHub"
            >
              <Image src={git_icon} alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
      <p className="border-t border-[var(--border-muted)] py-4 text-center text-sm text-[var(--foreground-subtle)]">
        © 2024–{new Date().getFullYear()} {HERO_TITLE}
      </p>
    </footer>
  );
}
