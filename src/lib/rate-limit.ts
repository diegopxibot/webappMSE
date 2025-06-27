import { NextRequest, NextResponse } from 'next/server'

// Configuração simples de rate limiting
const rateLimit = {
  windowMs: 60 * 1000, // 1 minuto
  max: 60 // limite de 60 requisições por minuto
}

const cache = new Map<string, number[]>()

export function rateLimiter(req: NextRequest) {
  const ip = req.ip ?? '127.0.0.1'
  const now = Date.now()
  const windowStart = now - rateLimit.windowMs

  const requestTimestamps = cache.get(ip) || []
  const requestsInWindow = requestTimestamps.filter((timestamp: number) => timestamp > windowStart)

  if (requestsInWindow.length >= rateLimit.max) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }

  requestsInWindow.push(now)
  cache.set(ip, requestsInWindow)

  return null
} 