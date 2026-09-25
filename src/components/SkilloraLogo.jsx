import React from 'react';
import { Link } from 'react-router-dom';

export default function SkilloraLogo({ size = 'md', showSubtitle = false, linkToHome = true }) {
  const sizeClasses = {
    sm: 'w-7 h-7 rounded-lg text-sm',
    md: 'w-9 h-9 rounded-xl text-base',
    lg: 'w-11 h-11 rounded-2xl text-lg'
  };

  const textClasses = {
    sm: 'text-lg',
    md: 'text-xl font-bold',
    lg: 'text-2xl font-extrabold'
  };

  const Content = (
    <div className="flex items-center gap-3 select-none group">
      <div className={`${sizeClasses[size] || sizeClasses.md} bg-[#302ae6] text-white flex items-center justify-center shadow-md shadow-indigo-500/25 transition-transform duration-200 group-hover:scale-105`}>
        {/* Reciprocal ⇄ double arrows icon */}
        <svg 
          className="w-5 h-5 fill-none stroke-current stroke-[2.5]" 
          viewBox="0 0 24 24" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      </div>
      <div>
        <div className="flex items-center gap-1.5">
          <span className={`${textClasses[size] || textClasses.md} text-slate-900 tracking-tight font-bold`}>
            Skillora
          </span>
        </div>
        {showSubtitle && (
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-0.5">
            DECENTRALIZED PEER EXCHANGE
          </p>
        )}
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link to="/" className="inline-flex items-center">
        {Content}
      </Link>
    );
  }

  return Content;
}
