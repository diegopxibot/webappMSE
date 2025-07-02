import { MongoClient } from 'mongodb'
import { config } from 'dotenv'

config({ path: '.env.local' })

const templates = [
  // Versículos
  {
    id: 'v1',
    name: 'Salmos 23:1',
    category: 'versiculos',
    imageUrl: '/templates/versiculos/salmos-23-1-modern.png',
    canvaUrl: 'https://www.canva.com/design/template-v1',
    downloadUrl: '/templates/versiculos/salmos-23-1-modern.png',
    suggestedCaption: '🙏 "O Senhor é o meu pastor, nada me faltará." - Salmos 23:1\n\n#Fé #Deus #Salmos',
    previewUrl: '/templates/versiculos/salmos-23-1-modern.png',
    color: 'blue',
    style: 'modern',
    variations: [
      {
        id: 'v1-1',
        name: 'Salmos 23:1 - Minimalista',
        imageUrl: '/templates/versiculos/salmos-23-1-minimal.png',
        style: 'minimalist'
      },
      {
        id: 'v1-2',
        name: 'Salmos 23:1 - Artístico',
        imageUrl: '/templates/versiculos/salmos-23-1-artistic.png',
        style: 'artistic'
      }
    ]
  },
  // Orações
  {
    id: 'o1',
    name: 'Oração da Manhã',
    category: 'oracoes',
    imageUrl: '/templates/oracoes/oracao-manha-minimal.png',
    canvaUrl: 'https://www.canva.com/design/template-o1',
    downloadUrl: '/templates/oracoes/oracao-manha-minimal.png',
    suggestedCaption: '🌅 Começando o dia com Deus!\n\n#Oração #Fé #BomDia',
    previewUrl: '/templates/oracoes/oracao-manha-minimal.png',
    color: 'orange',
    style: 'minimalist',
    variations: [
      {
        id: 'o1-1',
        name: 'Oração da Manhã - Moderno',
        imageUrl: '/templates/oracoes/oracao-manha-modern.png',
        style: 'modern'
      }
    ]
  },
  // Reflexões
  {
    id: 'r1',
    name: 'Reflexão sobre Fé',
    category: 'reflexoes',
    imageUrl: '/templates/reflexoes/reflexao-fe-artistic.png',
    canvaUrl: 'https://www.canva.com/design/template-r1',
    downloadUrl: '/templates/reflexoes/reflexao-fe-artistic.png',
    suggestedCaption: '💭 A fé move montanhas!\n\n#Reflexão #Fé #Deus',
    previewUrl: '/templates/reflexoes/reflexao-fe-artistic.png',
    color: 'purple',
    style: 'artistic',
    variations: [
      {
        id: 'r1-1',
        name: 'Reflexão sobre Fé - Minimalista',
        imageUrl: '/templates/reflexoes/reflexao-fe-minimal.png',
        style: 'minimalist'
      }
    ]
  }
  // Adicionar mais templates aqui...
]

async function seedTemplates() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI não encontrada')
    }

    console.log('Conectando ao MongoDB...')
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()

    console.log('Limpando coleção de templates...')
    await db.collection('templates').deleteMany({})

    console.log('Inserindo templates...')
    await db.collection('templates').insertMany(templates)

    console.log('Templates inseridos com sucesso!')
    await client.close()
  } catch (error) {
    console.error('Erro ao popular banco:', error)
    process.exit(1)
  }
}

seedTemplates() 