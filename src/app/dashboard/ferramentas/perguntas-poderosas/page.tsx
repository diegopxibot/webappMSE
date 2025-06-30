'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  questions: string[];
}

const categories: Category[] = [
  {
    id: 'fe',
    name: 'Fé',
    questions: [
      'Como sua fé tem influenciado suas decisões diárias?',
      'Qual foi o momento em que você mais sentiu a presença de Deus?',
      'De que forma sua fé te ajudou a superar um momento difícil?',
      'Como você mantém sua fé forte em tempos de dúvida?',
      'Qual versículo bíblico mais fortalece sua fé e por quê?',
      'Como você explica sua fé para pessoas não cristãs?',
      'De que maneira sua fé mudou ao longo dos anos?',
      'Como você alimenta sua fé diariamente?',
      'Qual testemunho de fé mais te marcou?',
      'Como você equilibra fé e razão em sua vida?',
      'Como sua fé impacta suas relações profissionais?',
      'De que forma você mantém sua fé em ambientes hostis?',
      'Como você usa sua fé para impactar sua comunidade?',
      'Qual é o papel da gratidão no fortalecimento da sua fé?',
      'Como você mantém sua fé autêntica e não religiosa?',
      'De que maneira sua fé te ajuda a tomar decisões difíceis?',
      'Como você cultiva uma fé que move montanhas?',
      'Qual é o papel da comunhão na construção da sua fé?',
      'Como você mantém sua fé relevante para a nova geração?',
      'De que forma sua fé te ajuda a superar o medo?'
    ]
  },
  {
    id: 'oracao',
    name: 'Oração',
    questions: [
      'Como sua vida de oração tem transformado seu relacionamento com Deus?',
      'Qual foi a oração mais significativa que você já fez?',
      'Como você mantém uma vida de oração consistente?',
      'De que forma você ora por pessoas que te machucaram?',
      'Como você identifica as respostas de Deus às suas orações?',
      'Qual é o momento do dia em que você mais se conecta com Deus em oração?',
      'Como você ensina outros a orarem?',
      'De que maneira a oração mudou sua perspectiva sobre os desafios?',
      'Como você ora quando não encontra as palavras certas?',
      'Qual é o papel do silêncio em sua vida de oração?',
      'Como você mantém o foco durante momentos longos de oração?',
      'De que forma você integra adoração e oração?',
      'Como você ora em momentos de crise?',
      'Qual é o papel do jejum em sua vida de oração?',
      'Como você desenvolve intimidade com Deus através da oração?',
      'De que maneira você usa a Bíblia em suas orações?',
      'Como você equilibra petição e gratidão em suas orações?',
      'Qual é o papel da intercessão em sua vida de oração?',
      'Como você ora em grupo de forma efetiva?',
      'De que forma você ensina crianças a orarem?'
    ]
  },
  {
    id: 'biblia',
    name: 'Bíblia',
    questions: [
      'Qual passagem bíblica mais impactou sua vida e por quê?',
      'Como você aplica os ensinamentos bíblicos no seu dia a dia?',
      'De que forma a Bíblia tem mudado sua maneira de pensar?',
      'Qual personagem bíblico mais te inspira e por quê?',
      'Como você mantém uma leitura bíblica consistente?',
      'Qual história bíblica mais te emociona?',
      'Como você estuda a Bíblia de forma efetiva?',
      'De que maneira você compartilha os ensinamentos bíblicos com outros?',
      'Como a Bíblia te ajuda em momentos de decisão?',
      'Qual promessa bíblica mais te conforta?',
      'Como você relaciona o Antigo e o Novo Testamento em seus estudos?',
      'De que forma você aplica as parábolas de Jesus hoje?',
      'Como você usa recursos de estudo bíblico efetivamente?',
      'Qual é sua estratégia para memorização de versículos?',
      'Como você mantém a Bíblia relevante para sua vida diária?',
      'De que maneira você estuda os contextos históricos bíblicos?',
      'Como você aplica profecias bíblicas em sua vida?',
      'Qual é sua abordagem para passagens bíblicas difíceis?',
      'Como você usa a Bíblia para aconselhar outros?',
      'De que forma você integra a Bíblia em seu trabalho?'
    ]
  },
  {
    id: 'evangelismo',
    name: 'Evangelismo',
    questions: [
      'Como você compartilha sua fé de forma natural?',
      'Qual foi sua experiência mais marcante evangelizando?',
      'Como você aborda temas difíceis ao evangelizar?',
      'De que forma você usa suas redes sociais para evangelizar?',
      'Como você lida com rejeição ao evangelizar?',
      'Qual estratégia você usa para conectar-se com não cristãos?',
      'Como você adapta sua mensagem para diferentes públicos?',
      'Qual testemunho pessoal você mais compartilha ao evangelizar?',
      'Como você mantém o foco em Cristo ao evangelizar?',
      'De que maneira você mede o impacto do seu evangelismo?',
      'Como você usa sua profissão para evangelizar?',
      'De que forma você evangeliza através de atos de serviço?',
      'Como você aborda questões culturais ao evangelizar?',
      'Qual é o papel da amizade no evangelismo?',
      'Como você evangeliza em ambientes hostis à fé?',
      'De que maneira você usa a arte para evangelizar?',
      'Como você mantém a relevância ao evangelizar jovens?',
      'Qual é sua estratégia para evangelismo digital?',
      'Como você treina outros para evangelizar?',
      'De que forma você evangeliza através do seu estilo de vida?'
    ]
  },
  {
    id: 'testemunho',
    name: 'Testemunho',
    questions: [
      'Qual foi o momento de virada em sua caminhada com Deus?',
      'Como seu testemunho tem impactado outras pessoas?',
      'De que forma Deus transformou uma situação impossível em sua vida?',
      'Qual milagre você presenciou que fortaleceu sua fé?',
      'Como você compartilha seu testemunho de forma efetiva?',
      'Qual parte do seu testemunho mais toca as pessoas?',
      'Como Deus usou suas fraquezas para Sua glória?',
      'Qual foi a maior lição que você aprendeu em sua jornada de fé?',
      'Como seu testemunho mudou sua perspectiva de vida?',
      'De que maneira seu testemunho aproxima pessoas de Deus?',
      'Como você usa seu testemunho para encorajar outros?',
      'De que forma seu testemunho impacta sua família?',
      'Como você mantém seu testemunho autêntico?',
      'Qual parte do seu testemunho mais desafia as pessoas?',
      'Como você adapta seu testemunho para diferentes públicos?',
      'De que maneira seu testemunho reflete a graça de Deus?',
      'Como você usa seu testemunho em momentos de crise?',
      'Qual aspecto do seu testemunho mais glorifica a Deus?',
      'Como você mantém seu testemunho relevante ao longo do tempo?',
      'De que forma seu testemunho impacta sua comunidade?'
    ]
  },
  {
    id: 'relacionamentos',
    name: 'Relacionamentos',
    questions: [
      'Como sua fé influencia seus relacionamentos?',
      'De que forma você pratica o perdão em seus relacionamentos?',
      'Como você mantém Deus no centro dos seus relacionamentos?',
      'Qual princípio bíblico mais te ajuda nos relacionamentos?',
      'Como você lida com conflitos de forma cristã?',
      'De que maneira você ora pelos seus relacionamentos?',
      'Como você demonstra o amor de Cristo em seus relacionamentos?',
      'Qual foi a maior lição que aprendeu sobre relacionamentos cristãos?',
      'Como você estabelece limites saudáveis nos relacionamentos?',
      'De que forma você cultiva relacionamentos profundos na igreja?',
      'Como você mantém relacionamentos intergeracionais saudáveis?',
      'De que forma você lida com relacionamentos tóxicos?',
      'Como você cultiva amizades espirituais profundas?',
      'Qual é o papel do mentoreamento em seus relacionamentos?',
      'Como você mantém relacionamentos à distância?',
      'De que maneira você restaura relacionamentos quebrados?',
      'Como você equilibra graça e verdade nos relacionamentos?',
      'Qual é sua estratégia para construir confiança?',
      'Como você mantém relacionamentos profissionais éticos?',
      'De que forma você investe em relacionamentos familiares?'
    ]
  },
  {
    id: 'ministerio',
    name: 'Ministério',
    questions: [
      'Como você descobriu seu chamado ministerial?',
      'De que forma você desenvolve seus dons no ministério?',
      'Como você mantém o equilíbrio entre ministério e vida pessoal?',
      'Qual foi o maior desafio que enfrentou no ministério?',
      'Como você lida com o desânimo no ministério?',
      'De que maneira você mensura o sucesso no ministério?',
      'Como você prepara a próxima geração para o ministério?',
      'Qual foi a maior lição que aprendeu servindo no ministério?',
      'Como você mantém sua paixão pelo ministério viva?',
      'De que forma você cuida da sua saúde espiritual no ministério?',
      'Como você desenvolve liderança no ministério?',
      'De que forma você inova no ministério?',
      'Como você lida com críticas no ministério?',
      'Qual é o papel da prestação de contas no ministério?',
      'Como você mantém a visão do ministério clara?',
      'De que maneira você delega responsabilidades?',
      'Como você integra diferentes gerações no ministério?',
      'Qual é sua estratégia para crescimento ministerial?',
      'Como você mantém a integridade no ministério?',
      'De que forma você avalia a efetividade do ministério?'
    ]
  },
  {
    id: 'desafios',
    name: 'Desafios',
    questions: [
      'Como sua fé te ajuda a enfrentar desafios?',
      'Qual foi o desafio que mais fortaleceu sua fé?',
      'De que forma você mantém a esperança em tempos difíceis?',
      'Como você encontra paz em meio às tempestades?',
      'Qual versículo te conforta nos momentos de provação?',
      'Como você ajuda outros que estão passando por desafios?',
      'De que maneira os desafios transformaram sua vida espiritual?',
      'Como você mantém o foco em Deus durante as dificuldades?',
      'Qual foi a maior vitória que Deus te concedeu em um desafio?',
      'Como você usa seus desafios para glorificar a Deus?',
      'Como você mantém a perspectiva eterna nos desafios?',
      'De que forma você encontra propósito nas dificuldades?',
      'Como você supera o medo durante os desafios?',
      'Qual é o papel da comunidade em tempos difíceis?',
      'Como você mantém a alegria em meio aos problemas?',
      'De que maneira você usa os desafios para crescer?',
      'Como você ajuda sua família durante as provações?',
      'Qual é sua estratégia para superar obstáculos?',
      'Como você mantém a gratidão em tempos difíceis?',
      'De que forma você testemunha através dos desafios?'
    ]
  }
];

export default function PowerfulQuestions() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<string>('');
  const [questionsUsed, setQuestionsUsed] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [copiado, setCopiado] = useState(false);

  const getRandomQuestion = (category: Category) => {
    const unusedQuestions = category.questions.filter(q => !questionsUsed.includes(q));
    if (unusedQuestions.length === 0) {
      setQuestionsUsed([]);
      toast.success('Você completou todas as perguntas desta categoria! Começando novamente...', {
        style: {
          background: '#00FFFF',
          color: '#0A0B2E',
          fontWeight: 'bold',
        },
        icon: '✨'
      });
      const randomIndex = Math.floor(Math.random() * category.questions.length);
      return category.questions[randomIndex];
    }
    const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
    const question = unusedQuestions[randomIndex];
    setQuestionsUsed([...questionsUsed, question]);
    setStreak(prev => prev + 1);
    if (streak > 0 && streak % 5 === 0) {
      toast.success(`🔥 Sequência incrível! ${streak} perguntas geradas!`, {
        style: {
          background: '#00FFFF',
          color: '#0A0B2E',
          fontWeight: 'bold',
        },
        icon: '🎯'
      });
    }
    return question;
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentQuestion(getRandomQuestion(category));
  };

  const handleRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    handleCategorySelect(randomCategory);
  };

  const handleNewQuestion = () => {
    if (selectedCategory) {
      setCurrentQuestion(getRandomQuestion(selectedCategory));
    }
  };

  const handleCopyQuestion = () => {
    if (currentQuestion) {
      navigator.clipboard.writeText(currentQuestion);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0B2E] to-[#0A0B2E]/90 p-4 sm:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            href="/dashboard/ferramentas" 
            className="group mb-6 inline-flex items-center rounded-lg bg-[#00FFFF]/10 px-4 py-2 text-sm text-[#00FFFF] transition-all hover:bg-[#00FFFF]/20"
          >
            <svg className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Voltar para Ferramentas
          </Link>

          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            💭 Perguntas Poderosas
          </h1>
          <p className="text-gray-400">
            Escolha uma categoria ou use o modo aleatório para gerar perguntas que engajam sua audiência em conversas significativas.
            {streak > 0 && ` 🔥 Sequência atual: ${streak} perguntas`}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mb-8 rounded-xl bg-[#0A0B2E]/30 p-6 backdrop-blur-sm">
          <label className="mb-4 block text-sm font-medium text-gray-300">
            Escolha uma categoria para suas perguntas
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              onClick={handleRandomCategory}
              className="flex items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20"
            >
              🎲 Aleatório
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className={`flex flex-col items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  selectedCategory?.id === category.id
                    ? 'bg-[#00FFFF] text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20'
                    : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
                }`}
              >
                <span>{category.name}</span>
                {questionsUsed.length > 0 && selectedCategory?.id === category.id && (
                  <span className="mt-1 text-xs opacity-80">
                    {category.questions.length - questionsUsed.length} restantes
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Question Display */}
        {currentQuestion ? (
          <div className="mb-8 overflow-hidden rounded-xl bg-[#0A0B2E]/50 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-[#00FFFF]">
                {selectedCategory?.name}
              </span>
              <button
                onClick={handleNewQuestion}
                className="text-sm text-[#00FFFF]/80 hover:text-[#00FFFF] transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Nova Pergunta
              </button>
            </div>
            
            <p className="text-xl text-white mb-6">{currentQuestion}</p>
          </div>
        ) : (
          <div className="mb-8 flex min-h-[200px] items-center justify-center rounded-xl bg-[#0A0B2E]/30 p-8 text-center backdrop-blur-sm">
            <div>
              <div className="mb-4 text-4xl">💭</div>
              <p className="text-gray-400">
                Escolha uma categoria para gerar uma pergunta poderosa
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={handleNewQuestion}
            disabled={!selectedCategory}
            className={`flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all ${
              !selectedCategory
                ? 'cursor-not-allowed bg-gray-700/50 text-gray-500'
                : 'bg-[#00FFFF] text-[#0A0B2E] shadow-lg shadow-[#00FFFF]/20 hover:bg-[#00FFFF]/90'
            }`}
          >
            <span className="mr-2">💭</span>
            Gerar Nova Pergunta
          </button>
          <button
            onClick={handleCopyQuestion}
            disabled={!currentQuestion}
            className={`flex items-center justify-center rounded-lg px-6 py-3 font-medium transition-all ${
              !currentQuestion
                ? 'cursor-not-allowed bg-gray-700/50 text-gray-500'
                : 'bg-[#00FFFF]/10 text-[#00FFFF] hover:bg-[#00FFFF]/20'
            }`}
          >
            <span className="mr-2">📋</span>
            Copiar Pergunta
          </button>
        </div>

        {/* Toast Notification */}
        {copiado && (
          <div className="fixed bottom-4 right-4 flex items-center rounded-lg bg-[#00FFFF] px-4 py-3 text-[#0A0B2E] shadow-lg">
            <span className="mr-2">✅</span>
            Pergunta Copiada!
          </div>
        )}
      </div>
    </div>
  );
} 