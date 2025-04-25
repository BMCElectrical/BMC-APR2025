'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      transition={{ duration: 0.3 }}
    >
      {/* Logo Icon */}
      <div className="relative w-8 h-8">
        {/* Outer circle */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-2 border-tertiary/30 rounded-full" />
        </motion.div>
        
        {/* Trophy icon */}
        <div className="absolute inset-1.5 flex items-center justify-center text-tertiary">
          <i className="fas fa-trophy text-lg" />
        </div>
      </div>

      {/* Text Container - Always visible */}
      <div className="font-montreal font-semibold whitespace-nowrap letter-spacing-heading">
        <span className="text-gradient">Champions</span>
      </div>

      {/* Accessibility enhancement */}
      <span className="sr-only">Champions - Home</span>
    </motion.div>
  );
}