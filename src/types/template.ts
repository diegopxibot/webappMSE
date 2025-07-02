export interface Template {
  id: string
  name: string
  category: string
  imageUrl: string
  canvaUrl: string
  downloadUrl: string
  suggestedCaption: string
  previewUrl: string
  color: string
  style: string
  variations?: TemplateVariation[]
  isFavorite?: boolean
  tags: string[]
}

export interface TemplateVariation {
  id: string
  name: string
  imageUrl: string
  style: string
}

export type TemplateCategory = {
  icon: string
  title: string
  description: string
}

export type TemplateCategories = {
  [key: string]: TemplateCategory
}

export interface TemplateShare {
  shareId: string
  templateId: string
  sharedBy: string
  createdAt: Date
  expiresAt: Date
}

export interface Tag {
  id: string
  name: string
  slug: string
  count: number
  category?: string
} 