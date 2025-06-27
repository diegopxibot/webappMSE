interface CopyTemplate {
  frase: string
  tipo_frase: string
  aplicacao: string
}

interface StoryTemplate {
  tipo_frase: string
  engenharia_social: string
  story_1: string
  story_2: string
  story_3: string
  versiculo: string
  cta_final: string
}

// Templates para Feed, Reels e Direct
export const copyTemplates: CopyTemplate[] = [
  // Abertura - Feed
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌅 "Cada manhã as suas misericórdias se renovam" - Lm 3:23. Hoje quero compartilhar como essa verdade mudou minha perspectiva...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '⚡ Você já se perguntou por que algumas pessoas parecem ter uma paz inabalável? Descobri um segredo que preciso compartilhar...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🎯 "Os que esperam no Senhor renovarão as suas forças" - Is 40:31. Essa promessa tem um poder que vai além das palavras...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '💫 Existe uma força capaz de transformar qualquer história. E hoje vou te contar como ela mudou a minha vida...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌊 "Ainda que eu ande pelo vale da sombra da morte..." - Sl 23:4. Essa palavra tem um significado especial que preciso compartilhar...'
  },

  // Desenvolvimento - Feed
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🎯 A verdadeira transformação começa quando entendemos que não precisamos carregar nossos fardos sozinhos. Cristo já pagou esse preço...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🌱 Assim como uma semente precisa morrer para dar frutos, às vezes precisamos deixar velhos hábitos para viver o novo de Deus...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '⚡ O poder do Evangelho não está em rituais ou religião, mas no relacionamento pessoal com Aquele que nos criou e nos conhece...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🔥 Quando entendemos que somos amados incondicionalmente por Deus, nossa identidade é transformada e nossa vida ganha um novo sentido...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '💎 A paz que Jesus oferece é diferente da paz do mundo. Ela permanece mesmo nas tempestades, porque está fundamentada em algo eterno...'
  },

  // Encerramento - Feed
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🙏 Se você está buscando essa mesma paz, saiba que ela está mais perto do que você imagina. Me chama no direct para conversarmos mais!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '✨ Deus quer fazer história na sua vida também! Comenta um 🙏 se esse post tocou seu coração e vamos juntos nessa jornada!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '💫 Você não chegou aqui por acaso. Se essa mensagem falou com você, me manda um direct. Quero orar com você!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🌟 A sua história pode inspirar outras pessoas! Compartilha esse post com alguém que precisa dessa palavra hoje!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '💖 Jesus quer fazer parte da sua história! Se você quer conhecer mais sobre esse amor, me chama no direct!'
  },

  // Abertura - Reels
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎵 Som viral + Uma verdade que vai transformar sua vida... #JesusTransforma #Fé'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '✨ Transição: Do caos à paz em Cristo... Assista até o final! #PazEmCristo'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎬 POV: Quando você descobre que Deus já escreveu sua história... #PropósitoDeDeus'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '💫 Trend cristã: Mostrando como Deus restaura todas as áreas... #RestauracaoEmCristo'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🌟 Challenge aceito: 7 dias compartilhando testemunhos de fé... #TestemunhosCrista'
  },

  // Desenvolvimento - Reels
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🎭 Antes vs Depois: A transformação que só Jesus pode fazer... Espera pra ver o final!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🎵 Música: "Ele não desiste de você" + Uma história de restauração que vai tocar seu coração...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '✨ Transição especial: Das trevas à luz, um testemunho real de transformação...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '📖 Trend bíblica: Versículos que mudaram minha vida + Transições incríveis...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🎬 Story time: O dia em que Deus mudou completamente minha história...'
  },

  // Encerramento - Reels
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💫 Quer mais conteúdos assim? Segue + Salva + Compartilha! #JesusTransforma #Fé'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🎯 Me conta nos comentários se você já viveu algo parecido! #TestemunhoDeFé'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🙌 Marca 3 amigos que precisam ver isso! A palavra certa pode mudar uma vida!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '✨ Compartilha no seu story se esse vídeo tocou seu coração! #DeusNoControle'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💖 Deixa seu amém nos comentários e me chama no direct para mais! #CristãosNoInsta'
  },

  // Abertura - Direct
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! 🙏 Deus colocou você no meu coração hoje de uma forma especial...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! ✨ Estava em oração e senti que precisava compartilhar algo com você...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Hey! 💫 Tenho uma palavra de fé que pode ser exatamente o que você precisa ouvir hoje...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi, tudo bem? 🌟 Deus tem me mostrado algo especial e sinto que preciso compartilhar com você...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! 🙌 Recebi uma revelação incrível hoje e senti que deveria compartilhar com você...'
  },

  // Desenvolvimento - Direct
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Às vezes Deus usa pessoas para trazer uma palavra de esperança no momento certo. E sinto que esse é o momento...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Você já sentiu como se Deus estivesse distante? Quero compartilhar algo que pode mudar sua perspectiva...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Sabe quando parece que tudo está dando errado? Deus me mostrou algo que pode trazer luz para esse momento...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Às vezes precisamos de um lembrete do quanto Deus nos ama. E hoje, Ele me usou para te lembrar disso...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Deus trabalha de formas misteriosas, e Ele pode estar usando essa mensagem para tocar seu coração agora...'
  },

  // Encerramento - Direct
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso orar por você? Às vezes tudo que precisamos é de alguém para interceder conosco! 🙏✨'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Se quiser conversar mais sobre isso, estou aqui! Deus tem um propósito em cada conexão! 💫'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Que tal marcarmos um horário para orarmos juntos? A oração tem um poder transformador! 🙌'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Saiba que você não está sozinho(a) nessa jornada. Podemos caminhar juntos em Cristo! ❤️'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Vou continuar orando por você! Me conta depois como Deus tem agido na sua vida! ✨'
  },

  // Mais templates para Feed
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌟 "Porque Deus amou o mundo de tal maneira..." - João 3:16. Uma verdade que mudou minha vida para sempre...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '💫 O amor de Deus é como um oceano infinito: quanto mais você mergulha, mais descobre suas profundezas...'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🙏 Quer experimentar esse amor que transforma? Me chama no direct para conversarmos mais sobre isso!'
  },

  // Mais templates para Reels
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎬 Trend do momento + Mensagem que vai tocar seu coração... #JesusMudaVidas'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '✨ Transição poderosa: Do medo à confiança em Deus... #ConfiançaEmDeus'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💖 Se esse vídeo tocou seu coração, compartilha nos stories! #DeusNoComando'
  },

  // Mais templates para Direct
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: '🌅 Bom dia! Deus me inspirou a compartilhar uma palavra especial com você hoje...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: '🎯 Às vezes Deus permite certas situações para nos mostrar o quanto precisamos dEle...'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: '✨ Lembre-se: você é muito especial para Deus! Vamos orar juntos sobre isso?'
  },

  // Mais templates para Feed
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌈 "Em todas estas coisas somos mais que vencedores" - Rm 8:37. Uma promessa que preciso compartilhar...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🔥 Quando entregamos nossos medos a Deus, Ele nos devolve sonhos muito maiores do que imaginávamos...'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '💫 Sua história não termina aqui! Me chama no direct para descobrir o que Deus tem preparado!'
  },

  // Mais templates para Reels
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎵 Música + Testemunho + Transição que vai impactar sua fé... #TestemunhoReal'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🌟 Revelação: O momento exato em que Deus mudou minha história... #MilagreDeDeus'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🙏 Salva esse vídeo e assiste nos momentos difíceis! #DeusNoControle'
  },

  // Mais templates para Direct
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: '✨ Ei! Deus tem me usado para levar esperança, e sinto que você precisa ouvir isso hoje...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: '💫 Sabe aquela situação que parece não ter solução? Deus está trabalhando nos bastidores...'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: '🌟 Posso compartilhar um versículo que vai falar diretamente ao seu coração?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Saiba que você não está sozinho(a) nessa jornada. Podemos caminhar juntos em Cristo! ❤️'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Vou continuar orando por você! Me conta depois como Deus tem agido na sua vida! ✨'
  }
]

// Templates para Stories
export const storyTemplates: StoryTemplate[] = [
  // Urgência Oculta
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgência Oculta',
    story_1: '⚡ ATENÇÃO! Você sabia que 7 em cada 10 pessoas estão vivendo sem conhecer o verdadeiro propósito da vida?',
    story_2: 'Mas existe uma verdade que pode mudar tudo... Uma verdade que transformou minha vida e pode transformar a sua também!',
    story_3: 'Não deixe para depois. O momento de encontrar seu propósito é AGORA!',
    versiculo: '"Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor" - Jeremias 29:11',
    cta_final: '👆 Me chama no direct para descobrir como encontrar seu propósito em Deus!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgência Oculta',
    story_1: '🚨 IMPERDÍVEL: Uma revelação que vai mudar completamente sua forma de ver a vida!',
    story_2: 'O que vou te contar nos próximos stories pode ser exatamente o que você está procurando...',
    story_3: 'Não perca essa oportunidade única que Deus preparou para você!',
    versiculo: '"Eis que estou à porta e bato" - Apocalipse 3:20',
    cta_final: '🔥 Desliza up agora para não perder essa revelação divina!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgência Oculta',
    story_1: '⏰ AVISO URGENTE: Uma nova temporada espiritual está começando AGORA!',
    story_2: 'Deus está derramando bênçãos especiais neste momento... E você não pode ficar de fora!',
    story_3: 'O tempo é HOJE! Amanhã pode ser tarde demais...',
    versiculo: '"Este é o dia que o Senhor fez" - Salmos 118:24',
    cta_final: '⚡ Me chama no direct para não perder sua bênção!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgência Oculta',
    story_1: '🌟 ÚLTIMA CHANCE: O mover de Deus está acontecendo agora!',
    story_2: 'Muitos já estão experimentando o sobrenatural em suas vidas...',
    story_3: 'Não fique de fora dessa unção especial!',
    versiculo: '"Eis que faço uma coisa nova" - Isaías 43:19',
    cta_final: '✨ Desliza up para entrar nesse mover!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgência Oculta',
    story_1: '⚠️ ALERTA DIVINO: Uma palavra profética para este momento!',
    story_2: 'Deus está levantando pessoas para uma missão especial...',
    story_3: 'Será que você é uma delas?',
    versiculo: '"Quem enviarei? Quem irá por nós?" - Isaías 6:8',
    cta_final: '🔥 Me chama no direct para descobrir seu chamado!'
  },

  // Testemunho Silencioso
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '💔 Já se sentiu perdido em meio ao sucesso? Eu também já estive lá...',
    story_2: 'Descobri que todo o dinheiro e reconhecimento do mundo não preenchem o vazio da alma',
    story_3: 'Mas encontrei algo que mudou tudo... E quero compartilhar com você!',
    versiculo: '"Que adianta ganhar o mundo todo e perder a sua alma?" - Marcos 8:36',
    cta_final: '✨ Quer descobrir o que realmente importa? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '😔 Vícios, solidão, medo do futuro... Eu conhecia bem essa realidade',
    story_2: 'Até que um encontro sobrenatural mudou minha história para sempre!',
    story_3: 'Hoje vivo em liberdade e propósito, e você também pode!',
    versiculo: '"Se o Filho vos libertar, verdadeiramente sereis livres" - João 8:36',
    cta_final: '🕊️ Pronto para sua libertação? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '🌧️ Passei por tempestades que pareciam não ter fim...',
    story_2: 'Mas encontrei um abrigo seguro, uma rocha firme que nunca falha!',
    story_3: 'E essa mesma segurança está disponível para você!',
    versiculo: '"O Senhor é o meu rochedo e a minha fortaleza" - Salmos 18:2',
    cta_final: '⛰️ Busque seu refúgio! Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '📱 Viciado em redes sociais, buscando aprovação... Era minha vida',
    story_2: 'Até descobrir uma aprovação que vem de um lugar muito mais alto!',
    story_3: 'Hoje sei quem sou em Cristo, e isso muda tudo!',
    versiculo: '"Somos feitura dele, criados em Cristo Jesus" - Efésios 2:10',
    cta_final: '👑 Descubra sua identidade! Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '💭 Ansiedade, depressão, pensamentos suicidas... Eu estive lá',
    story_2: 'Mas encontrei uma esperança que transformou minha mente!',
    story_3: 'Hoje ajudo outros a encontrarem essa mesma libertação',
    versiculo: '"Renovai-vos no espírito da vossa mente" - Efésios 4:23',
    cta_final: '🦋 Comece sua transformação! Me chama no direct!'
  },

  // Conflito Invisível
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conflito Invisível',
    story_1: '😔 Ansiedade, medo, insegurança... Você não está sozinho nessa batalha!',
    story_2: 'Existe uma força maior que pode te dar a vitória em todas essas lutas internas...',
    story_3: 'E essa força está disponível para você HOJE!',
    versiculo: '"Quando sou fraco, então é que sou forte" - 2 Coríntios 12:10',
    cta_final: '✨ Quer saber como vencer essas batalhas? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conflito Invisível',
    story_1: '🌪️ Tempestades emocionais, pensamentos destrutivos, dúvidas constantes...',
    story_2: 'Mas existe Alguém que pode acalmar toda tempestade da sua mente e coração!',
    story_3: 'A paz que você procura está mais perto do que imagina...',
    versiculo: '"Ele acalmou a tempestade, e as ondas se aquietaram" - Salmos 107:29',
    cta_final: '🌊 Quer conhecer essa paz? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conflito Invisível',
    story_1: '⚔️ Todo dia é uma batalha: contra pensamentos negativos, contra o passado...',
    story_2: 'Mas você não precisa lutar sozinho! Existe um Guerreiro invencível ao seu lado!',
    story_3: 'A vitória já está garantida, você só precisa aceitar a ajuda!',
    versiculo: '"O Senhor é quem peleja por vós" - Êxodo 14:14',
    cta_final: '🛡️ Pronto para vencer suas batalhas? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conflito Invisível',
    story_1: '🎭 Por trás dos sorrisos nas redes sociais, quantas lutas escondidas?',
    story_2: 'As máscaras que usamos não curam as feridas da alma...',
    story_3: 'Mas existe Alguém que pode te curar por completo!',
    versiculo: '"Ele sara os quebrantados de coração" - Salmos 147:3',
    cta_final: '🎯 Pronto para ser verdadeiramente livre? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conflito Invisível',
    story_1: '🌑 Noites em claro, pensamentos que não param, medos que paralisam...',
    story_2: 'Existe uma Luz que pode dissipar toda escuridão da sua mente!',
    story_3: 'E essa Luz quer brilhar na sua vida hoje!',
    versiculo: '"O Senhor é a minha luz e a minha salvação" - Salmos 27:1',
    cta_final: '🌅 Deixe a luz entrar! Me chama no direct!'
  },

  // Curiosidade Cristã
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '🤔 E se eu te dissesse que existe um segredo que os mais realizados e felizes conhecem?',
    story_2: 'Não é dinheiro, fama ou sucesso... É algo muito mais profundo e transformador!',
    story_3: 'Quer descobrir o que é?',
    versiculo: '"Os teus olhos viram o meu corpo ainda informe" - Salmos 139:16',
    cta_final: '👉 Desliza up para descobrir esse segredo que pode mudar sua vida!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '🔍 Descobri algo que está transformando a vida de milhares de pessoas...',
    story_2: 'É tão poderoso que tem curado relacionamentos, carreiras e até problemas financeiros!',
    story_3: 'Curiosos para saber o que é?',
    versiculo: '"Buscai primeiro o Reino de Deus" - Mateus 6:33',
    cta_final: '🎯 Me chama no direct para descobrir esse segredo!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '👀 Você já ouviu falar do método que está revolucionando vidas?',
    story_2: 'Não é autoajuda, não é psicologia... É algo muito mais profundo!',
    story_3: 'Quer saber o que milhares já descobriram?',
    versiculo: '"Coisas que olhos não viram, nem ouvidos ouviram" - 1 Coríntios 2:9',
    cta_final: '💫 Desliza up para descobrir essa revelação!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '🎁 Descobri o presente mais valioso que alguém pode receber...',
    story_2: 'Não tem preço, não pode ser comprado, mas pode mudar tudo!',
    story_3: 'Quer saber qual é?',
    versiculo: '"O dom gratuito de Deus é a vida eterna" - Romanos 6:23',
    cta_final: '🎯 Me chama no direct para receber esse presente!'
  },
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '🗝️ Encontrei a chave que abre todas as portas...',
    story_2: 'Não é networking, não é influência... É algo sobrenatural!',
    story_3: 'Quer descobrir essa chave?',
    versiculo: '"Eu sou o caminho, a verdade e a vida" - João 14:6',
    cta_final: '✨ Desliza up para conhecer essa chave!'
  },

  // Gatilho de Promessa
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '✨ PROMESSA DO DIA: Sua história não acaba aqui!',
    story_2: 'Deus tem planos maiores do que você imagina, e Ele quer realizar isso na sua vida!',
    story_3: 'Chegou sua hora de experimentar o extraordinário!',
    versiculo: '"Grandes coisas fez o Senhor por nós, e por isso estamos alegres" - Salmos 126:3',
    cta_final: '🙏 Pronto para ver milagres? Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '🌅 PROMESSA: Um novo amanhecer está chegando na sua vida!',
    story_2: 'Deus está preparando algo extraordinário para quem crê...',
    story_3: 'Você está pronto para receber?',
    versiculo: '"Eis que faço novas todas as coisas" - Apocalipse 21:5',
    cta_final: '🙌 Receba sua bênção! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '👑 DECRETO: Sua história de vitória começa agora!',
    story_2: 'O que parecia impossível vai se tornar realidade pela fé...',
    story_3: 'Chegou sua hora de conquistar!',
    versiculo: '"Tudo é possível ao que crê" - Marcos 9:23',
    cta_final: '💫 Ative sua conquista! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '🌈 PROFECIA: Uma nova estação está chegando!',
    story_2: 'Deus vai surpreender você de uma forma extraordinária...',
    story_3: 'Prepare-se para o sobrenatural!',
    versiculo: '"Esperem grandes coisas de Deus" - Jeremias 33:3',
    cta_final: '✨ Receba sua palavra! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '🔥 DECLARAÇÃO: Seu milagre está a caminho!',
    story_2: 'O impossível se torna possível quando Deus entra em cena...',
    story_3: 'É tempo de ver o sobrenatural acontecer!',
    versiculo: '"Maior é o que está em vós do que o que está no mundo" - 1 João 4:4',
    cta_final: '⚡ Ative seu milagre! Me chama no direct!'
  },

  // Curiosidade Cristã
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '🤔 E se eu te dissesse que existe um segredo milenar de felicidade plena?',
    story_2: 'Algo tão poderoso que tem transformado vidas há mais de 2000 anos...',
    story_3: 'Quer descobrir do que estou falando?',
    versiculo: '"O segredo do Senhor é para os que o temem" - Salmos 25:14',
    cta_final: '🔍 Curioso? Me chama no direct para descobrir!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '👀 Descobri algo que os influencers não te contam sobre felicidade...',
    story_2: 'Uma verdade que vai muito além de likes e seguidores...',
    story_3: 'Quer saber o que é?',
    versiculo: '"Conhecereis a verdade, e a verdade vos libertará" - João 8:32',
    cta_final: '💫 Descubra o segredo! Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '📖 Você sabia que existe um livro que previu o futuro com 100% de precisão?',
    story_2: 'E o mais incrível: ele tem uma mensagem especial para VOCÊ!',
    story_3: 'Quer descobrir o que esse livro diz sobre seu futuro?',
    versiculo: '"Sonda-me, ó Deus, e conhece o meu coração" - Salmos 139:23',
    cta_final: '🔮 Descubra seu futuro! Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '🌟 Já imaginou se existisse uma fórmula infalível para a paz interior?',
    story_2: 'Algo que funciona mesmo quando tudo parece dar errado...',
    story_3: 'Quer conhecer esse método revolucionário?',
    versiculo: '"A paz de Deus, que excede todo entendimento" - Filipenses 4:7',
    cta_final: '🕊️ Descubra a paz verdadeira! Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Curiosidade Cristã',
    story_1: '💎 Existe um tesouro escondido que o dinheiro não pode comprar...',
    story_2: 'Poucos conhecem, mas quem encontra nunca mais é o mesmo!',
    story_3: 'Quer saber onde está esse tesouro?',
    versiculo: '"O reino dos céus é semelhante a um tesouro escondido" - Mateus 13:44',
    cta_final: '✨ Encontre seu tesouro! Me chama no direct!'
  },

  // Gatilho de Promessa
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '🌈 "Antes que me chamem, eu responderei" - Isaías 65:24',
    story_2: 'Deus já preparou a resposta para tudo que você está enfrentando!',
    story_3: 'Sua bênção está a um passo de distância...',
    versiculo: '"Pedi, e dar-se-vos-á; buscai, e encontrareis" - Mateus 7:7',
    cta_final: '🙏 Receba sua bênção! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '✨ "Tudo é possível ao que crê" - Marcos 9:23',
    story_2: 'Seu milagre não depende das circunstâncias, mas da sua fé!',
    story_3: 'Está pronto para ver o impossível acontecer?',
    versiculo: '"Coisas que o olho não viu, nem ouvido ouviu" - 1 Coríntios 2:9',
    cta_final: '🌟 Ative seu milagre! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '👑 "Somos mais que vencedores" - Romanos 8:37',
    story_2: 'A vitória já está garantida em Cristo Jesus!',
    story_3: 'Chegou a hora de tomar posse da sua conquista!',
    versiculo: '"Em todas estas coisas somos mais que vencedores" - Romanos 8:37',
    cta_final: '🏆 Conquiste sua vitória! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '💫 "Grandes coisas fez o Senhor por nós" - Salmos 126:3',
    story_2: 'O que Deus tem para você vai além dos seus sonhos!',
    story_3: 'Prepare-se para uma nova dimensão de bênçãos!',
    versiculo: '"Farei coisas novas, e vós as conhecereis" - Isaías 43:19',
    cta_final: '🌈 Receba o extraordinário! Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '⚡ "O Senhor é o meu pastor" - Salmos 23:1',
    story_2: 'Com Ele, você nunca estará sozinho em sua jornada!',
    story_3: 'Sua provisão e proteção estão garantidas!',
    versiculo: '"Nada me faltará" - Salmos 23:1',
    cta_final: '🌺 Experimente o cuidado de Deus! Me chama no direct!'
  }
]