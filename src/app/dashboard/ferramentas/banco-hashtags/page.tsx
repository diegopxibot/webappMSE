'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

interface HashtagCategory {
  id: string;
  name: string;
  hashtags: string[];
}

const categories: HashtagCategory[] = [
  { id: 'fe', name: 'Fé', hashtags: ['#féemCristo', '#féinabalável', '#féeesperança', '#vidadeFé', '#féemDeus', '#féeação', '#féevida', '#féegraça', '#féevitória', '#poderDaFé', '#féeamor', '#féeconfiança', '#féeperseverança', '#féeadoração', '#féemilagres'] },
  { id: 'cura', name: 'Cura', hashtags: ['#curaDivina', '#curaerestauração', '#curaDaAlma', '#curaPorJesus', '#curaSobrenatural', '#poderDaCura', '#curaeLibertação', '#curaDeDeus', '#curaMilagrosa', '#curaeTransformação', '#curaeRenovação', '#curaeEsperança', '#curaeVida', '#curaInterior', '#curaeGraça'] },
  { id: 'libertacao', name: 'Libertação', hashtags: ['#libertaçãoemCristo', '#libertaçãoDivina', '#libertaçãoVerdadeira', '#libertaçãoePoder', '#libertaçãoTotal', '#libertaçãodaAlma', '#poderDaLibertação', '#libertaçãoeSalvação', '#libertaçãoMilagrosa', '#libertaçãoSobrenatural', '#libertaçãoeVida', '#libertaçãoeVitória', '#libertaçãoeGraça', '#libertaçãoePaz', '#libertaçãoeRestauração'] },
  { id: 'amor', name: 'Amor', hashtags: ['#amorDeDeus', '#amorIncondicional', '#amorDivino', '#amorePaz', '#amorVerdadeiro', '#amordeJesus', '#amorInfinito', '#amoreFé', '#amoreGraça', '#amorCristão', '#amorePerdão', '#amoreCompaixão', '#amoreSalvação', '#amoreMisericórdia', '#amoreEsperança'] },
  { id: 'vidacomdeus', name: 'Vida com Deus', hashtags: ['#vidaComDeus', '#vidaemCristo', '#vidaCristã', '#vidaAbundante', '#vidaTransformada', '#vidadeFé', '#vidaeEsperança', '#vidaRestaurada', '#vidaePropósito', '#vidaeSalvação', '#vidaeGraça', '#vidaeVitória', '#vidaePaz', '#vidaeAdoração', '#vidaeMilagres'] },
  { id: 'esperanca', name: 'Esperança', hashtags: ['#esperançaemDeus', '#esperançaViva', '#esperançaeFé', '#esperançaCristã', '#esperançaemCristo', '#esperançaeVida', '#esperançaeAmor', '#esperançaRenovada', '#esperançaeGraça', '#esperançaeSalvação', '#esperançaePaz', '#esperançaeVitória', '#esperançaDivina', '#esperançaeRestauração', '#esperançaeMilagres'] },
  { id: 'familia', name: 'Família', hashtags: ['#famíliaCristã', '#famíliaemCristo', '#famíliaeFé', '#famíliaeDeus', '#famíliaAbençoada', '#famíliaeOração', '#famíliaeAmor', '#famíliaUnida', '#famíliaeGraça', '#famíliaePaz', '#famíliaeVida', '#famíliaeSalvação', '#famíliaRestaurada', '#famíliaeEsperança', '#famíliaePropósito'] },
  { id: 'jovens', name: 'Jovens Cristãos', hashtags: ['#jovensCristãos', '#juventudeemCristo', '#jovenseDeus', '#jovensdeFé', '#jovensnaPresença', '#jovenseAdoração', '#jovensemMissão', '#jovensTransformados', '#jovenseVida', '#jovenseGraça', '#jovenseEsperança', '#jovenseVitória', '#jovensePropósito', '#jovenseAvivamento', '#jovenseSalvação'] },
  { id: 'mulheres', name: 'Mulheres Cristãs', hashtags: ['#mulheresCristãs', '#mulheremCristo', '#mulherdeFé', '#mulherdeDeus', '#mulherVirtuosa', '#mulhereOração', '#mulhereGraça', '#mulhereVitória', '#mulherTransformada', '#mulhereEsperança', '#mulhereSabedoria', '#mulhereForça', '#mulherePropósito', '#mulhereAdoração', '#mulhereSantidade'] },
  { id: 'intercessao', name: 'Intercessão', hashtags: ['#intercessão', '#intercessãoePoder', '#intercessãoemCristo', '#intercessãoePropósito', '#intercessãoMover', '#intercessãoeVitória', '#intercessãoeFé', '#intercessãoeGraça', '#intercessãoeMilagres', '#intercessãoeVida', '#intercessãoeSalvação', '#intercessãoeRestauração', '#intercessãoeDeus', '#intercessãoeAvivamento', '#intercessãoePaz'] }
];

export default function HashtagBank() {
  const [selectedCategory, setSelectedCategory] = useState<HashtagCategory | null>(null);
  const [copiedHashtags, setCopiedHashtags] = useState<Set<string>>(new Set());
  const [totalCopies, setTotalCopies] = useState(0);
  const [copiado, setCopiado] = useState(false);

  const handleCopyHashtags = (hashtags: string[]) => {
    const hashtagText = hashtags.join(' ');
    navigator.clipboard.writeText(hashtagText);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
    setTotalCopies(prev => prev + 1);
    if (totalCopies > 0 && (totalCopies + 1) % 5 === 0) {
      toast.success(`🎯 Incrível! Você já copiou ${totalCopies + 1} conjuntos de hashtags!`, {
        style: {
          background: '#00FFFF',
          color: '#0A0B2E',
          fontWeight: 'bold',
        },
        icon: '✨'
      });
    }
  };

  const handleCopySingleHashtag = (hashtag: string) => {
    navigator.clipboard.writeText(hashtag);
    setCopiedHashtags(prev => new Set(Array.from(prev).concat(hashtag)));
    toast.success('Hashtag copiada!', {
      style: {
        background: '#00FFFF',
        color: '#0A0B2E',
        fontWeight: 'bold',
      },
      icon: '📋'
    });
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
            # Banco de Hashtags
          </h1>
          <p className="text-gray-400">
            Escolha um tema para descobrir hashtags evangelísticas estratégicas para suas redes sociais.
            {totalCopies > 0 && ` 🎯 Total de conjuntos copiados: ${totalCopies}`}
          </p>
        </div>

        {/* Categories Section */}
        <div className="mb-8 rounded-xl bg-[#0A0B2E]/30 p-6 backdrop-blur-sm">
          <label className="mb-4 block text-sm font-medium text-gray-300">
            Escolha uma categoria de hashtags
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`flex flex-col items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  selectedCategory?.id === category.id
                    ? 'bg-[#00FFFF] text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20'
                    : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                }`}
              >
                <span>{category.name}</span>
                <span className="mt-1 text-xs opacity-80">
                  {category.hashtags.length} hashtags
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Hashtags Display */}
        {selectedCategory ? (
          <div className="mb-8 overflow-hidden rounded-xl bg-[#0A0B2E]/50 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#00FFFF] sm:text-2xl">{selectedCategory.name}</h2>
                <p className="text-sm text-gray-400 mt-1">
                  Clique em uma hashtag individual para copiá-la
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-[#00FFFF]/80 hover:text-[#00FFFF] transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Voltar
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {selectedCategory.hashtags.map((hashtag, index) => (
                <button
                  key={index}
                  onClick={() => handleCopySingleHashtag(hashtag)}
                  className={`p-3 rounded-lg text-left transition-all duration-200 ${
                    copiedHashtags.has(hashtag)
                      ? 'bg-[#00FFFF]/20 text-[#00FFFF]'
                      : 'bg-[#0A0B2E]/30 text-gray-200 hover:bg-[#0A0B2E]/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{hashtag}</span>
                    {copiedHashtags.has(hashtag) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => handleCopyHashtags(selectedCategory.hashtags)}
              className="w-full bg-[#00FFFF] text-[#0A0B2E] font-semibold py-3 px-4 rounded-lg shadow-lg shadow-[#00FFFF]/20 hover:bg-[#00FFFF]/90 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copiar Todas as Hashtags
            </button>
          </div>
        ) : (
          <div className="mb-8 flex min-h-[200px] items-center justify-center rounded-xl bg-[#0A0B2E]/30 p-8 text-center backdrop-blur-sm">
            <div>
              <div className="mb-4 text-4xl">#️⃣</div>
              <p className="text-gray-400">
                Escolha uma categoria para ver as hashtags disponíveis
              </p>
            </div>
          </div>
        )}

        {/* Toast Notification */}
        {copiado && (
          <div className="fixed bottom-4 right-4 flex items-center rounded-lg bg-[#00FFFF] px-4 py-3 text-[#0A0B2E] shadow-lg">
            <span className="mr-2">✅</span>
            Hashtags Copiadas!
          </div>
        )}
      </div>
    </div>
  );
} 