export default function VerifyRequestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center">
          <div className="mb-6">
            <svg
              className="w-16 h-16 text-accent mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-heading font-bold text-white mb-4">
            Verifique seu Email
          </h1>
          
          <p className="text-gray-300 mb-6">
            Enviamos um link de acesso para o seu email.
            Por favor, clique no link para acessar sua conta.
          </p>

          <div className="text-sm text-gray-400">
            <p>
              Não recebeu o email?
              Verifique sua caixa de spam ou solicite um novo link.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 