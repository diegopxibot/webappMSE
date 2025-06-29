'use client';

import { useState } from 'react';
import Link from 'next/link';
import { templates, gerarIdeiaAleatoria } from './templates';

interface IdeiaStory {
  titulo: string;
  reflexao: string;
  cta: string;
  hashtags: string;
}

const temas = Object.keys(templates);

export default function GeradorIdeiasPage() {
  const [temaSelecionado, setTemaSelecionado] = useState('');
  const [ideiaAtual, setIdeiaAtual] = useState<IdeiaStory | null>(null);
  const [copiado, setCopiado] = useState(false);

  const gerarNovaIdeia = () => {
    const novaIdeia = gerarIdeiaAleatoria(temaSelecionado);
    setIdeiaAtual(novaIdeia);
  };

  const copiarTexto = () => {
    if (!ideiaAtual) return;

    const texto = `${ideiaAtual.titulo}\n\n${ideiaAtual.reflexao}\n\n${ideiaAtual.cta}\n\n${ideiaAtual.hashtags}`;
    navigator.clipboard.writeText(texto);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            href="/dashboard/ferramentas" 
            className="group mb-6 inline-flex items-center rounded-lg bg-[#00FFFF]/10 px-4 py-2 text-sm text-[#00FFFF] transition-all hover:bg-[#00FFFF]/20"
          >
            <svg className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Ferramentas
          </Link>

          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            🎯 Gerador de Ideias para Stories
          </h1>
          <p className="text-gray-400">
            Selecione um tema ou use o modo aleatório para gerar ideias inspiradoras para seus stories.
          </p>
        </div>

        {/* Theme Selection Section */}
        <div className="mb-8 rounded-xl bg-[#0A0B2E]/30 p-6 backdrop-blur-sm">
          <label className="mb-4 block text-sm font-medium text-gray-300">
            Escolha um tema para seus stories
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            <button
              onClick={() => setTemaSelecionado('')}
              className={`flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                temaSelecionado === ''
                  ? 'bg-[#00FFFF] text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20'
                  : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
              }`}
            >
              🎲 Aleatório
            </button>
            {temas.map((tema) => (
              <button
                key={tema}
                onClick={() => setTemaSelecionado(tema)}
                className={`flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  temaSelecionado === tema
                    ? 'bg-[#00FFFF] text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20'
                    : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                }`}
              >
                {tema}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display Section */}
        {ideiaAtual ? (
          <div className="mb-8 overflow-hidden rounded-xl bg-[#0A0B2E]/50 p-6 shadow-xl backdrop-blur-sm">
            <h2 className="mb-4 text-xl font-bold text-[#00FFFF] sm:text-2xl">
              {ideiaAtual.titulo}
            </h2>
            <p className="mb-4 text-gray-300">{ideiaAtual.reflexao}</p>
            <p className="mb-4 text-white">{ideiaAtual.cta}</p>
            <p className="text-sm text-[#00FFFF]">{ideiaAtual.hashtags}</p>
          </div>
        ) : (
          <div className="mb-8 flex min-h-[200px] items-center justify-center rounded-xl bg-[#0A0B2E]/30 p-8 text-center backdrop-blur-sm">
            <div>
              <div className="mb-4 text-4xl">🎯</div>
              <p className="text-gray-400">
                Clique em &quot;Gerar Nova Ideia&quot; para começar
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons Section */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={gerarNovaIdeia}
            className="flex items-center justify-center rounded-lg bg-[#00FFFF] px-6 py-3 font-medium text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20 transition-all hover:bg-[#00FFFF]/90"
          >
            <span className="mr-2">🎯</span>
            Gerar Nova Ideia
          </button>
          <button
            onClick={copiarTexto}
            disabled={!ideiaAtual}
            className={`flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all ${
              !ideiaAtual
                ? 'cursor-not-allowed bg-gray-700/50 text-gray-500'
                : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
            }`}
          >
            <span className="mr-2">📋</span>
            Copiar Texto
          </button>
        </div>

        {/* Toast Notification */}
        {copiado && (
          <div className="fixed bottom-4 right-4 flex items-center rounded-lg bg-[#00FFFF] px-4 py-3 text-[#0A0B2E] shadow-lg">
            <span className="mr-2">✅</span>
            Texto Copiado!
          </div>
        )}
      </div>
    </div>
  );
} 