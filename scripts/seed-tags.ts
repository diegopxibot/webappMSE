import { connectToDatabase } from '../src/lib/mongodb'

const defaultTags = [
  // Versículos
  { name: 'Amor', category: 'versiculos' },
  { name: 'Fé', category: 'versiculos' },
  { name: 'Esperança', category: 'versiculos' },
  { name: 'Gratidão', category: 'versiculos' },
  { name: 'Força', category: 'versiculos' },
  { name: 'Paz', category: 'versiculos' },
  { name: 'Salvação', category: 'versiculos' },
  { name: 'Adoração', category: 'versiculos' },

  // Orações
  { name: 'Agradecimento', category: 'oracoes' },
  { name: 'Proteção', category: 'oracoes' },
  { name: 'Cura', category: 'oracoes' },
  { name: 'Família', category: 'oracoes' },
  { name: 'Sabedoria', category: 'oracoes' },
  { name: 'Direção', category: 'oracoes' },

  // Reflexões
  { name: 'Vida Cristã', category: 'reflexoes' },
  { name: 'Crescimento', category: 'reflexoes' },
  { name: 'Propósito', category: 'reflexoes' },
  { name: 'Relacionamentos', category: 'reflexoes' },
  { name: 'Superação', category: 'reflexoes' },

  // Convites
  { name: 'Culto', category: 'convites' },
  { name: 'Célula', category: 'convites' },
  { name: 'Evento', category: 'convites' },
  { name: 'Conferência', category: 'convites' },
  { name: 'Retiro', category: 'convites' },

  // Frases de Fé
  { name: 'Motivacional', category: 'frases-fe' },
  { name: 'Inspiracional', category: 'frases-fe' },
  { name: 'Encorajamento', category: 'frases-fe' },
  { name: 'Confiança', category: 'frases-fe' },

  // Datas Especiais
  { name: 'Natal', category: 'datas-especiais' },
  { name: 'Páscoa', category: 'datas-especiais' },
  { name: 'Ano Novo', category: 'datas-especiais' },
  { name: 'Dia das Mães', category: 'datas-especiais' },
  { name: 'Dia dos Pais', category: 'datas-especiais' },

  // Evangelismo
  { name: 'Testemunho', category: 'evangelismo-dupla' },
  { name: 'Alcance', category: 'evangelismo-dupla' },
  { name: 'Missões', category: 'evangelismo-dupla' },
  { name: 'Discipulado', category: 'evangelismo-dupla' }
]

async function seedTags() {
  try {
    console.log('Conectando ao banco de dados...')
    const db = await connectToDatabase()

    console.log('Criando tags...')
    for (const tag of defaultTags) {
      const slug = tag.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      const existingTag = await db
        .collection('tags')
        .findOne({ slug })

      if (!existingTag) {
        await db.collection('tags').insertOne({
          ...tag,
          slug,
          count: 0,
          createdAt: new Date()
        })
        console.log(`Tag criada: ${tag.name}`)
      } else {
        console.log(`Tag já existe: ${tag.name}`)
      }
    }

    console.log('Tags criadas com sucesso!')
    process.exit(0)
  } catch (error) {
    console.error('Erro ao criar tags:', error)
    process.exit(1)
  }
}

seedTags() 