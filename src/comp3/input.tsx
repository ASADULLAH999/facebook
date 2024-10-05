// export function Input({ type, placeholder, className, ...props }) {
//     return (
//       <input
//         type={type}
//         placeholder={placeholder}
//         className={`px-4 py-2 border rounded ${className}`}
//         {...props}
//       />
//     );
//   }
  


import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  className?: string; // className ko optional banaya hai
}

export function Input({ type, placeholder, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded ${className}`}
      {...props}
    />
  );
}
