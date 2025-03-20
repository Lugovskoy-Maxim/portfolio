import Link from "next/link";
import React from "react";

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
    "ms:px-6 ms:py-2 px-3 py-1 text-gray-400 text-sm sm:text-md md:text-base lg:text-lg hover:bg-gray-700 bg-transparent border transition-colors duration-200 cursor-pointer";
  const variantStyles = {
    primary: "border-sky-400",
    secondary: "border-gray-600",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  const styles = `${baseStyles} ${variantStyles[variant]} ${
    disabled ? disabledStyles : ""
  } ${className}`;

  if (as === "a" && href) {
    return (
      <Link
        href={href}
        className={styles}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
