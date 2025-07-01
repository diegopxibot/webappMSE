'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import VisualFilter from '@/components/templates/VisualFilter';
import TemplateCard from '@/components/templates/TemplateCard';

interface Template {
  id: string;
  title: string;
  imageUrl: string;
  previewUrl: string;
  downloadUrl: string;
  style: string;
  color: string;
  suggestedCaption: string;
  variations?: {
    id: string;
    style: string;
    imageUrl: string;
    previewUrl: string;
  }[];
  downloadCount?: number;
  tags: string[];
}

interface TemplatesClientProps {
  initialTemplates: Template[];
  initialFavorites: string[];
  availableColors: string[];
  availableStyles: string[];
  userId: string;
}

export default function TemplatesClient({
  initialTemplates,
  initialFavorites,
  availableColors,
  availableStyles,
  userId,
}: TemplatesClientProps) {
  const [templates, setTemplates] = useState(initialTemplates);
  const [favoriteIds, setFavoriteIds] = useState(initialFavorites);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  // Filtrar templates baseado nas seleções
  const filteredTemplates = templates.filter((template) => {
    if (selectedColor && template.color !== selectedColor) return false;
    if (selectedStyle && template.style !== selectedStyle) return false;
    return true;
  });

  const handleFavorite = async (templateId: string) => {
    try {
      const isFavorited = favoriteIds.includes(templateId);
      const action = isFavorited ? 'remove' : 'add';

      const response = await fetch('/api/templates/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId, action, userId }),
      });

      if (!response.ok) throw new Error('Falha ao atualizar favoritos');

      // Atualizar estado local
      setFavoriteIds((prev) =>
        isFavorited
          ? prev.filter((id) => id !== templateId)
          : [...prev, templateId]
      );

      toast.success(
        isFavorited ? 'Removido dos favoritos' : 'Adicionado aos favoritos'
      );
    } catch (error) {
      toast.error('Erro ao atualizar favoritos');
      console.error(error);
    }
  };

  const handleColorChange = (color: string | null) => {
    setSelectedColor(color);
  };

  const handleStyleChange = (style: string | null) => {
    setSelectedStyle(style);
  };

  return (
    <div className="space-y-8">
      <VisualFilter
        availableColors={availableColors}
        availableStyles={availableStyles}
        onColorChange={handleColorChange}
        onStyleChange={handleStyleChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            isFavorited={favoriteIds.includes(template.id)}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">
            Nenhum template encontrado com os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
} 