'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Template {
  id: string
  title: string
  categorySlug: string
  imageUrl: string
  canvaUrl: string
  downloadUrl: string
  suggestedCaption: string
  previewUrl: string
  style: string
  tags: string[]
  active: boolean
}

interface Category {
  name: string
  slug: string
  icon: string
  styles: string[]
}

export default function AdminTemplates() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    title: '',
    categorySlug: '',
    imageUrl: '',
    canvaUrl: '',
    downloadUrl: '',
    suggestedCaption: '',
    previewUrl: '',
    style: '',
    tags: '',
    active: true
  })

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    try {
      setIsLoading(true)
      const [templatesRes, categoriesRes] = await Promise.all([
        fetch('/api/templates/admin'),
        fetch('/api/categories')
      ])
      
      const templatesData = await templatesRes.json()
      const categoriesData = await categoriesRes.json()

      setTemplates(templatesData)
      setCategories(categoriesData)
    } catch (error) {
      console.error('Erro ao carregar dados:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/templates/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim()),
        }),
      })

      if (response.ok) {
        setFormData({
          title: '',
          categorySlug: '',
          imageUrl: '',
          canvaUrl: '',
          downloadUrl: '',
          suggestedCaption: '',
          previewUrl: '',
          style: '',
          tags: '',
          active: true
        })
        loadData()
      }
    } catch (error) {
      console.error('Erro ao salvar template:', error)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Tem certeza que deseja excluir este template?')) return

    try {
      const response = await fetch(`/api/templates/admin/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        loadData()
      }
    } catch (error) {
      console.error('Erro ao excluir template:', error)
    }
  }

  async function handleToggleActive(id: string, currentActive: boolean) {
    try {
      const response = await fetch(`/api/templates/admin/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          active: !currentActive
        }),
      })

      if (response.ok) {
        loadData()
      }
    } catch (error) {
      console.error('Erro ao atualizar template:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-[#00FFFF]"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-white">Gerenciar Templates</h1>
          <Link 
            href="/dashboard/templates"
            className="text-[#00FFFF] hover:underline"
          >
            ← Voltar para Templates
          </Link>
        </div>

        {/* Formulário de Novo Template */}
        <div className="mb-12 rounded-xl bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="mb-6 text-xl font-semibold text-white">Novo Template</h2>
          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-400">Título</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Categoria</label>
              <select
                value={formData.categorySlug}
                onChange={(e) => setFormData({ ...formData, categorySlug: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              >
                <option value="">Selecione uma categoria</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">URL da Imagem</label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">URL do Canva</label>
              <input
                type="url"
                value={formData.canvaUrl}
                onChange={(e) => setFormData({ ...formData, canvaUrl: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">URL de Download</label>
              <input
                type="url"
                value={formData.downloadUrl}
                onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">URL de Preview</label>
              <input
                type="url"
                value={formData.previewUrl}
                onChange={(e) => setFormData({ ...formData, previewUrl: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Estilo</label>
              <select
                value={formData.style}
                onChange={(e) => setFormData({ ...formData, style: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              >
                <option value="">Selecione um estilo</option>
                {formData.categorySlug && categories.find(c => c.slug === formData.categorySlug)?.styles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">Tags (separadas por vírgula)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-gray-400">Legenda Sugerida</label>
              <textarea
                value={formData.suggestedCaption}
                onChange={(e) => setFormData({ ...formData, suggestedCaption: e.target.value })}
                className="w-full rounded-lg bg-white/10 px-4 py-2 text-white outline-none"
                rows={4}
                required
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-[#00FFFF] px-6 py-2 font-medium text-[#0A0B2E] transition-all hover:bg-[#00FFFF]/80"
              >
                Salvar Template
              </button>
            </div>
          </form>
        </div>

        {/* Lista de Templates */}
        <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="mb-6 text-xl font-semibold text-white">Templates Existentes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-left text-sm text-gray-400">
                  <th className="pb-3">Título</th>
                  <th className="pb-3">Categoria</th>
                  <th className="pb-3">Estilo</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((template) => (
                  <tr key={template.id} className="border-b border-white/5 text-white">
                    <td className="py-4">{template.title}</td>
                    <td className="py-4">
                      {categories.find(c => c.slug === template.categorySlug)?.name}
                    </td>
                    <td className="py-4">{template.style}</td>
                    <td className="py-4">
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs ${
                          template.active
                            ? 'bg-green-500/20 text-green-500'
                            : 'bg-red-500/20 text-red-500'
                        }`}
                      >
                        {template.active ? 'Ativo' : 'Inativo'}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleToggleActive(template.id, template.active)}
                          className="rounded bg-white/10 px-2 py-1 text-sm text-white hover:bg-white/20"
                        >
                          {template.active ? 'Desativar' : 'Ativar'}
                        </button>
                        <button
                          onClick={() => handleDelete(template.id)}
                          className="rounded bg-red-500/10 px-2 py-1 text-sm text-red-500 hover:bg-red-500/20"
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 