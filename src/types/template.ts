export interface Template {
  id: string
  title: string
  imageUrl: string
  previewUrl: string
  downloadUrl: string
  style: string
  color: string
  suggestedCaption: string
  variations?: {
    id: string
    style: string
    imageUrl: string
    previewUrl: string
  }[]
  downloadCount?: number
  tags: string[]
  active?: boolean
  categorySlug?: string
}