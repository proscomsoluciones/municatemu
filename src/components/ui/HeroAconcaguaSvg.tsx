'use client';

import React from 'react';

export const HeroAconcaguaSvg: React.FC = () => {
  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-3xl bg-gradient-to-b from-[#F4EAF5] to-papel dark:from-[#260E27] dark:to-[#140715] border border-lineas/80 shadow-inner flex items-end justify-center">
      <svg 
        viewBox="0 0 1000 300" 
        className="w-full h-full object-cover" 
        preserveAspectRatio="none"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="hillGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A82245" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#5E1757" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="hillGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5E1757" />
            <stop offset="100%" stopColor="#2A0827" />
          </linearGradient>
          <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6A623" />
            <stop offset="100%" stopColor="#F07D26" />
          </linearGradient>
        </defs>

        {/* Rising Sun (runs once on load with CSS animation) */}
        <g className="animate-sun-rise origin-center">
          <circle cx="500" cy="110" r="56" fill="url(#sunGrad)" />
          {/* Subtle sun rays */}
          <circle cx="500" cy="110" r="70" fill="#F07D26" opacity="0.25" />
        </g>

        {/* Background Hills (Aconcagua Valley in Warm Logo tones) */}
        <path 
          d="M0,300 L0,180 Q180,120 380,190 T800,160 Q920,130 1000,170 L1000,300 Z" 
          fill="#A82245" 
          opacity="0.3" 
        />
        
        {/* Midground Hills */}
        <path 
          d="M0,300 L0,200 Q250,130 500,210 T1000,180 L1000,300 Z" 
          fill="url(#hillGrad1)" 
        />

        {/* Foreground Hills */}
        <path 
          d="M0,300 L0,240 Q200,180 450,250 Q700,190 1000,230 L1000,300 Z" 
          fill="url(#hillGrad2)" 
        />

        {/* Decorative Agricultural Lines in Gold */}
        <path d="M100,280 Q300,260 500,285" stroke="#F6A623" strokeWidth="2.5" strokeDasharray="5,5" opacity="0.7" />
        <path d="M550,285 Q750,260 900,280" stroke="#F6A623" strokeWidth="2.5" strokeDasharray="5,5" opacity="0.7" />
      </svg>
    </div>
  );
};
