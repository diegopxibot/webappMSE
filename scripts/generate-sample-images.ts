import { createCanvas, loadImage, registerFont } from 'canvas'
import fs from 'fs/promises'
import path from 'path'

// Configurações
const STORY_WIDTH = 1080
const STORY_HEIGHT = 1920
const CATEGORIES = [
  'versiculos',
  'oracoes',
  'reflexoes',
  'convites',
  'anuncios-culto',
  'frases-fe',
  'datas-especiais',
  'evangelismo-dupla',
  'frases-impacto'
]

const STYLES = ['modern', 'minimalist', 'artistic']
const COLORS = ['blue', 'purple', 'orange', 'green', 'red']

// Função para criar diretórios se não existirem
async function ensureDirectories() {
  for (const category of CATEGORIES) {
    const dir = path.join(process.cwd(), 'public', 'templates', category)
    await fs.mkdir(dir, { recursive: true })
  }
}

// Função para gerar gradiente
function createGradient(ctx: any, color: string) {
  const gradients: { [key: string]: string[] } = {
    blue: ['#2563EB', '#1D4ED8'],
    purple: ['#7C3AED', '#5B21B6'],
    orange: ['#F97316', '#EA580C'],
    green: ['#22C55E', '#16A34A'],
    red: ['#EF4444', '#DC2626']
  }

  const gradient = ctx.createLinearGradient(0, 0, 0, STORY_HEIGHT)
  gradient.addColorStop(0, gradients[color][0])
  gradient.addColorStop(1, gradients[color][1])
  return gradient
}

// Função para gerar uma imagem de exemplo
async function generateTemplateImage(
  category: string,
  style: string,
  color: string,
  index: number
) {
  const canvas = createCanvas(STORY_WIDTH, STORY_HEIGHT)
  const ctx = canvas.getContext('2d')

  // Fundo
  ctx.fillStyle = createGradient(ctx, color)
  ctx.fillRect(0, 0, STORY_WIDTH, STORY_HEIGHT)

  // Adicionar elementos de acordo com o estilo
  if (style === 'modern') {
    // Elementos modernos (formas geométricas)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.beginPath()
    ctx.arc(STORY_WIDTH * 0.8, STORY_HEIGHT * 0.2, 200, 0, Math.PI * 2)
    ctx.fill()
    
    ctx.beginPath()
    ctx.arc(STORY_WIDTH * 0.2, STORY_HEIGHT * 0.8, 300, 0, Math.PI * 2)
    ctx.fill()
  } else if (style === 'minimalist') {
    // Elementos minimalistas (linhas simples)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(100, 100)
    ctx.lineTo(STORY_WIDTH - 100, 100)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(100, STORY_HEIGHT - 100)
    ctx.lineTo(STORY_WIDTH - 100, STORY_HEIGHT - 100)
    ctx.stroke()
  } else if (style === 'artistic') {
    // Elementos artísticos (curvas orgânicas)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(0, STORY_HEIGHT * 0.3)
    ctx.quadraticCurveTo(
      STORY_WIDTH * 0.5,
      STORY_HEIGHT * 0.5,
      STORY_WIDTH,
      STORY_HEIGHT * 0.7
    )
    ctx.stroke()
  }

  // Texto de exemplo
  ctx.fillStyle = '#FFFFFF'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  // Texto diferente para cada categoria
  let text = ''
  switch (category) {
    case 'versiculos':
      text = '"O Senhor é o meu pastor, nada me faltará."\n- Salmos 23:1'
      break
    case 'oracoes':
      text = 'Senhor, guia meus passos\ne ilumina meu caminho.'
      break
    case 'reflexoes':
      text = 'A fé move montanhas\ne transforma vidas.'
      break
    case 'convites':
      text = 'Culto de Celebração\nDomingo às 18h'
      break
    default:
      text = 'Template de exemplo\npara visualização'
  }

  // Renderizar texto com quebras de linha
  const lines = text.split('\n')
  const fontSize = style === 'minimalist' ? 48 : 64
  ctx.font = `bold ${fontSize}px Arial`
  
  lines.forEach((line, i) => {
    const y = STORY_HEIGHT / 2 + (i - lines.length / 2) * (fontSize * 1.5)
    ctx.fillText(line, STORY_WIDTH / 2, y)
  })

  // Salvar imagem
  const fileName = `template-${category}-${style}-${color}-${index}.png`
  const filePath = path.join(process.cwd(), 'public', 'templates', category, fileName)
  
  const buffer = canvas.toBuffer('image/png')
  await fs.writeFile(filePath, buffer)

  return fileName
}

// Função principal
async function generateAllTemplates() {
  try {
    console.log('Criando diretórios...')
    await ensureDirectories()

    console.log('Gerando templates...')
    for (const category of CATEGORIES) {
      console.log(`\nCategoria: ${category}`)
      
      for (const style of STYLES) {
        for (const color of COLORS) {
          const fileName = await generateTemplateImage(category, style, color, 1)
          console.log(`✓ Gerado: ${fileName}`)
        }
      }
    }

    console.log('\nTodos os templates foram gerados com sucesso!')
  } catch (error) {
    console.error('Erro ao gerar templates:', error)
  }
}

// Executar o script
generateAllTemplates() 