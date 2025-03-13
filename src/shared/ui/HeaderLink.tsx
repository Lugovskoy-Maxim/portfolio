'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LinkProps {

  variant?: 'primary' | 'secondary' | 'mobile';
  activeClassName?: string;
  icon?: boolean;
  href: string;
  onClick?: () => void;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: string;
  text?: string;
}

export default function HeaderLink({

  variant = 'primary',
  activeClassName = '',
  icon = false,
  iconSrc = "",
  iconAlt = "",
  iconSize = "h-12 w-12",
  text = "",
  ...props
}: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const baseStyles = 'transition-colors duration-200 text-xl';
  const variantStyles = {
    primary: 'text-blue-600 hover:text-blue-800',
    secondary: 'text-gray-400 hover:text-gray-200',
    mobile: 'text-3xl text-gray-400 hover:text-gray-200',
  };

  return (
    <Link
      className={`flex gap-0.5 w-fit ${baseStyles} ${variantStyles[variant]} ${
        isActive ? activeClassName : ''
      } pointer`}
      {...props}
    >
      {!icon && <p className="text-sky-300">#</p>}
      {icon &&  <Image src={iconSrc} alt={iconAlt} width={32} height={32} className={`${iconSize}`}  />}
      {text && <p >{text}</p>}
    </Link>
  );
}