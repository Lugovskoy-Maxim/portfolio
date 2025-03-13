import React, { ReactNode } from "react";

interface TextAreaProps {
  children: ReactNode | ReactNode[]; 
  className?: string;
}

export default function  TextArea ({ children, className = "" }: TextAreaProps) {
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((description, index) => (
          <p key={index} className={`text-md md:text-lg text-gray-400 mb-8 ${className}`}>
            {description}
          </p>
        ))}
      </>
    );
  }

  return (
    <p className={`flex text-md md:text-lg text-gray-400 mb-8 ${className}`}>
      {children}
    </p>
  );
};