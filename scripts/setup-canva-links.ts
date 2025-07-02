import { MongoClient } from 'mongodb'
import { config } from 'dotenv'

config({ path: '.env.local' })

const CANVA_TEMPLATES = {
  versiculos: {
    modern: 'https://www.canva.com/design/template-versiculos-modern',
    minimalist: 'https://www.canva.com/design/template-versiculos-minimal',
    artistic: 'https://www.canva.com/design/template-versiculos-artistic'
  },
  oracoes: {
    modern: 'https://www.canva.com/design/template-oracoes-modern',
    minimalist: 'https://www.canva.com/design/template-oracoes-minimal',
    artistic: 'https://www.canva.com/design/template-oracoes-artistic'
  },
  reflexoes: {
    modern: 'https://www.canva.com/design/template-reflexoes-modern',
    minimalist: 'https://www.canva.com/design/template-reflexoes-minimal',
    artistic: 'https://www.canva.com/design/template-reflexoes-artistic'
  },
  convites: {
    modern: 'https://www.canva.com/design/template-convites-modern',
    minimalist: 'https://www.canva.com/design/template-convites-minimal',
    artistic: 'https://www.canva.com/design/template-convites-artistic'
  },
  'anuncios-culto': {
    modern: 'https://www.canva.com/design/template-anuncios-modern',
    minimalist: 'https://www.canva.com/design/template-anuncios-minimal',
    artistic: 'https://www.canva.com/design/template-anuncios-artistic'
  },
  'frases-fe': {
    modern: 'https://www.canva.com/design/template-frases-fe-modern',
    minimalist: 'https://www.canva.com/design/template-frases-fe-minimal',
    artistic: 'https://www.canva.com/design/template-frases-fe-artistic'
  },
  'datas-especiais': {
    modern: 'https://www.canva.com/design/template-datas-modern',
    minimalist: 'https://www.canva.com/design/template-datas-minimal',
    artistic: 'https://www.canva.com/design/template-datas-artistic'
  },
  'evangelismo-dupla': {
    modern: 'https://www.canva.com/design/template-evangelismo-modern',
    minimalist: 'https://www.canva.com/design/template-evangelismo-minimal',
    artistic: 'https://www.canva.com/design/template-evangelismo-artistic'
  },
  'frases-impacto': {
    modern: 'https://www.canva.com/design/template-impacto-modern',
    minimalist: 'https://www.canva.com/design/template-impacto-minimal',
    artistic: 'https://www.canva.com/design/template-impacto-artistic'
  }
}

async function updateCanvaLinks() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI não encontrada')
    }

    console.log('Conectando ao MongoDB...')
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    const templates = db.collection('templates')

    console.log('Atualizando links do Canva...')
    for (const [category, styles] of Object.entries(CANVA_TEMPLATES)) {
      for (const [style, canvaUrl] of Object.entries(styles)) {
        await templates.updateMany(
          {
            category,
            style
          },
          {
            $set: {
              canvaUrl
            }
          }
        )
      }
    }

    console.log('Links do Canva atualizados com sucesso!')
    await client.close()
  } catch (error) {
    console.error('Erro ao atualizar links do Canva:', error)
    process.exit(1)
  }
}

updateCanvaLinks() 