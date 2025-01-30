"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  style: "primary" | "secondary";
  className?: string;
  width?: string; // Added width prop
  height?: string; // Added height prop
  padding?: string; // Added padding prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  className = "",
  width = "auto",
  height = "auto",
  padding = "px-6 py-4", // default padding
}) => {
  const baseStyles = `relative flex items-center justify-center rounded-xl ${padding} font-medium text-base transition-all duration-150 overflow-hidden`;

  const styles = {
    primary: `
      bg-gradient-to-r from-[#4745D0] to-[#2A27C9] 
      text-white-10
      group
      active:shadow-[inset_0_0_0_1000px_rgba(0,0,0,0.2)]
    `,
    secondary: `
      bg-transparent 
      border-2 border-[#7780A1]
      hover:border-[#060714]
      active:border-[#060714]
      text-white-10
    `,
  };

  return (
    <button
      className={`${baseStyles} ${styles[style]} ${className}`}
      style={{
        width: width,
        height: height,
      }}
    >
      {style === "primary" && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-gradient-to-r from-white/30 to-transparent" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
