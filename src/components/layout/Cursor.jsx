'use client';
import { useEffect, useState, useRef } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'link', 'product'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.stitch-hover')) {
        setCursorState('link');
      } else if (e.target.closest('.product-target')) {
        setCursorState('product');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // --- CSS STYLE BINDING ---
  
  // 1. Base Styles
  const baseDotStyles = "fixed pointer-events-none z-[10000] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference bg-solar-ochre";
  const baseRingStyles = "fixed pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-transform-uppercase select-none";

  // 2. Dynamic States & Transitions 
  let dotClasses = "w-[8px] h-[8px] transition-all duration-300";
  let ringClasses = "w-[32px] h-[32px] border border-solar-ochre/40 bg-transparent text-[0px] text-transparent tracking-[1px]";
  let ringText = "";

  // Εφαρμογή των Dynamic States & Transitions 
  const ringTransitionStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: "width 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s, border-color 0.3s, font-size 0.2s, color 0.2s, opacity 0.3s"
  };

  const dotTransitionStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: "width 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s, transform 0.3s"
  };

  if (cursorState === 'link') {
    // A. Standard Link Hover
    ringClasses = "w-[56px] h-[56px] border border-solar-ochre/90 bg-solar-ochre/5 text-[0px] text-transparent";
    dotClasses = "w-[4px] h-[4px] !bg-[#F9F8F6]"; // Luxury Invert Contrast
  } else if (cursorState === 'product') {
    // B. Products Section Hover (Logia Gaia Luxury Magnetic Ring)
    ringClasses = "w-[72px] h-[72px] border border-solar-ochre bg-solar-ochre/15 text-solar-ochre text-[9px] font-semibold tracking-[2px] font-sans";
    dotClasses = "w-0 h-0 !opacity-0 !scale-0"; // Απόλυτη εξαφάνιση του dot για αποφυγή flicker
    ringText = "VIEW";
  }

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* 1. Cursor Dot */}
      <div
        className={`${baseDotStyles} ${dotClasses}`}
        style={dotTransitionStyle}
      />

      {/* 2. Follower Ring */}
      <div
        className={`${baseRingStyles} ${ringClasses}`}
        style={ringTransitionStyle}
      >
        {ringText}
      </div>
    </div>
  );
}