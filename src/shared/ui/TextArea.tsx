import React, { ReactNode } from "react";
import clsx from "clsx";

interface TextAreaProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

export default function TextArea({
  children,
  className = "",
}: TextAreaProps) {
  const baseClass = "text-[var(--foreground-muted)] leading-relaxed";

  if (Array.isArray(children)) {
    return (
      <div className={clsx("space-y-3", className)}>
        {children.map((paragraph, index) => (
          <p key={index} className={clsx("text-base md:text-lg", baseClass)}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <p className={clsx("text-base md:text-lg", baseClass, className)}>
      {children}
    </p>
  );
}
