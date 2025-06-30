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

  const handleCopyHashtags = (hashtags: string[]) => {
    const hashtagText = hashtags.join(' ');
    navigator.clipboard.writeText(hashtagText);
    toast.success('Hashtags copiadas!', {
      style: {
        background: '#00FFFF',
        color: '#0A0B2E',
        fontWeight: 'bold',
      },
      icon: '📋'
    });
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
    toast.success('Hashtag copiada!', {
      style: {
        background: '#00FFFF',
        color: '#0A0B2E',
        fontWeight: 'bold',
      },
      icon: '📋'
    });
    setCopiedHashtags(prev => new Set(Array.from(prev).concat(hashtag)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Banco de Hashtags</h1>
        <p className="text-gray-400">
          Escolha um tema para descobrir hashtags evangelísticas estratégicas para suas redes sociais.
          {totalCopies > 0 && ` 🎯 Total de conjuntos copiados: ${totalCopies}`}
        </p>
      </div>

      {!selectedCategory ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="p-6 bg-[#0A0B2E]/30 rounded-xl shadow-md hover:bg-[#0A0B2E]/50 hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-sm text-gray-400">
                  {category.hashtags.length} hashtags disponíveis
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-[#0A0B2E]/30 backdrop-blur-sm rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedCategory.name}</h2>
                <p className="text-sm text-gray-400 mt-1">
                  {selectedCategory.hashtags.length} hashtags para copiar
                </p>
              </div>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-gray-400 hover:text-[#00FFFF] transition-colors flex items-center gap-2"
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
              className="w-full bg-[#00FFFF]/10 hover:bg-[#00FFFF]/20 text-[#00FFFF] font-semibold py-3 px-4 rounded-xl shadow-md shadow-[#00FFFF]/5 hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copiar Todas as Hashtags
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 