'use client'

import { useState } from 'react'
import { copyTemplates, storyTemplates } from './templates'
import toast from 'react-hot-toast'
import Link from 'next/link'

export default function CopywritingDaFe() {
  const [tipoFrase, setTipoFrase] = useState('')
  const [aplicacao, setAplicacao] = useState('')
  const [engenhariaSocial, setEngenhariaSocial] = useState('')
  const [resultado, setResultado] = useState<any>(null)

  const gerarCopywriting = () => {
    try {
      if (!tipoFrase || !aplicacao) {
        toast.error('Por favor, selecione o tipo de frase e a aplicação', {
          style: {
            background: '#FF4B4B',
            color: '#fff',
            fontWeight: 'bold',
          },
          icon: '⚠️'
        })
        return
      }

      if (aplicacao === 'Stories') {
        if (!engenhariaSocial) {
          toast.error('Por favor, selecione o tipo de engenharia social para Stories', {
            style: {
              background: '#FF4B4B',
              color: '#fff',
              fontWeight: 'bold',
            },
            icon: '⚠️'
          })
          return
        }

        const storiesDisponiveis = storyTemplates.filter(
          template => 
            template.tipo_frase === tipoFrase && 
            template.engenharia_social === engenhariaSocial
        )

        if (storiesDisponiveis.length > 0) {
          const storyAleatorio = storiesDisponiveis[Math.floor(Math.random() * storiesDisponiveis.length)]
          setResultado(storyAleatorio)
          toast.success('Sequência de stories gerada com sucesso!', {
            style: {
              background: '#00FFFF',
              color: '#0A0B2E',
              fontWeight: 'bold',
            },
            icon: '✨'
          })
        } else {
          toast.error('Não encontramos templates para esta combinação', {
            style: {
              background: '#FF4B4B',
              color: '#fff',
              fontWeight: 'bold',
            },
            icon: '😕'
          })
        }
      } else {
        const frasesDisponiveis = copyTemplates.filter(
          template => 
            template.tipo_frase === tipoFrase && 
            template.aplicacao === aplicacao
        )

        if (frasesDisponiveis.length > 0) {
          const fraseAleatoria = frasesDisponiveis[Math.floor(Math.random() * frasesDisponiveis.length)]
          setResultado(fraseAleatoria)
          toast.success('Frase gerada com sucesso!', {
            style: {
              background: '#00FFFF',
              color: '#0A0B2E',
              fontWeight: 'bold',
            },
            icon: '✨'
          })
        } else {
          toast.error('Não encontramos templates para esta combinação', {
            style: {
              background: '#FF4B4B',
              color: '#fff',
              fontWeight: 'bold',
            },
            icon: '😕'
          })
        }
      }
    } catch (error) {
      console.error('Erro ao gerar copywriting:', error)
      toast.error('Erro ao gerar o copywriting', {
        style: {
          background: '#FF4B4B',
          color: '#fff',
          fontWeight: 'bold',
        },
        icon: '❌'
      })
    }
  }

  const copiarTexto = (texto: string) => {
    navigator.clipboard.writeText(texto)
    toast.success('Texto copiado para a área de transferência!', {
      style: {
        background: '#00FFFF',
        color: '#0A0B2E',
        fontWeight: 'bold',
      },
      icon: '📋'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 px-4 py-8">
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
          <h1 className="mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
            Copywriting da Fé ✝️
          </h1>
          <p className="text-center text-gray-400">
            Gere textos inspiradores e impactantes para suas redes sociais
          </p>
        </div>

        {/* Form Section */}
        <div className="mb-8 overflow-hidden rounded-xl bg-[#0A0B2E]/30 p-6 backdrop-blur-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Tipo de Frase */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Tipo de Frase
              </label>
              <select
                value={tipoFrase}
                onChange={(e) => setTipoFrase(e.target.value)}
                className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-[#00FFFF]"
              >
                <option value="">Selecione o tipo</option>
                <option value="Abertura">Abertura</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Encerramento">Encerramento</option>
              </select>
            </div>

            {/* Aplicação */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Aplicação
              </label>
              <select
                value={aplicacao}
                onChange={(e) => setAplicacao(e.target.value)}
                className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-[#00FFFF]"
              >
                <option value="">Selecione a aplicação</option>
                <option value="Stories">Stories</option>
                <option value="Feed">Feed</option>
                <option value="Reels">Reels</option>
                <option value="Direct">Direct</option>
              </select>
            </div>

            {/* Engenharia Social (apenas para Stories) */}
            {aplicacao === 'Stories' && (
              <div className="space-y-2 sm:col-span-2 transition-all duration-300 ease-in-out">
                <label className="block text-sm font-medium text-gray-300">
                  Engenharia Social
                </label>
                <select
                  value={engenhariaSocial}
                  onChange={(e) => setEngenhariaSocial(e.target.value)}
                  className="w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:ring-[#00FFFF]"
                >
                  <option value="">Selecione o tipo</option>
                  <option value="Urgencia Oculta">Urgência Oculta</option>
                  <option value="Testemunho Silencioso">Testemunho Silencioso</option>
                  <option value="Conflito Invisivel">Conflito Invisível</option>
                  <option value="Curiosidade Crista">Curiosidade Cristã</option>
                  <option value="Gatilho de Promessa">Gatilho de Promessa</option>
                  <option value="Impacto Imediato">Impacto Imediato</option>
                  <option value="Alvo Profetico">Alvo Profético</option>
                </select>
              </div>
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={gerarCopywriting}
            className="mt-6 flex w-full transform items-center justify-center gap-2 rounded-lg bg-[#00FFFF] px-6 py-3 font-medium text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20 transition-all hover:scale-[1.02] hover:bg-[#00FFFF]/90 active:scale-[0.98]"
          >
            <span>✨</span>
            Gerar Copywriting
          </button>
        </div>

        {/* Result Section */}
        {resultado ? (
          <div className="overflow-hidden rounded-xl bg-[#0A0B2E]/50 p-6 shadow-xl backdrop-blur-sm transition-all duration-300">
            {aplicacao === 'Stories' ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#00FFFF]">
                    Sequência de Stories
                  </h2>
                  <button
                    onClick={() => copiarTexto(`${resultado.story_1}\n\n${resultado.story_2}\n\n${resultado.story_3}\n\n${resultado.versiculo}\n\n${resultado.cta_final}`)}
                    className="flex items-center gap-2 rounded-lg bg-[#00FFFF]/10 px-4 py-2 text-sm text-[#00FFFF] transition-all hover:bg-[#00FFFF]/20"
                  >
                    <span>📋</span>
                    Copiar Tudo
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg bg-[#0A0B2E]/30 p-4">
                    <h3 className="mb-2 text-sm font-medium text-[#00FFFF]">Story 1</h3>
                    <p className="text-gray-300">{resultado.story_1}</p>
                  </div>
                  <div className="rounded-lg bg-[#0A0B2E]/30 p-4">
                    <h3 className="mb-2 text-sm font-medium text-[#00FFFF]">Story 2</h3>
                    <p className="text-gray-300">{resultado.story_2}</p>
                  </div>
                  <div className="rounded-lg bg-[#0A0B2E]/30 p-4">
                    <h3 className="mb-2 text-sm font-medium text-[#00FFFF]">Story 3</h3>
                    <p className="text-gray-300">{resultado.story_3}</p>
                  </div>
                  <div className="rounded-lg bg-[#0A0B2E]/30 p-4">
                    <h3 className="mb-2 text-sm font-medium text-[#00FFFF]">Versículo</h3>
                    <p className="italic text-[#00FFFF]">{resultado.versiculo}</p>
                  </div>
                  <div className="rounded-lg bg-[#0A0B2E]/30 p-4">
                    <h3 className="mb-2 text-sm font-medium text-[#00FFFF]">Call to Action</h3>
                    <p className="text-gray-300">{resultado.cta_final}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-[#00FFFF]">
                    Sua Frase
                  </h2>
                  <button
                    onClick={() => copiarTexto(resultado.frase)}
                    className="flex items-center gap-2 rounded-lg bg-[#00FFFF]/10 px-4 py-2 text-sm text-[#00FFFF] transition-all hover:bg-[#00FFFF]/20"
                  >
                    <span>📋</span>
                    Copiar
                  </button>
                </div>
                <div className="rounded-lg bg-[#0A0B2E]/30 p-4">
                  <p className="text-gray-300">{resultado.frase}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl bg-[#0A0B2E]/30 p-8 text-center backdrop-blur-sm transition-all duration-300">
            <div>
              <div className="mb-4 text-4xl">✨</div>
              <p className="text-gray-400">
                Selecione as opções acima e clique em "Gerar Copywriting" para começar
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 