'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function ParabensPage() {
  useEffect(() => {
    // Dispara confete ao carregar a página
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const shareText = "Acabei de me tornar um Evangelista Digital Oficial pelo Método Stories Evangelístico! 🙌";
  const shareUrl = "https://metodo-stories-evangelistico.com.br"; // Substitua pela URL real

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    instagram: `https://instagram.com/stories?text=${encodeURIComponent(shareText)}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="bg-white rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-500 opacity-100 scale-100"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Parabéns! 🎉
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Você completou todos os módulos e agora é um
          </p>

          <div className="relative w-64 h-64 mx-auto mb-8">
            <div
              className="absolute inset-0 animate-spin-slow"
            >
              <div className="w-full h-full rounded-full border-4 border-secondary flex items-center justify-center">
                <div className="w-56 h-56 rounded-full border-4 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2">🏆</span>
                    <h2 className="text-2xl font-bold text-gray-900">Evangelista Digital</h2>
                    <p className="text-primary font-semibold">OFICIAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Suas Conquistas:</h3>
            <ul className="list-none p-0 space-y-2">
              <li className="flex items-center justify-center text-gray-700">
                <span className="mr-2">✅</span> Mentalidade do Evangelista Digital
              </li>
              <li className="flex items-center justify-center text-gray-700">
                <span className="mr-2">✅</span> Domínio do Método Stories
              </li>
              <li className="flex items-center justify-center text-gray-700">
                <span className="mr-2">✅</span> Aplicação Prática Completa
              </li>
              <li className="flex items-center justify-center text-gray-700">
                <span className="mr-2">✅</span> Gestão de Críticas e Objeções
              </li>
              <li className="flex items-center justify-center text-gray-700">
                <span className="mr-2">✅</span> Estratégias de Crescimento
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Compartilhe sua conquista:
            </h3>
            <div className="flex justify-center space-x-4">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#1DA1F2] hover:opacity-80 transition-opacity"
              >
                <FaTwitter />
              </a>
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#4267B2] hover:opacity-80 transition-opacity"
              >
                <FaFacebook />
              </a>
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#25D366] hover:opacity-80 transition-opacity"
              >
                <FaWhatsapp />
              </a>
              <a
                href={shareLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#E4405F] hover:opacity-80 transition-opacity"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <button
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 active:scale-95"
          onClick={() => window.location.href = '/dashboard'}
        >
          Voltar ao Dashboard
        </button>
      </div>
    </div>
  );
} 