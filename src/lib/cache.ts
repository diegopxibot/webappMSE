type CacheItem<T> = {
  value: T
  expiry: number
}

class Cache<T> {
  private cache: Map<string, CacheItem<T>>
  private defaultTTL: number

  constructor(defaultTTL: number = 60 * 1000) { // 1 minuto por padrão
    this.cache = new Map()
    this.defaultTTL = defaultTTL
  }

  set(key: string, value: T, ttl: number = this.defaultTTL): void {
    const expiry = Date.now() + ttl
    this.cache.set(key, { value, expiry })
  }

  get(key: string): T | null {
    const item = this.cache.get(key)
    if (!item) return null

    if (Date.now() > item.expiry) {
      this.cache.delete(key)
      return null
    }

    return item.value
  }

  delete(key: string): void {
    this.cache.delete(key)
  }

  clear(): void {
    this.cache.clear()
  }
}

// Exporta uma instância global do cache
export const globalCache = new Cache() 