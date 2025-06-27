import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import crypto from 'crypto'

const resend = new Resend(process.env.RESEND_API_KEY)

// Função para verificar a assinatura do webhook da Kiwify
function verifyKiwifySignature(payload: string, signature: string, secret: string) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex')
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )
}

// Template do email de boas-vindas
const welcomeEmailTemplate = `
Olá! 

Bem-vindo ao MSE - Método Stories Evangelístico!

Aqui estão suas credenciais de acesso:
Email: {{email}}
Senha: {{password}}

Acesse agora mesmo: {{appUrl}}

Deus abençoe!
`

export async function POST(request: Request) {
  try {
    // Verificar se é uma requisição válida da Kiwify
    const payload = await request.text()
    const signature = request.headers.get('x-kiwify-signature')
    
    if (!signature || !process.env.KIWIFY_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const isValid = verifyKiwifySignature(
      payload,
      signature,
      process.env.KIWIFY_WEBHOOK_SECRET
    )

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    // Processar o payload
    const data = JSON.parse(payload)
    
    // Verificar se é uma compra aprovada
    if (data.type !== 'order.completed') {
      return NextResponse.json({ message: 'Event ignored' })
    }

    // Gerar senha aleatória
    const password = crypto.randomBytes(4).toString('hex')
    
    // Preparar dados do usuário
    const userEmail = data.data.customer.email
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://seu-app.vercel.app'

    // Enviar email com as credenciais
    await resend.emails.send({
      from: 'MSE <noreply@seu-dominio.com>',
      to: userEmail,
      subject: 'Bem-vindo ao MSE - Suas Credenciais de Acesso',
      text: welcomeEmailTemplate
        .replace('{{email}}', userEmail)
        .replace('{{password}}', password)
        .replace('{{appUrl}}', appUrl)
    })

    // TODO: Salvar as credenciais no banco de dados
    // Aqui você deve implementar a lógica para salvar o usuário
    // usando o sistema de autenticação escolhido

    return NextResponse.json({ 
      message: 'Webhook processed successfully',
      email: userEmail
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 