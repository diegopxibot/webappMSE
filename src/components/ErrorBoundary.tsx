'use client'

import { Component, ReactNode } from 'react'
import { errorMonitor } from '@/lib/error-monitoring'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error): void {
    errorMonitor.logError(error, window.location.href)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Ops! Algo deu errado
          </h2>
          <p className="text-gray-600 mb-4">
            Não se preocupe, já fomos notificados e estamos trabalhando na solução.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Tentar Novamente
          </button>
        </div>
      )
    }

    return this.props.children
  }
} 