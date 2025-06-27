import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Lê o arquivo de credenciais
    const credentialsPath = path.join(process.cwd(), 'credentials.json')
    
    if (!fs.existsSync(credentialsPath)) {
      return NextResponse.json({ 
        success: false,
        error: 'Credenciais inválidas'
      })
    }

    const fileContent = fs.readFileSync(credentialsPath, 'utf8')
    const credentials = JSON.parse(fileContent)

    // Procura o usuário
    const user = credentials.find(
      (cred: any) => cred.email === email && cred.password === password
    )

    if (user) {
      return NextResponse.json({
        success: true,
        name: user.name
      })
    }

    return NextResponse.json({ 
      success: false,
      error: 'Credenciais inválidas'
    })
  } catch (error) {
    console.error('Erro ao verificar credenciais:', error)
    return NextResponse.json({ 
      success: false,
      error: 'Erro ao verificar credenciais'
    }, { status: 500 })
  }
} 