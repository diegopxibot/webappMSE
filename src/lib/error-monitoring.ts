type ErrorLog = {
  message: string
  stack?: string
  timestamp: number
  url?: string
  userId?: string
}

class ErrorMonitor {
  private static instance: ErrorMonitor
  private errorLogs: ErrorLog[] = []
  private readonly maxLogs: number = 1000

  private constructor() {
    // Singleton
  }

  static getInstance(): ErrorMonitor {
    if (!ErrorMonitor.instance) {
      ErrorMonitor.instance = new ErrorMonitor()
    }
    return ErrorMonitor.instance
  }

  logError(error: Error, url?: string, userId?: string) {
    const errorLog: ErrorLog = {
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      url,
      userId
    }

    this.errorLogs.push(errorLog)

    // Manter apenas os últimos maxLogs registros
    if (this.errorLogs.length > this.maxLogs) {
      this.errorLogs = this.errorLogs.slice(-this.maxLogs)
    }

    // Log no console em desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorLog)
    }

    // Aqui você pode adicionar integração com serviços externos
    // como Sentry, LogRocket, etc.
  }

  getRecentErrors(): ErrorLog[] {
    return [...this.errorLogs]
  }

  clearLogs(): void {
    this.errorLogs = []
  }
}

export const errorMonitor = ErrorMonitor.getInstance() 