import Image from "next/image";
import tg_icon from "../../../public/media/tg.svg";
import git_icon from "../../../public/media/git.svg";
import email_icon from "../../../public/media/email.svg";
import clsx from "clsx";

interface ContactLinkProps {
  item: { title: string; type: string; link: string };
  className?: string;
  onClick?: () => void;
}

const icons: Record<string, string> = {
  email: email_icon,
  telegram: tg_icon,
  github: git_icon,
};

export default function ContactLink({
  item,
  className = "",
  onClick,
}: ContactLinkProps) {
  const icon = icons[item.type];

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={clsx(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]",
        className
      )}
    >
      {icon && (
        <Image src={icon} alt="" width={22} height={22} className="shrink-0" />
      )}
      <span>{item.title}</span>
    </a>
  );
}
