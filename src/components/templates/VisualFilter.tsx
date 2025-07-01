import { useState } from 'react';
import { motion } from 'framer-motion';

interface VisualFilterProps {
  onColorChange: (color: string | null) => void;
  onStyleChange: (style: string | null) => void;
  availableColors: string[];
  availableStyles: string[];
}

export default function VisualFilter({
  onColorChange,
  onStyleChange,
  availableColors,
  availableStyles,
}: VisualFilterProps) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    const newColor = selectedColor === color ? null : color;
    setSelectedColor(newColor);
    onColorChange(newColor);
  };

  const handleStyleSelect = (style: string) => {
    const newStyle = selectedStyle === style ? null : style;
    setSelectedStyle(newStyle);
    onStyleChange(newStyle);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-[#0A0B2E] p-4 rounded-lg shadow-lg mb-6">
      <div className="space-y-4">
        {/* Filtro de Cores */}
        <div>
          <h3 className="text-white text-sm font-medium mb-3">Cores</h3>
          <div className="flex flex-wrap gap-2">
            {availableColors.map((color) => (
              <motion.button
                key={color}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleColorSelect(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? 'border-cyan-400 scale-110'
                    : 'border-white/20 hover:border-white/40'
                }`}
                style={{ backgroundColor: color }}
                title={`Cor: ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Filtro de Estilos */}
        <div>
          <h3 className="text-white text-sm font-medium mb-3">Estilos Visuais</h3>
          <div className="flex flex-wrap gap-2">
            {availableStyles.map((style) => (
              <motion.button
                key={style}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleStyleSelect(style)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedStyle === style
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {style}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Botão Limpar Filtros */}
      {(selectedColor || selectedStyle) && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setSelectedColor(null);
            setSelectedStyle(null);
            onColorChange(null);
            onStyleChange(null);
          }}
          className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Limpar filtros
        </motion.button>
      )}
    </div>
  );
} 