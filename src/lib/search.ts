import { MongoClient } from 'mongodb'
import { connectToDatabase } from './mongodb'

export async function setupSearchIndexes() {
  try {
    const db = await connectToDatabase()
    const templates = db.collection('templates')

    // Criar índice de texto
    await templates.createIndex({
      name: 'text',
      category: 'text',
      suggestedCaption: 'text'
    }, {
      weights: {
        name: 10,
        category: 5,
        suggestedCaption: 1
      },
      name: 'templates_text_search'
    })

    // Criar índices compostos para filtros
    await templates.createIndex({
      category: 1,
      style: 1,
      color: 1
    })

    console.log('Índices de busca criados com sucesso')
  } catch (error) {
    console.error('Erro ao criar índices de busca:', error)
  }
}

export async function searchTemplates({
  query,
  category,
  style,
  color,
  limit = 20,
  page = 1
}: {
  query?: string
  category?: string
  style?: string
  color?: string
  limit?: number
  page?: number
}) {
  try {
    const db = await connectToDatabase()
    const templates = db.collection('templates')

    const filter: any = {}

    // Adicionar busca por texto se houver query
    if (query) {
      filter.$text = { $search: query }
    }

    // Adicionar filtros
    if (category) filter.category = category
    if (style) filter.style = style
    if (color) filter.color = color

    // Calcular skip para paginação
    const skip = (page - 1) * limit

    // Executar busca
    const [results, total] = await Promise.all([
      templates
        .find(filter)
        .sort(query ? { score: { $meta: 'textScore' } } : { _id: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      templates.countDocuments(filter)
    ])

    return {
      templates: results,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      hasMore: total > skip + limit
    }
  } catch (error) {
    console.error('Erro na busca de templates:', error)
    throw error
  }
}

export async function getSuggestions(query: string) {
  try {
    const db = await connectToDatabase()
    const templates = db.collection('templates')

    const suggestions = await templates
      .aggregate([
        {
          $search: {
            autocomplete: {
              query,
              path: 'name',
              fuzzy: {
                maxEdits: 1
              }
            }
          }
        },
        {
          $project: {
            _id: 0,
            name: 1,
            category: 1,
            score: { $meta: 'searchScore' }
          }
        },
        {
          $limit: 5
        }
      ])
      .toArray()

    return suggestions
  } catch (error) {
    console.error('Erro ao buscar sugestões:', error)
    return []
  }
}

export async function getPopularSearches() {
  try {
    const db = await connectToDatabase()
    const searches = db.collection('searchAnalytics')

    const popularSearches = await searches
      .aggregate([
        {
          $group: {
            _id: '$query',
            count: { $sum: 1 }
          }
        },
        {
          $sort: { count: -1 }
        },
        {
          $limit: 10
        }
      ])
      .toArray()

    return popularSearches
  } catch (error) {
    console.error('Erro ao buscar pesquisas populares:', error)
    return []
  }
}

export async function trackSearch(query: string, userId?: string) {
  try {
    const db = await connectToDatabase()
    const searches = db.collection('searchAnalytics')

    await searches.insertOne({
      query,
      userId,
      timestamp: new Date()
    })
  } catch (error) {
    console.error('Erro ao registrar busca:', error)
  }
} 