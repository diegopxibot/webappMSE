interface VisualFilterProps {
  onColorChange: (color: string) => void
  onStyleChange: (style: string) => void
}

const colors = [
  { name: 'Todos', value: 'all', class: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500' },
  { name: 'Azul', value: 'blue', class: 'bg-blue-500' },
  { name: 'Verde', value: 'green', class: 'bg-green-500' },
  { name: 'Roxo', value: 'purple', class: 'bg-purple-500' },
  { name: 'Rosa', value: 'pink', class: 'bg-pink-500' },
  { name: 'Laranja', value: 'orange', class: 'bg-orange-500' },
  { name: 'Vermelho', value: 'red', class: 'bg-red-500' }
]

const styles = [
  { name: 'Todos os Estilos', value: 'all' },
  { name: 'Minimalista', value: 'minimalist' },
  { name: 'Moderno', value: 'modern' },
  { name: 'Clássico', value: 'classic' },
  { name: 'Artístico', value: 'artistic' },
  { name: 'Vintage', value: 'vintage' }
]

export default function VisualFilter({ onColorChange, onStyleChange }: VisualFilterProps) {
  return (
    <div className="mb-8 p-6 rounded-xl bg-dark-light/50 backdrop-blur-sm border border-primary/20">
      <div className="space-y-4">
        {/* Filtro por Cor */}
        <div>
          <h3 className="text-white font-medium mb-3">Cor Predominante</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => onColorChange(color.value)}
                className="group relative"
              >
                <div className={`w-8 h-8 rounded-full ${color.class} ring-2 ring-white/20 group-hover:ring-white/40 transition-all`}>
                  <span className="sr-only">{color.name}</span>
                </div>
                <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {color.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Estilo */}
        <div>
          <h3 className="text-white font-medium mb-3">Estilo Visual</h3>
          <div className="flex flex-wrap gap-2">
            {styles.map((style) => (
              <button
                key={style.value}
                onClick={() => onStyleChange(style.value)}
                className="px-3 py-1.5 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
              >
                {style.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 