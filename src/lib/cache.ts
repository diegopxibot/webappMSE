import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || ''
})

const DEFAULT_TTL = 60 * 60 * 24 // 24 horas

export async function getCachedData<T>(
  key: string,
  fetchData: () => Promise<T>,
  ttl = DEFAULT_TTL
): Promise<T> {
  try {
    // Tenta buscar do cache
    const cached = await redis.get<T>(key)
    if (cached) {
      return cached
    }

    // Se não encontrou, busca os dados
    const data = await fetchData()

    // Salva no cache
    await redis.setex(key, ttl, data)

    return data
  } catch (error) {
    console.error('Erro no cache:', error)
    // Se houver erro no cache, busca os dados diretamente
    return fetchData()
  }
}

export async function invalidateCache(key: string) {
  try {
    await redis.del(key)
  } catch (error) {
    console.error('Erro ao invalidar cache:', error)
  }
}

export async function invalidateCachePattern(pattern: string) {
  try {
    const keys = await redis.keys(pattern)
    if (keys.length > 0) {
      await redis.del(...keys)
    }
  } catch (error) {
    console.error('Erro ao invalidar cache por padrão:', error)
  }
}

// Cache keys
export const CACHE_KEYS = {
  templates: {
    all: 'templates:all',
    byId: (id: string) => `templates:${id}`,
    byCategory: (category: string) => `templates:category:${category}`,
    popular: 'templates:popular',
    favorites: (userId: string) => `templates:favorites:${userId}`
  },
  analytics: {
    templateStats: (templateId: string) => `analytics:template:${templateId}`
  }
} 