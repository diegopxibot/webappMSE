'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const moduleContent = {
  mentalidade: {
    title: 'Mentalidade do Evangelista Digital',
    icon: '🧠',
    content: `
      <h2>Desenvolvendo a Mentalidade Correta</h2>
      <p>Como evangelista digital, você precisa desenvolver uma mentalidade focada em:</p>
      <ul>
        <li>Compaixão e empatia com seu público</li>
        <li>Consistência na produção de conteúdo</li>
        <li>Autenticidade em suas mensagens</li>
        <li>Disposição para aprender e adaptar</li>
      </ul>
    `,
    tasks: [
      { id: 1, text: 'Definir seu público-alvo nas redes sociais', completed: false },
      { id: 2, text: 'Criar sua declaração de missão pessoal', completed: false },
      { id: 3, text: 'Estabelecer uma rotina diária de devoção', completed: false },
      { id: 4, text: 'Identificar suas forças e áreas de melhoria', completed: false }
    ]
  },
  metodo: {
    title: 'Entendendo o Método',
    icon: '📚',
    content: `
      <h2>O Método Stories Evangelístico</h2>
      <p>Aprenda os fundamentos do método que vai transformar seus stories em ferramentas poderosas de evangelismo:</p>
      <ul>
        <li>Estrutura de storytelling bíblico</li>
        <li>Técnicas de engajamento emocional</li>
        <li>Princípios de comunicação efetiva</li>
        <li>Elementos visuais e narrativos</li>
      </ul>
    `,
    tasks: [
      { id: 1, text: 'Estudar os elementos básicos do storytelling', completed: false },
      { id: 2, text: 'Analisar 3 histórias bíblicas usando o método', completed: false },
      { id: 3, text: 'Criar um roteiro básico para stories', completed: false },
      { id: 4, text: 'Praticar técnicas de narrativa visual', completed: false }
    ]
  },
  pratica: {
    title: 'Aplicação na Prática',
    icon: '🎯',
    content: `
      <h2>Colocando em Prática</h2>
      <p>Chegou a hora de aplicar o conhecimento na prática:</p>
      <ul>
        <li>Criação de conteúdo envolvente</li>
        <li>Uso efetivo de recursos visuais</li>
        <li>Interação com a audiência</li>
        <li>Medição de resultados</li>
      </ul>
    `,
    tasks: [
      { id: 1, text: 'Criar sua primeira série de stories evangelísticos', completed: false },
      { id: 2, text: 'Desenvolver um calendário de conteúdo semanal', completed: false },
      { id: 3, text: 'Implementar técnicas de interação nos stories', completed: false },
      { id: 4, text: 'Analisar métricas e feedback do público', completed: false }
    ]
  },
  criticas: {
    title: 'Como Lidar com Críticas e Objeções',
    icon: '🛡️',
    content: `
      <h2>Lidando com Diferentes Tipos de Feedback</h2>
      <p>Aprenda a lidar com críticas e objeções de forma construtiva:</p>
      <ul>
        <li>Tipos comuns de críticas no ambiente digital</li>
        <li>Respondendo com graça e sabedoria</li>
        <li>Transformando críticas em oportunidades</li>
        <li>Mantendo a paz em discussões online</li>
      </ul>
    `,
    tasks: [
      { id: 1, text: 'Identificar padrões comuns de críticas', completed: false },
      { id: 2, text: 'Desenvolver respostas modelo para objeções frequentes', completed: false },
      { id: 3, text: 'Praticar técnicas de comunicação não-violenta', completed: false },
      { id: 4, text: 'Criar um guia pessoal de resposta a críticas', completed: false }
    ]
  },
  crescimento: {
    title: 'Crescimento e Escala',
    icon: '📈',
    content: `
      <h2>Expandindo seu Alcance e Impacto</h2>
      <p>Maximize seu impacto nas redes sociais:</p>
      <ul>
        <li>Estratégias de crescimento orgânico</li>
        <li>Construção de comunidade engajada</li>
        <li>Parcerias estratégicas</li>
        <li>Análise de dados e otimização</li>
      </ul>
    `,
    tasks: [
      { id: 1, text: 'Desenvolver uma estratégia de crescimento', completed: false },
      { id: 2, text: 'Implementar técnicas de engajamento comunitário', completed: false },
      { id: 3, text: 'Estabelecer parcerias com outros criadores', completed: false },
      { id: 4, text: 'Criar um sistema de análise de resultados', completed: false }
    ]
  }
};

export default function ModulePage({ params }: { params: { module: string } }) {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const module = moduleContent[params.module as keyof typeof moduleContent];

  useEffect(() => {
    const savedTasks = localStorage.getItem(`tasks-${params.module}`);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else if (module) {
      setTasks(module.tasks);
    }
  }, [params.module, module]);

  const handleTaskToggle = (taskId: number) => {
    const newTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    localStorage.setItem(`tasks-${params.module}`, JSON.stringify(newTasks));
  };

  const handleModuleComplete = () => {
    const completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');
    if (!completedModules.includes(params.module)) {
      completedModules.push(params.module);
      localStorage.setItem('completedModules', JSON.stringify(completedModules));
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setIsCompleted(true);
      setTimeout(() => {
        router.push('/dashboard/jornada');
      }, 3000);
    }
  };

  if (!module) {
    return <div>Módulo não encontrado</div>;
  }

  const allTasksCompleted = tasks.every(task => task.completed);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-dark-light to-dark-lighter py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/dashboard/jornada" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Voltar para a Jornada</span>
          </Link>
        </div>

        <div className="relative p-8 rounded-xl backdrop-blur-md bg-dark-light/90 border border-primary/20 hover:border-primary/40 shadow-lg">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">{module.icon}</span>
            <h1 className="text-3xl font-bold gradient-text">{module.title}</h1>
          </div>

          <div 
            className="prose prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: module.content }}
          />

          <div className="bg-dark-lighter/50 rounded-lg p-6 mb-8 backdrop-blur-sm border border-primary/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Checklist Prático</h2>
            <div className="space-y-4">
              {tasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskToggle(task.id)}
                    className="h-5 w-5 text-primary rounded border-gray-600 focus:ring-primary bg-dark-lighter"
                  />
                  <label className="text-gray-200">{task.text}</label>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleModuleComplete}
            disabled={!allTasksCompleted || isCompleted}
            className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
              allTasksCompleted && !isCompleted
                ? 'bg-primary hover:bg-primary/80 text-dark hover:scale-105 hover:shadow-lg hover:shadow-primary/20'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isCompleted ? 'Módulo Concluído! 🎉' : 'Marcar Módulo como Concluído'}
          </button>
        </div>
      </div>
    </div>
  );
} 