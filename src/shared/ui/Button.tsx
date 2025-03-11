interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const baseStyles = "ms:px-6 ms:py-2 px-3 py-1 text-gray-400 text-sm sm:text-md md:text-base lg:text-lg hover:bg-gray-700 bg-transparent border transition-colors duration-200 cursor-pointer";
  const variantStyles = {
    primary: "border-sky-400",
    secondary: "border-gray-600",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}