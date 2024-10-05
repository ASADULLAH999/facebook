// export function Card({ children, className }) {
//     return <div className={`bg-white shadow-md rounded ${className}`}>{children}</div>;
//   }
  
//   export function CardContent({ children, className }) {
//     return <div className={`p-4 ${className}`}>{children}</div>;
//   }
  
//   export function CardFooter({ children, className }) {
//     return <div className={`p-4 ${className}`}>{children}</div>;
//   }
  


import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string; // className ko optional banaya hai
}

export function Card({ children, className }: CardProps) {
  return <div className={`bg-white shadow-md rounded ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
