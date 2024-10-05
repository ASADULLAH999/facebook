// export function Button({ children, className, ...props }) {
//     return (
//       <button className={`px-4 py-2 ${className}`} {...props}>
//         {children}
//       </button>
//     );
//   }
  


import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "outline"; // className ko optional banaya hai
  children: React.ReactNode; // children ka type define kiya
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={`px-4 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
}
