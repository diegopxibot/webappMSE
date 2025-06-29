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
        toast.error('Por favor, selecione o tipo de frase e a aplicacao')
        return
      }

      if (aplicacao === 'Stories') {
        if (!engenhariaSocial) {
          toast.error('Por favor, selecione o tipo de engenharia social para Stories')
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
          toast.success('Sequencia de stories gerada com sucesso!')
        } else {
          toast.error('Nao encontramos templates para esta combinacao')
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
          toast.success('Frase gerada com sucesso!')
        } else {
          toast.error('Nao encontramos templates para esta combinacao')
        }
      }
    } catch (error) {
      console.error('Erro ao gerar copywriting:', error)
      toast.error('Erro ao gerar o copywriting')
    }
  }

  const copiarTexto = (texto: string) => {
    navigator.clipboard.writeText(texto)
    toast.success('Texto copiado para a area de transferencia!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/dashboard/ferramentas"
          className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 mb-4 sm:mb-0"
        >
          <span className="mr-2">←</span>
          <span>Voltar</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mt-4">
          Copywriting da Fe 🙏
        </h1>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
        <div className="space-y-4">
          {/* Tipo de Frase */}
          <div>
            <label className="block text-white mb-2">Tipo de Frase</label>
            <select
              className="input w-full"
              value={tipoFrase}
              onChange={(e) => setTipoFrase(e.target.value)}
            >
              <option value="">Selecione o tipo</option>
              <option value="Abertura">Abertura</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Encerramento">Encerramento</option>
            </select>
          </div>

          {/* Aplicacao */}
          <div>
            <label className="block text-white mb-2">Aplicacao</label>
            <select
              className="input w-full"
              value={aplicacao}
              onChange={(e) => setAplicacao(e.target.value)}
            >
              <option value="">Selecione a aplicacao</option>
              <option value="Stories">Stories</option>
              <option value="Feed">Feed</option>
              <option value="Reels">Reels</option>
              <option value="Direct">Direct</option>
            </select>
          </div>

          {/* Engenharia Social (apenas para Stories) */}
          {aplicacao === 'Stories' && (
            <div>
              <label className="block text-white mb-2">Engenharia Social</label>
              <select
                className="input w-full"
                value={engenhariaSocial}
                onChange={(e) => setEngenhariaSocial(e.target.value)}
              >
                <option value="">Selecione o tipo</option>
                <option value="Urgencia Oculta">Urgencia Oculta</option>
                <option value="Testemunho Silencioso">Testemunho Silencioso</option>
                <option value="Conflito Invisivel">Conflito Invisivel</option>
                <option value="Curiosidade Crista">Curiosidade Crista</option>
                <option value="Gatilho de Promessa">Gatilho de Promessa</option>
                <option value="Impacto Imediato">Impacto Imediato</option>
                <option value="Alvo Profetico">Alvo Profetico</option>
              </select>
            </div>
          )}

          <button
            onClick={gerarCopywriting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Gerar Copywriting
          </button>
        </div>

        {/* Area de Resultado */}
        {resultado && (
          <div className="mt-8 space-y-4">
            {aplicacao === 'Stories' ? (
              // Resultado para Stories
              <div className="bg-gray-700 p-4 rounded-lg space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <h3 className="text-xl font-semibold text-white">Sequencia de Stories</h3>
                  <button
                    onClick={() => copiarTexto(`${resultado.story_1}\n\n${resultado.story_2}\n\n${resultado.story_3}\n\n${resultado.versiculo}\n\n${resultado.cta_final}`)}
                    className="text-blue-400 hover:text-blue-300 whitespace-nowrap"
                  >
                    Copiar Tudo
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-white">Story 1: {resultado.story_1}</p>
                  <p className="text-white">Story 2: {resultado.story_2}</p>
                  <p className="text-white">Story 3: {resultado.story_3}</p>
                  <p className="text-white">Versiculo: {resultado.versiculo}</p>
                  <p className="text-white">Call to Action: {resultado.cta_final}</p>
                </div>
              </div>
            ) : (
              // Resultado para outras aplicacoes
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-white">Sua Frase</h3>
                  <button
                    onClick={() => copiarTexto(resultado.frase)}
                    className="text-blue-400 hover:text-blue-300 whitespace-nowrap"
                  >
                    Copiar
                  </button>
                </div>
                <p className="text-white">{resultado.frase}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 