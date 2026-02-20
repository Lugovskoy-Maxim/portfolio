"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface LinkProps {
  variant?: "primary" | "secondary" | "mobile";
  activeClassName?: string;
  icon?: boolean;
  href: string;
  onClick?: () => void;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: string;
  text?: string;
  className?: string;
}

export default function HeaderLink({
  variant = "primary",
  activeClassName = "",
  icon = false,
  iconSrc = "",
  iconAlt = "",
  iconSize = "h-8 w-8",
  text = "",
  className = "",
  ...props
}: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const baseStyles =
    "inline-flex items-center gap-1.5 transition-colors duration-200 text-base hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded";
  const variantStyles = {
    primary: "text-[var(--primary)] hover:text-[var(--primary-hover)]",
    secondary: "text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
    mobile: "text-xl text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
  };

  return (
    <Link
      className={clsx(
        baseStyles,
        variantStyles[variant],
        isActive && activeClassName,
        className
      )}
      {...props}
    >
      {!icon && <span className="text-[var(--primary)]">#</span>}
      {icon && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          className={iconSize}
        />
      )}
      {text && <span>{text}</span>}
    </Link>
  );
}