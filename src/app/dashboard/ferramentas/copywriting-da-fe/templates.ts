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
    frase: '🌅 "Cada manha as suas misericordias se renovam" - Lm 3:23. Hoje quero compartilhar como essa verdade mudou minha perspectiva...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '⚡ Voce ja se perguntou por que algumas pessoas parecem ter uma paz inabalavel? Descobri um segredo que preciso compartilhar...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🎯 "Os que esperam no Senhor renovarao as suas forcas" - Is 40:31. Essa promessa tem um poder que vai alem das palavras...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '💫 Existe uma forca capaz de transformar qualquer historia. E hoje vou te contar como ela mudou a minha vida...'
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
  // Urgencia Oculta
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgencia Oculta',
    story_1: 'Voce sabia que existe um segredo que muitos cristaos desconhecem sobre oracao?',
    story_2: 'Nos ultimos meses, tenho visto muitas vidas sendo transformadas ao descobrirem isso...',
    story_3: 'E o mais incrivel: esta disponivel para todos que buscam!',
    versiculo: 'Mateus 7:7 - "Pedi, e dar-se-vos-a; buscai e encontrareis; batei, e abrir-se-vos-a"',
    cta_final: 'Quer descobrir? Me manda um 🙏 no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Urgencia Oculta',
    story_1: 'Acabei de descobrir algo que mudou completamente minha vida espiritual...',
    story_2: 'E percebi que muitas pessoas estao perdendo isso todos os dias sem saber',
    story_3: 'O tempo esta passando... Voce nao pode perder essa oportunidade!',
    versiculo: '2 Corintios 6:2 - "Eis aqui agora o tempo aceitavel, eis aqui agora o dia da salvacao"',
    cta_final: 'Chama no direct agora mesmo! ⚡'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Urgencia Oculta',
    story_1: 'Ultima chance! Voce nao vai querer perder isso...',
    story_2: 'Ja ajudei dezenas de pessoas com esse conhecimento',
    story_3: 'Mas so vou poder compartilhar mais um pouco...',
    versiculo: 'Isaias 55:6 - "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto esta perto"',
    cta_final: 'Me chama AGORA no direct! 🔥'
  },

  // Testemunho Silencioso
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Testemunho Silencioso',
    story_1: 'Nunca imaginei que algo tao simples pudesse mudar tanto minha vida...',
    story_2: 'Comecei a praticar isso ha 3 meses...',
    story_3: 'E os resultados tem sido incriveis!',
    versiculo: 'Salmos 40:3 - "Pos um novo cantico na minha boca, um hino de louvor ao nosso Deus"',
    cta_final: 'Quer saber como? Me chama no direct! 🙌'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: 'Antes eu lutava muito com ansiedade e medos...',
    story_2: 'Ate que descobri um segredo na Palavra que mudou tudo',
    story_3: 'Hoje posso dizer que encontrei a verdadeira paz!',
    versiculo: 'Filipenses 4:7 - "E a paz de Deus... guardara os vossos coracoes e os vossos pensamentos em Cristo Jesus"',
    cta_final: 'Quer conhecer esse segredo? Me chama! 🕊️'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: 'Minha vida mudou completamente depois que aprendi isso...',
    story_2: 'E o melhor: qualquer pessoa pode experimentar o mesmo!',
    story_3: 'Deus tem algo especial preparado para voce',
    versiculo: 'Jeremias 29:11 - "Porque eu bem sei os pensamentos que tenho a vosso respeito..."',
    cta_final: 'Vem descobrir o que Deus tem pra voce! 💫'
  }
]