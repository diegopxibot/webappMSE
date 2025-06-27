'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Link from 'next/link';

interface Critica {
  id: number;
  titulo_da_critica: string;
  resposta: string;
  versiculo_base?: string;
}

const criticas: Critica[] = [
  {
    id: 1,
    titulo_da_critica: "Disseram que sou fanática",
    resposta: "Entendo sua preocupação. Na verdade, compartilhar nossa fé com amor e respeito é um ato de cuidado com o próximo. Jesus nos ensinou a sermos luz, não para nos exaltar, mas para glorificar a Deus e abençoar outros.",
    versiculo_base: "Assim brilhe a luz de vocês diante dos outros, para que vejam as suas boas obras e glorifiquem ao Pai de vocês, que está nos céus. - Mateus 5:16"
  },
  {
    id: 2,
    titulo_da_critica: "Por que evangelizar online?",
    resposta: "O ambiente digital é onde muitas pessoas buscam respostas e conexão hoje. Assim como Paulo usou as praças e sinagogas de sua época, podemos usar a internet para compartilhar a esperança que temos em Cristo de forma relevante e acessível.",
    versiculo_base: "Portanto, vão e façam discípulos de todas as nações... - Mateus 28:19"
  },
  {
    id: 3,
    titulo_da_critica: "Cristão não deve estar no Instagram",
    resposta: "Como cristãos, somos chamados a ser sal e luz onde as pessoas estão. O Instagram pode ser usado de forma sábia e equilibrada para compartilhar valores positivos e inspirar outros a conhecerem mais sobre a fé.",
    versiculo_base: "Vocês são o sal da terra... Vocês são a luz do mundo... - Mateus 5:13-14"
  },
  {
    id: 4,
    titulo_da_critica: "Isso é exposição desnecessária",
    resposta: "Compartilhar nossa fé com sabedoria não é exposição, mas sim um testemunho que pode encorajar outros. O importante é manter o foco em Deus e na mensagem, não em nós mesmos.",
    versiculo_base: "Pois não pregamos a nós mesmos, mas a Jesus Cristo, o Senhor. - 2 Coríntios 4:5"
  },
  {
    id: 5,
    titulo_da_critica: "Já tem muita gente falando de Jesus",
    resposta: "Cada pessoa tem uma história única e alcança pessoas diferentes. Seu testemunho pessoal pode tocar alguém que precisa ouvir exatamente a sua forma de compartilhar o amor de Deus.",
    versiculo_base: "E eles o venceram pelo sangue do Cordeiro e pela palavra do seu testemunho... - Apocalipse 12:11"
  },
  {
    id: 6,
    titulo_da_critica: "Você quer aparecer?",
    resposta: "O objetivo é compartilhar o amor de Deus e Sua palavra, não buscar reconhecimento pessoal. Todo o trabalho é feito para glorificar a Deus e ajudar outros a conhecerem Sua mensagem de esperança.",
    versiculo_base: "Aquele que fala por si mesmo busca a sua própria glória, mas aquele que busca a glória de quem o enviou, este é verdadeiro. - João 7:18"
  },
  {
    id: 7,
    titulo_da_critica: "Isso não vai converter ninguém",
    resposta: "A conversão é obra do Espírito Santo. Nossa parte é semear com amor e fidelidade, confiando que Deus fará a Sua parte no tempo certo em cada coração.",
    versiculo_base: "Eu plantei, Apolo regou, mas Deus é quem fez crescer. - 1 Coríntios 3:6"
  },
  {
    id: 8,
    titulo_da_critica: "Você está julgando as pessoas",
    resposta: "Compartilhar o evangelho não é julgar, mas oferecer esperança e amor. Jesus nos ensinou a amar o próximo e compartilhar Suas boas novas com graça e verdade.",
    versiculo_base: "Pois Deus enviou o seu Filho ao mundo, não para condenar o mundo, mas para que este fosse salvo por meio dele. - João 3:17"
  },
  {
    id: 9,
    titulo_da_critica: "Religião não se discute",
    resposta: "Não se trata de discussão religiosa, mas de compartilhar uma experiência pessoal de fé e esperança que transformou nossa vida. Fazemos isso com respeito e amor ao próximo.",
    versiculo_base: "Antes, santifiquem Cristo como Senhor em seus corações. Estejam sempre preparados para responder a qualquer pessoa que lhes pedir a razão da esperança que há em vocês. Contudo, façam isso com mansidão e respeito. - 1 Pedro 3:15"
  },
  {
    id: 10,
    titulo_da_critica: "Isso é muito radical",
    resposta: "O que pode parecer radical é na verdade um compromisso sincero com nossa fé. Jesus nos chama a viver e compartilhar Seu amor de forma autêntica e corajosa.",
    versiculo_base: "Conheço as suas obras. Você não é frio nem quente. Melhor seria que você fosse frio ou quente! - Apocalipse 3:15"
  },
  {
    id: 11,
    titulo_da_critica: "Você só posta sobre isso?",
    resposta: "Compartilhar sobre fé é parte importante da minha vida, mas não a única. É uma escolha consciente usar esta plataforma para inspirar outros com mensagens de esperança e amor.",
    versiculo_base: "Tudo o que fizerem, seja em palavra ou em ação, façam-no em nome do Senhor Jesus. - Colossenses 3:17"
  },
  {
    id: 12,
    titulo_da_critica: "Isso afasta as pessoas",
    resposta: "Quando compartilhamos com amor e autenticidade, podemos construir pontes em vez de barreiras. O objetivo é aproximar as pessoas de Deus, não afastá-las.",
    versiculo_base: "Sejam sábios no procedimento para com os de fora e aproveitem ao máximo todas as oportunidades. - Colossenses 4:5"
  },
  {
    id: 13,
    titulo_da_critica: "Você está forçando sua fé",
    resposta: "Compartilhar não é forçar, é oferecer. Cada pessoa tem liberdade para aceitar ou não a mensagem. Nosso papel é apresentar o amor de Deus com respeito e gentileza.",
    versiculo_base: "Mas faça isso com gentileza e respeito, mantendo a consciência limpa. - 1 Pedro 3:16"
  },
  {
    id: 14,
    titulo_da_critica: "Isso é coisa de gente sem o que fazer",
    resposta: "Compartilhar o evangelho é um chamado importante que realizamos junto com nossas outras responsabilidades. É um propósito que dá sentido à nossa vida digital.",
    versiculo_base: "Portanto, meus amados irmãos, mantenham-se firmes, e que nada os abale. Sejam sempre dedicados à obra do Senhor. - 1 Coríntios 15:58"
  },
  {
    id: 15,
    titulo_da_critica: "Você se acha melhor que os outros?",
    resposta: "Não se trata de superioridade, mas de gratidão. Compartilhamos porque experimentamos o amor de Deus e desejamos que outros também conheçam essa graça.",
    versiculo_base: "Pois todos pecaram e estão destituídos da glória de Deus, sendo justificados gratuitamente por sua graça. - Romanos 3:23-24"
  },
  {
    id: 16,
    titulo_da_critica: "Isso é marketing religioso",
    resposta: "Nossa motivação é o amor e o desejo sincero de compartilhar esperança, não promover uma marca. O evangelho é uma mensagem de vida que transcende estratégias de marketing.",
    versiculo_base: "Porque o amor de Cristo nos constrange. - 2 Coríntios 5:14"
  }
];

export default function RespostasCriticas() {
  const [selectedCritica, setSelectedCritica] = useState<Critica | null>(null);

  const handleCopyResposta = (critica: Critica) => {
    const texto = critica.versiculo_base 
      ? `${critica.resposta}\n\n${critica.versiculo_base}`
      : critica.resposta;
    
    navigator.clipboard.writeText(texto);
    toast.success('Resposta copiada com sucesso!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">
          Escolha a crítica ou pergunta que deseja responder com sabedoria cristã:
        </h1>
        <Link 
          href="/dashboard/ferramentas" 
          className="btn inline-flex items-center text-sm text-[#00FFFF] hover:underline"
        >
          <svg className="mr-2 h-4 w-4 rotate-180" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Voltar para Ferramentas
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {criticas.map((critica) => (
          <div
            key={critica.id}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer"
            onClick={() => setSelectedCritica(critica)}
          >
            <h2 className="text-xl font-semibold text-white mb-4">{critica.titulo_da_critica}</h2>
            {selectedCritica?.id === critica.id && (
              <div className="mt-4 space-y-4">
                <p className="text-gray-300">{critica.resposta}</p>
                {critica.versiculo_base && (
                  <p className="text-[#00FFFF] italic">{critica.versiculo_base}</p>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyResposta(critica);
                  }}
                  className="bg-[#00FFFF] text-gray-900 px-4 py-2 rounded-lg hover:bg-[#00CCCC] transition-colors w-full flex items-center justify-center"
                >
                  📋 Copiar Resposta
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 