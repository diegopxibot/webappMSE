import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter } from 'lucide-react';

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
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeFilters, setActiveFilters] = useState(0);

  useEffect(() => {
    let count = 0;
    if (selectedColor) count++;
    if (selectedStyle) count++;
    setActiveFilters(count);
  }, [selectedColor, selectedStyle]);

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

  const clearFilters = () => {
    setSelectedColor(null);
    setSelectedStyle(null);
    onColorChange(null);
    onStyleChange(null);
  };

  return (
    <div className="relative">
      {/* Botão de Toggle com Badge */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-4"
      >
        <Filter className="w-5 h-5" />
        <span>Filtros</span>
        {activeFilters > 0 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-cyan-500">
            {activeFilters}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-r from-gray-900 to-[#0A0B2E] p-6 rounded-2xl shadow-xl"
          >
            <div className="space-y-6">
              {/* Cabeçalho */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-medium">Filtros Visuais</h3>
                </div>
                {activeFilters > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearFilters}
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Limpar Filtros
                  </motion.button>
                )}
              </div>

              {/* Filtro de Cores */}
              <div>
                <h4 className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                  Cores
                  {selectedColor && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                      1 selecionada
                    </span>
                  )}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {availableColors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleColorSelect(color)}
                      className={`relative w-10 h-10 rounded-xl shadow-lg transition-all ${
                        selectedColor === color
                          ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#0A0B2E]'
                          : 'hover:ring-2 hover:ring-white/20'
                      }`}
                    >
                      <span
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: color }}
                      />
                      {selectedColor === color && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl"
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Filtro de Estilos */}
              <div>
                <h4 className="text-white/80 text-sm font-medium mb-3 flex items-center gap-2">
                  Estilos Visuais
                  {selectedStyle && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10">
                      1 selecionado
                    </span>
                  )}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {availableStyles.map((style) => (
                    <motion.button
                      key={style}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleStyleSelect(style)}
                      className={`px-4 py-2 rounded-xl text-sm transition-all ${
                        selectedStyle === style
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {style}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Resumo dos Filtros Ativos */}
              <AnimatePresence>
                {activeFilters > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">
                        {activeFilters} {activeFilters === 1 ? 'filtro ativo' : 'filtros ativos'}
                      </span>
                      <span className="text-cyan-400">
                        {selectedColor && 'Cor'} {selectedStyle && '• Estilo'}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 