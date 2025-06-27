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
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link 
            href="/dashboard/ferramentas" 
            className="btn mb-6 inline-flex items-center text-sm text-[#00FFFF] hover:underline"
          >
            <svg className="mr-2 h-4 w-4 rotate-180" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Ferramentas
          </Link>

          <h1 className="mb-4 text-3xl font-bold text-white">
            🎯 Gerador de Ideias para Stories
          </h1>
          <p className="text-gray-400">
            Selecione um tema ou use o modo aleatório para gerar ideias inspiradoras para seus stories.
          </p>
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Escolha um tema
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setTemaSelecionado('')}
              className={`btn rounded-full px-4 py-2 text-sm ${
                temaSelecionado === ''
                  ? 'bg-[#00FFFF] text-[#0A0B2E]'
                  : 'border border-[#00FFFF] text-[#00FFFF]'
              }`}
            >
              🎲 Aleatório
            </button>
            {temas.map((tema) => (
              <button
                key={tema}
                onClick={() => setTemaSelecionado(tema)}
                className={`btn rounded-full px-4 py-2 text-sm ${
                  temaSelecionado === tema
                    ? 'bg-[#00FFFF] text-[#0A0B2E]'
                    : 'border border-[#00FFFF] text-[#00FFFF]'
                }`}
              >
                {tema}
              </button>
            ))}
          </div>
        </div>

        {ideiaAtual ? (
          <div className="mb-8 rounded-xl bg-[#0A0B2E]/50 p-6 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-[#00FFFF]">
              {ideiaAtual.titulo}
            </h2>
            <p className="mb-4 text-gray-300">{ideiaAtual.reflexao}</p>
            <p className="mb-4 text-white">{ideiaAtual.cta}</p>
            <p className="text-sm text-[#00FFFF]">{ideiaAtual.hashtags}</p>
          </div>
        ) : (
          <div className="mb-8 rounded-xl border-2 border-dashed border-gray-700 p-8 text-center">
            <p className="text-gray-400">
              Clique em &quot;Gerar Nova Ideia&quot; para começar
            </p>
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={gerarNovaIdeia}
            className="btn-primary flex-1 justify-center text-center"
          >
            🎯 Gerar Nova Ideia
          </button>
          <button
            onClick={copiarTexto}
            disabled={!ideiaAtual}
            className={`btn flex-1 justify-center rounded-lg border-2 text-center ${
              !ideiaAtual
                ? 'cursor-not-allowed border-gray-700 text-gray-700'
                : 'border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#0A0B2E]'
            }`}
          >
            📋 Copiar Texto
          </button>
        </div>

        {/* Toast de feedback */}
        {copiado && (
          <div className="fixed bottom-4 right-4 rounded-lg bg-[#00FFFF] px-4 py-2 text-[#0A0B2E]">
            ✅ Texto Copiado!
          </div>
        )}
      </div>
    </div>
  );
} 