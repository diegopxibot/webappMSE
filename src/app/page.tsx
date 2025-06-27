import Link from 'next/link'

interface Feature {
  title: string;
  description: string;
  icon: (props: { className?: string }) => JSX.Element;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark-lighter">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Método Stories Evangelístico
          </h1>
          <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
            Transforme seus Stories em instrumentos de evangelismo digital com poder e propósito
          </p>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <div className="h-1 w-20 bg-secondary rounded-full"></div>
          </div>
          <Link 
            href="/login"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-dark font-medium transition-all duration-300 hover:bg-primary/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Começar Agora
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-xl backdrop-blur-md bg-dark-light/90 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transform transition-all duration-300 hover:scale-[1.02]"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

const features: Feature[] = [
  {
    title: 'Conteúdo Transformador',
    description: 'Aprenda a criar stories que tocam corações e transformam vidas com propósito divino.',
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: 'Ferramentas Práticas',
    description: 'Acesse geradores de conteúdo, templates e recursos para criar stories impactantes.',
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    )
  },
  {
    title: 'Comunidade Engajada',
    description: 'Faça parte de uma comunidade de evangelistas digitais comprometidos com a missão.',
    icon: ({ className }) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  }
] 