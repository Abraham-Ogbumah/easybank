import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({children, onClick, className, type}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
