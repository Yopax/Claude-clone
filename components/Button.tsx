import React, { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'default' | 'small';
type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export default function Button({
  children = 'Button',
  size = 'default',
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-[2px] focus-visible:ring-offset-[3px] focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";

  const sizeClasses: Record<ButtonSize, string> = {
    default: "px-4 py-2 text-sm rounded-lg", 
    small: "px-3 py-[7.5px] text-xs rounded-[6px]"     
  };

  // Estilos normales (activos)
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-[#141413] text-white hover:bg-black focus-visible:ring-[#141413]/70",
    secondary: "bg-white text-[#141413] border-[0.5px] border-[#1F1E1D]/40 focus-visible:ring-[#3266AD]/50",
    danger: "bg-[#B53333] text-white focus-visible:ring-[#A73D39]/50",
  };

  // NUEVO: Estilos específicos para cada variante cuando están en "disabled"
  const disabledClasses: Record<ButtonVariant, string> = {
    primary: "bg-[#8f8f8f] text-white cursor-not-allowed focus-visible:ring-0",
    secondary: "bg-white text-[#1F1E1D]/40 border-[0.5px] border-[#1F1E1D]/40 cursor-not-allowed focus-visible:ring-0",
    danger: "bg-[#e59b9b] text-white cursor-not-allowed focus-visible:ring-0", // Un rojo más suave/apagado
  };

  // Evaluamos: Si está disabled, busca en el diccionario de disabled. Si no, busca en el normal.
  const finalColorClasses = disabled 
    ? disabledClasses[variant]
    : `${variantClasses[variant]} cursor-pointer`;

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${finalColorClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}