'use client';

import { usePathname } from 'next/navigation';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

interface LinkProps extends NextLinkProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'mobile';
  activeClassName?: string;
  icon?: boolean;
}

export default function Link({
  children,
  variant = 'primary',
  activeClassName = '',
  icon = false,
  ...props
}: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const baseStyles = 'transition-colors duration-200';
  const variantStyles = {
    primary: 'text-blue-600 hover:text-blue-800',
    secondary: 'text-gray-400 hover:text-gray-200',
    mobile: 'text-3xl text-gray-400 hover:text-gray-200',
  };

  return (
    <NextLink
      className={`flex gap-0.5 w-fit ${baseStyles} ${variantStyles[variant]} ${
        isActive ? activeClassName : ''
      } `}
      {...props}
    >
      {!icon && <p className="text-sky-300">#</p>}
      {children}
    </NextLink>
  );
}