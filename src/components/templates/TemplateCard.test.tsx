import { render, screen, fireEvent } from '@testing-library/react'
import TemplateCard from './TemplateCard'
import { useAuth } from '@/components/auth/AuthProvider'
import { useFavorites } from '@/hooks/useFavorites'

// Mock dos hooks
jest.mock('@/components/auth/AuthProvider')
jest.mock('@/hooks/useFavorites')

const mockTemplate = {
  id: 'test-1',
  name: 'Template de Teste',
  category: 'versiculos',
  imageUrl: '/test.png',
  canvaUrl: 'https://canva.com/test',
  downloadUrl: '/test.png',
  suggestedCaption: 'Teste',
  previewUrl: '/test.png',
  color: 'blue',
  style: 'modern'
}

describe('TemplateCard', () => {
  beforeEach(() => {
    // Reset dos mocks
    jest.clearAllMocks()

    // Mock padrão do useAuth
    ;(useAuth as jest.Mock).mockReturnValue({
      user: null
    })

    // Mock padrão do useFavorites
    ;(useFavorites as jest.Mock).mockReturnValue({
      isFavorite: () => false,
      toggleFavorite: jest.fn()
    })
  })

  it('renderiza corretamente', () => {
    render(<TemplateCard template={mockTemplate} />)
    
    expect(screen.getByText('Template de Teste')).toBeInTheDocument()
    expect(screen.getByText('modern')).toBeInTheDocument()
  })

  it('mostra botão de favorito apenas para usuários logados', () => {
    // Usuário não logado
    render(<TemplateCard template={mockTemplate} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    // Usuário logado
    ;(useAuth as jest.Mock).mockReturnValue({
      user: { email: 'test@example.com' }
    })
    render(<TemplateCard template={mockTemplate} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('chama toggleFavorite ao clicar no botão de favorito', () => {
    const mockToggleFavorite = jest.fn()
    ;(useAuth as jest.Mock).mockReturnValue({
      user: { email: 'test@example.com' }
    })
    ;(useFavorites as jest.Mock).mockReturnValue({
      isFavorite: () => false,
      toggleFavorite: mockToggleFavorite
    })

    render(<TemplateCard template={mockTemplate} />)
    
    const favoriteButton = screen.getByRole('button')
    fireEvent.click(favoriteButton)
    
    expect(mockToggleFavorite).toHaveBeenCalledWith(mockTemplate.id)
  })

  it('abre o modal de preview ao clicar no card', () => {
    render(<TemplateCard template={mockTemplate} />)
    
    const card = screen.getByText('Template de Teste').parentElement
    fireEvent.click(card!)
    
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('exibe o status correto do favorito', () => {
    ;(useAuth as jest.Mock).mockReturnValue({
      user: { email: 'test@example.com' }
    })
    ;(useFavorites as jest.Mock).mockReturnValue({
      isFavorite: () => true,
      toggleFavorite: jest.fn()
    })

    render(<TemplateCard template={mockTemplate} />)
    
    const favoriteButton = screen.getByRole('button')
    expect(favoriteButton).toHaveClass('bg-primary')
  })
}) 