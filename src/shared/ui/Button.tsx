import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  target?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  as = "button",
  href,
  type = "button",
  disabled = false,
  className = "",
  target = "_self",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = {
    primary:
      "bg-[var(--primary)] text-[var(--background)] border border-transparent hover:bg-[var(--primary-hover)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-[0.98]",
    secondary:
      "bg-transparent text-[var(--foreground-muted)] border border-[var(--border)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50 active:scale-[0.98]",
  };

  const styles = clsx(baseStyles, variantStyles[variant], className);

  if (as === "a" && href) {
    return (
      <Link href={href} className={styles} target={target} rel="noopener noreferrer">
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
