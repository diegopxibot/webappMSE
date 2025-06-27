'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ModuleCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLocked: boolean;
  href: string;
}

export default function ModuleCard({ id, title, description, icon, isLocked, href }: ModuleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-xl backdrop-blur-md transform transition-all duration-300 ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      } ${
        isLocked 
          ? 'bg-dark-light border border-gray-600' 
          : 'bg-dark-light/90 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-4 right-4">
        {isLocked ? (
          <span className="text-gray-300 transform transition-transform duration-300 hover:scale-110">🔒</span>
        ) : (
          <span className="text-secondary animate-pulse transform transition-transform duration-300 hover:scale-110">✨</span>
        )}
      </div>

      <div className={`flex items-center space-x-4 mb-4 transform transition-all duration-300 ${isHovered && !isLocked ? 'translate-x-2' : ''}`}>
        <div className={`text-4xl ${isLocked ? 'text-gray-300' : 'text-primary'} transition-all duration-300 ${isHovered && !isLocked ? 'scale-110' : ''}`}>
          {icon}
        </div>
        <h3 className={`text-xl font-semibold ${isLocked ? 'text-gray-300' : 'text-white'}`}>
          {id}. {title}
        </h3>
      </div>

      <p className={`mb-6 ${isLocked ? 'text-gray-400' : 'text-gray-200'} transition-colors duration-300`}>
        {description}
      </p>

      {isLocked ? (
        <button
          disabled
          className="w-full py-2 px-4 bg-gray-700 text-gray-300 rounded-lg font-medium cursor-not-allowed transform transition-all duration-300"
        >
          Módulo Bloqueado
        </button>
      ) : (
        <Link href={href} className="block w-full">
          <button className={`w-full py-2 px-4 bg-primary text-dark font-medium rounded-lg
            transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 
            focus:outline-none focus:ring-2 focus:ring-primary/50
            transform ${isHovered ? 'scale-105 bg-primary/90' : 'scale-100'}`}>
            Acessar Módulo
          </button>
        </Link>
      )}

      {!isLocked && (
        <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-primary/5 rounded-xl"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-xl blur-sm"></div>
        </div>
      )}
    </div>
  );
} 