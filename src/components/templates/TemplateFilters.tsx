import { useState, useEffect } from 'react'
import TagManager from './TagManager'

interface TemplateFiltersProps {
  onFilterChange: (filters: FilterState) => void
  initialFilters?: Partial<FilterState>
  category?: string
}

interface FilterState {
  search: string
  style: string
  color: string
  tags: string[]
}

const styles = [
  { id: '', label: 'Todos os estilos' },
  { id: 'modern', label: 'Moderno' },
  { id: 'minimalist', label: 'Minimalista' },
  { id: 'artistic', label: 'Artístico' }
]

const colors = [
  { id: '', label: 'Todas as cores', color: 'transparent' },
  { id: 'blue', label: 'Azul', color: '#3B82F6' },
  { id: 'purple', label: 'Roxo', color: '#8B5CF6' },
  { id: 'orange', label: 'Laranja', color: '#F97316' },
  { id: 'green', label: 'Verde', color: '#22C55E' },
  { id: 'red', label: 'Vermelho', color: '#EF4444' }
]

export default function TemplateFilters({
  onFilterChange,
  initialFilters = {},
  category
}: TemplateFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    style: '',
    color: '',
    tags: [],
    ...initialFilters
  })

  useEffect(() => {
    onFilterChange(filters)
  }, [filters, onFilterChange])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }))
  }

  const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({ ...prev, style: e.target.value }))
  }

  const handleColorChange = (colorId: string) => {
    setFilters(prev => ({ ...prev, color: colorId }))
  }

  const handleTagsChange = (tags: string[]) => {
    setFilters(prev => ({ ...prev, tags }))
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-300 mb-2">
          Buscar
        </label>
        <div className="relative">
          <input
            type="text"
            id="search"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Buscar templates..."
            className="w-full bg-dark-light text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div>
        <label htmlFor="style" className="block text-sm font-medium text-gray-300 mb-2">
          Estilo
        </label>
        <select
          id="style"
          value={filters.style}
          onChange={handleStyleChange}
          className="w-full bg-dark-light text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
        >
          {styles.map(style => (
            <option key={style.id} value={style.id}>
              {style.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-300 mb-2">
          Cor
        </span>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color.id}
              onClick={() => handleColorChange(color.id)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                filters.color === color.id
                  ? 'border-primary scale-110'
                  : 'border-transparent hover:border-primary/50'
              }`}
              style={{
                backgroundColor: color.color,
                ...(color.id === '' && {
                  backgroundImage: 'linear-gradient(45deg, #374151 25%, transparent 25%, transparent 75%, #374151 75%, #374151), linear-gradient(45deg, #374151 25%, transparent 25%, transparent 75%, #374151 75%, #374151)',
                  backgroundSize: '10px 10px',
                  backgroundPosition: '0 0, 5px 5px'
                })
              }}
              title={color.label}
            />
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-300 mb-2">
          Tags
        </span>
        <TagManager
          selectedTags={filters.tags}
          onTagsChange={handleTagsChange}
          category={category}
        />
      </div>
    </div>
  )
} 