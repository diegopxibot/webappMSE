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

  const handleCopyHashtags = (hashtags: string[]) => {
    const hashtagText = hashtags.join(' ');
    navigator.clipboard.writeText(hashtagText);
    toast.success('Hashtags copiadas com sucesso!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">
          Escolha um tema para descobrir hashtags evangelísticas estratégicas:
        </h1>
        <Link
          href="/dashboard/ferramentas"
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Voltar para Ferramentas
        </Link>
      </div>

      {!selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white text-lg font-semibold"
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">{selectedCategory.name}</h2>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Voltar
            </button>
          </div>
          <div className="space-y-2 mb-6">
            {selectedCategory.hashtags.map((hashtag, index) => (
              <div key={index} className="text-gray-300">
                {hashtag}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleCopyHashtags(selectedCategory.hashtags)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            📋 Copiar Hashtags
          </button>
        </div>
      )}
    </div>
  );
} 