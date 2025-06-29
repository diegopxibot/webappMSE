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
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌟 "Porque dele, e por meio dele, e para ele são todas as coisas" - Rm 11:36. Uma revelação que mudou minha forma de ver a vida...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🔥 Você já parou para pensar no poder transformador de um encontro real com Jesus? Hoje vou te contar algo incrível...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '✨ "Buscai primeiro o Reino de Deus" - Mt 6:33. Descobri o verdadeiro significado dessa palavra e preciso compartilhar...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🙌 Sabe aquele momento em que Deus surpreende você de uma forma inexplicável? Prepare-se para ouvir algo poderoso...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '💎 "Em Cristo estão escondidos todos os tesouros da sabedoria" - Cl 2:3. Uma verdade que revolucionou minha caminhada...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌈 "O amor de Deus foi derramado em nossos corações" - Rm 5:5. Uma experiência que preciso compartilhar com você...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '⭐ Você já se perguntou qual é o verdadeiro propósito da sua vida? Descobri algo que mudou tudo...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🕊️ "O Espírito do Senhor está sobre mim" - Lc 4:18. Uma unção especial está sendo derramada hoje...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🎯 Existe um chamado específico para sua vida, e hoje Deus me mostrou algo poderoso sobre isso...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '💫 "Porque os meus pensamentos não são os vossos pensamentos" - Is 55:8. Uma revelação que vai mudar sua perspectiva...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🌺 Sabe quando Deus coloca algo tão forte no seu coração que você não consegue guardar só para você?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '⚡ "Eis que faço uma coisa nova" - Is 43:19. Uma palavra profética para esta geração...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '🔥 Você está pronto para uma revelação que vai transformar completamente sua vida espiritual?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '✨ "Mas recebereis poder" - At 1:8. Uma promessa que está se cumprindo de forma sobrenatural...'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Feed',
    frase: '💝 Existe um amor tão profundo que palavras não podem descrever, mas hoje vou tentar compartilhar...'
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
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🌊 No meio das tempestades da vida, descobri que o segredo não é a ausência de problemas, mas a presença constante dAquele que acalma o mar...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🌟 Cada desafio que enfrentamos é uma oportunidade de experimentar o poder sobrenatural de Deus agindo em nosso favor...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '⚔️ A batalha que você enfrenta hoje pode ser o testemunho que alguém precisa ouvir amanhã. Deus não desperdiça nenhuma lágrima...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🎯 O verdadeiro milagre não é apenas a mudança de circunstâncias, mas a transformação do nosso coração no processo...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '💫 Quando colocamos nossa confiança em Deus, até mesmo nossos maiores medos se transformam em oportunidades de crescimento...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🕊️ O Espírito Santo não é apenas um poder, mas uma Pessoa que quer ter intimidade e te guiar em cada passo da sua jornada...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🌈 Assim como o arco-íris vem depois da tempestade, Deus usa nossas lutas para revelar Suas promessas mais preciosas...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '⭐ Sua identidade não está no que você faz, mas em quem você é em Cristo. Essa revelação muda tudo...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🔥 O avivamento que tanto buscamos começa quando entendemos que somos o templo do Espírito Santo...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '💝 O amor de Deus não é apenas um sentimento, mas uma força transformadora que renova todas as áreas da nossa vida...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🌺 Às vezes Deus remove certas coisas da nossa vida não para nos punir, mas para abrir espaço para algo muito maior...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '⚡ A verdadeira autoridade espiritual não vem do que sabemos, mas de quem conhecemos intimamente...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '🎯 Deus não está procurando pessoas perfeitas, mas corações disponíveis para serem transformados por Seu amor...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '✨ Quando entendemos nossa posição em Cristo, começamos a ver milagres acontecendo naturalmente em nossa vida...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Feed',
    frase: '💫 O Reino de Deus não se manifesta apenas em poder, mas principalmente em transformação de caráter e intimidade...'
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
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🔥 Sua história não termina aqui! Me chama no direct para descobrirmos juntos o que Deus tem preparado para você!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '⚡ Deus está esperando para surpreender você! Deixa um ❤️ se esse post tocou seu coração e vamos conversar mais!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🙌 O mesmo Deus que transformou minha história quer transformar a sua! Me chama no direct para compartilharmos mais!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '✝️ Cristo quer ser o protagonista da sua história! Comenta "amém" se você está pronto para essa transformação!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '💎 Você é precioso demais para Deus! Se esse post falou com seu coração, me chama para orarmos juntos!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🕊️ O Espírito Santo quer te guiar em uma nova dimensão! Me chama no direct para descobrirmos juntos esse caminho!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🌈 Existe uma promessa especial esperando por você! Comenta "eu quero" se você está pronto para recebê-la!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '⭐ Seu destino em Deus é maior do que você imagina! Vamos descobrir juntos? Me chama no direct!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '💫 A transformação que você busca está a um passo de distância! Salva esse post e me chama para conversarmos mais!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🌺 Deus tem uma palavra específica para sua vida! Comenta "recebi" se esse post ministrou ao seu coração!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '⚡ Você está pronto para uma nova temporada espiritual? Me chama no direct para orarmos juntos por isso!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🎯 Existe um propósito especial para sua vida! Compartilha esse post se você crê nisso e vamos conversar mais!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '✨ O avivamento começa em você! Me chama no direct se você quer fazer parte desse mover de Deus!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '💝 O amor de Deus quer alcançar você de uma forma especial! Marca 3 amigos que precisam dessa palavra!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Feed',
    frase: '🙏 Vamos juntos nessa jornada de fé? Me chama no direct para compartilharmos experiências e crescermos em Cristo!'
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
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎵 Remix gospel + Uma revelação que vai impactar sua fé... #DeusNoControle'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🌅 Transição celestial: O momento em que tudo mudou... #EncontroCromDeus'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '⚡ Trend do momento + Verdade bíblica que ninguém está falando... #VerdadesBiblicas'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🔥 Challenge cristão: 3 versículos que mudaram minha vida... #BibliaViva'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '💎 Transition: Das trevas à luz em Cristo... #LuzDoCristo'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎵 Som tendência + Revelação profética para essa geração... #GeracaoEscolhida'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '✨ Transição suave: O poder da oração transformadora... #OracaoPoderosa'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🌊 POV: Quando você entende o amor incondicional do Pai... #AmorDoPai'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '💫 Trend espiritual: Como encontrar paz em meio ao caos... #PazDeDeus'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🔥 Challenge aceito: 5 dias de intimidade com Deus... #IntimidadeComDeus'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🎬 Transição poderosa: Da religião ao relacionamento... #RelacionamentoComDeus'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '⚡ Som viral + Testemunho que vai impactar sua fé... #TestemunhoReal'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '🌟 POV: O momento em que você descobre seu propósito... #PropositoDeDeus'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '✝️ Trend gospel: Como vencer suas batalhas espirituais... #VitoriaEmCristo'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Reels',
    frase: '💎 Transição celestial: O poder do Espírito Santo em ação... #UnçãoDeDeus'
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
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🌊 Transição água: Do vale à vitória em Cristo... #VitoriaEmCristo'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🎵 Som tendência + Testemunho impactante de libertação... #LibertosEmCristo'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '💫 POV: Quando você entende o amor incondicional de Deus... #AmorDeDeus'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🔥 Trend transformation: Da religião ao relacionamento com Deus... #RelacionamentoComDeus'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '⚡ Challenge aceito: 7 dias de gratidão + Transições poderosas... #GratidaoADeus'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🎵 Música viral + Revelação sobre identidade em Cristo... #IdentidadeEmCristo'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '✨ Transição celestial: Como encontrei cura para ansiedade em Deus... #CuraEmocional'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🌟 POV: O momento em que descobri meu chamado profético... #ChamadaDeDeus'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '💫 Trend espiritual: Como desenvolver intimidade com Deus... #IntimidadeComDeus'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🔥 Story time: O poder da oração que transforma... #OracaoPoderosa'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '⚡ Som do momento + Testemunho de cura e libertação... #CuraELibertacao'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🎬 Transição impactante: Como vencer batalhas espirituais... #GuerreirosDeFe'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '💎 POV: Quando você descobre seu valor em Cristo... #ValorEmCristo'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '✝️ Trend gospel: O poder do louvor na batalha espiritual... #LouvorEAdoracao'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Reels',
    frase: '🙌 Transição poderosa: Como encontrar paz em meio ao caos... #PazSobrenatural'
  },

  // Encerramento - Reels
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🎵 Quer mais conteúdo assim? Me segue pra não perder os próximos! #CristãosNoInstagram'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '✨ Salva esse vídeo e marca 3 amigos que precisam dessa palavra! #CompartilheJesus'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💫 Me conta nos comentários se esse vídeo tocou seu coração! #TestemunhosDeFé'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🔥 Deixa seu amém nos comentários e ativa o sininho! #CristãosUnidos'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🙏 Quer oração? Me chama no direct! #ComunidadeCristã'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '⚡ Compartilha nos stories se esse conteúdo edificou você! #EdificaçãoEmCristo'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🌟 Me segue para mais conteúdos que edificam sua fé! #ConteúdoCristão'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💎 Deixa seu like e salva para assistir depois! #CristãosNoInsta'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '✝️ Comenta um 🙏 se você crê nessa palavra! #PalavraDeDeus'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💫 Vem comigo nessa jornada de fé! Me segue para mais! #JornadaDeFé'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🎵 Quer mais revelações como essa? Ativa o sininho! #RevelacaoDivina'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '✨ Compartilha com alguém que precisa dessa palavra hoje! #PalavraProfética'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🌊 Me conta nos comentários sua experiência com Deus! #ExperienciaComDeus'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '⚡ Salva esse vídeo para os momentos difíceis! #ForçaNaSenhor'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🔥 Vem fazer parte dessa família! Me segue para mais! #FamiliaCrista'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💎 Marca aquele amigo que precisa dessa mensagem! #EvangelhoTransforma'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🙌 Deixa seu testemunho nos comentários! #TestemunhoVivo'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '✝️ Quer mais conteúdo que edifica? Me segue! #ConteudoQueCura'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '💫 Compartilha essa palavra e abençoa mais vidas! #EspalheABencao'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Reels',
    frase: '🌟 Vem crescer na fé comigo! Ativa as notificações! #CrescimentoEspiritual'
  },

  // Abertura - Direct
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Deus colocou você no meu coração hoje. Posso compartilhar algo especial com você?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Vi que você tem buscado crescimento espiritual. Posso te ajudar nessa jornada?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Ei! Senti no coração de compartilhar uma palavra que pode transformar seu dia. Posso?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Percebi que você tem interesse em conteúdo cristão. Que tal conversarmos sobre isso?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Vi seu comentário e senti que Deus tem uma palavra especial para você hoje!'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Deus tem me usado para abençoar vidas. Posso compartilhar algo com você?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Ei! Você já teve um encontro real com Jesus? Tenho algo especial para compartilhar!'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Sinto que Deus quer te usar poderosamente. Podemos conversar sobre isso?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Vi que você tem buscado direção espiritual. Posso te ajudar nesse processo?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Ei! Deus tem um propósito incrível para sua vida. Quer descobrir mais sobre isso?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Senti no espírito que você precisa de uma palavra de encorajamento hoje. Posso compartilhar?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Vi seu perfil e percebi que temos a mesma paixão por Jesus. Vamos conversar?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Ei! Deus tem me dado palavras proféticas para esta geração. Posso compartilhar com você?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Você está pronto para uma nova dimensão espiritual? Tenho algo especial para te contar!'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Sinto que você está em um momento de transição. Posso te ajudar nesse processo?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Ei! Deus tem me mostrado como ajudar pessoas a encontrarem seu propósito. Quer saber mais?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Vi que você tem interesse em crescimento espiritual. Posso compartilhar algo que mudou minha vida?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Oi! Senti que você precisa de uma palavra de direção hoje. Posso compartilhar o que Deus me mostrou?'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Ei! Você está pronto para descobrir seu chamado profético? Tenho algo especial para compartilhar!'
  },
  {
    tipo_frase: 'Abertura',
    aplicacao: 'Direct',
    frase: 'Olá! Deus tem me usado para trazer cura e libertação. Posso ministrar em sua vida?'
  },

  // Desenvolvimento - Direct
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Sabe, tenho visto Deus fazer milagres incríveis na vida de pessoas que, assim como você, estão abertas para ouvir Sua voz...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Deus tem me ensinado sobre o poder da transformação através do Seu amor, e sinto que você está em um momento especial para essa revelação...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Assim como Jesus encontrou Nicodemos à noite, às vezes Deus usa pessoas para trazer uma palavra que pode mudar completamente nossa história...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Tenho experimentado um mover sobrenatural de Deus, onde Ele tem revelado segredos e estratégias para vencer batalhas espirituais...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'O Espírito Santo tem me mostrado que existem pessoas precisando de direção espiritual, e sinto que você é uma delas...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Deus tem levantado uma geração que não tem medo de viver o sobrenatural, e vejo em você esse potencial para algo extraordinário...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Assim como Paulo ministrou a Timóteo, sinto que Deus quer usar minha vida para te ajudar a descobrir e desenvolver seus dons...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Tenho recebido palavras proféticas poderosas, e uma delas tem tudo a ver com o momento que você está vivendo...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'O Senhor tem me dado estratégias específicas para ajudar pessoas a encontrarem seu propósito, e sinto que isso é para você...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Deus está levantando pessoas com uma unção especial para esta geração, e vejo claramente esse chamado em sua vida...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Tenho visto o poder da mentoria espiritual transformar vidas, e sinto que Deus quer usar isso para te levar a um novo nível...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'O Espírito Santo tem me dado discernimento sobre situações específicas, e sinto que posso te ajudar nesse momento de decisão...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Assim como Ananias foi usado para ministrar a Paulo, sinto que Deus quer me usar para trazer uma palavra de direção para você...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Deus tem me capacitado com uma unção especial para quebrar jugos e trazer libertação, e sinto que isso é exatamente o que você precisa...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Tenho recebido revelações profundas sobre cura interior e restauração, e percebo que você está pronto para esse processo...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'O Senhor tem me mostrado como identificar potencial profético nas pessoas, e vejo claramente esse dom em você...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Assim como Elias treinou Eliseu, sinto que Deus quer me usar para te ajudar a desenvolver sua autoridade espiritual...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Tenho uma palavra específica sobre destino e propósito, e sinto fortemente que ela vai confirmar algo em seu coração...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'Deus tem me dado chaves para desbloquear o potencial espiritual das pessoas, e sinto que você está pronto para esse despertar...'
  },
  {
    tipo_frase: 'Desenvolvimento',
    aplicacao: 'Direct',
    frase: 'O Espírito Santo tem me mostrado como ajudar pessoas a desenvolverem intimidade com Deus, e sinto que você está buscando isso...'
  },

  // Encerramento - Direct
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso orar por você? Sinto que Deus quer fazer algo especial em sua vida hoje!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Se você quiser, podemos conversar mais sobre isso. Estou aqui para te ajudar nessa jornada!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Que tal marcarmos um horário para orarmos juntos? Deus tem algo especial para você!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso compartilhar mais sobre como Jesus transformou minha vida? Tenho certeza que vai te abençoar!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Se você estiver aberto, gostaria de ministrar uma palavra específica que recebi para sua vida!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Vamos juntos descobrir o que Deus tem preparado para você? Estou aqui para te apoiar!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Que tal começarmos essa jornada de transformação juntos? Deus tem algo especial para você!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso te enviar alguns versículos que vão fortalecer sua fé nesse momento?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Se você permitir, gostaria de compartilhar mais sobre como encontrar paz em meio às lutas!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Vamos orar juntos por essa situação? Deus quer te dar uma nova perspectiva!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso te ajudar a desenvolver sua vida espiritual? Tenho recursos especiais para compartilhar!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Que tal começarmos um estudo bíblico personalizado para seu momento atual?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso te mostrar como desenvolver uma intimidade mais profunda com Deus?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Vamos descobrir juntos seu chamado profético? Tenho algumas revelações para compartilhar!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Se você quiser, posso te guiar em um processo de cura interior e libertação!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Que tal marcarmos um momento para discernir juntos a direção de Deus para sua vida?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Posso te apresentar algumas estratégias espirituais que têm transformado vidas?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Vamos trabalhar juntos no desenvolvimento dos seus dons espirituais?'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Se você permitir, posso te mostrar como vencer suas batalhas espirituais!'
  },
  {
    tipo_frase: 'Encerramento',
    aplicacao: 'Direct',
    frase: 'Que tal começarmos uma mentoria espiritual personalizada para seu crescimento?'
  }
]

// Templates para Stories
export const storyTemplates: StoryTemplate[] = [
  // Urgencia Oculta
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Urgencia Oculta',
    story_1: '🤔 Você já sentiu que algo está faltando na sua vida, mas não sabe exatamente o quê?',
    story_2: '💭 Muitas pessoas vivem uma vida aparentemente perfeita, mas sentem um vazio inexplicável...',
    story_3: '✨ E se eu te dissesse que existe uma resposta para esse vazio que você precisa conhecer HOJE?',
    versiculo: '"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito..." - João 3:16',
    cta_final: '👆 Me chama no direct AGORA para descobrir mais sobre esse amor que preenche todo vazio!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Urgencia Oculta',
    story_1: '⏰ Sabia que cada minuto que passa é uma oportunidade de transformação que você pode estar perdendo?',
    story_2: '💫 Muitos estão descobrindo um segredo que está mudando suas vidas completamente...',
    story_3: '🎯 Não deixe para depois o que pode transformar sua vida HOJE!',
    versiculo: '"Eis aqui agora o tempo aceitável, eis aqui agora o dia da salvação" - 2 Coríntios 6:2',
    cta_final: '🔥 Clica aqui AGORA para não perder essa oportunidade única!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Urgencia Oculta',
    story_1: '⚡ ÚLTIMA CHANCE: Você está pronto para uma transformação real?',
    story_2: '🌟 Centenas de pessoas já deram esse passo e suas vidas nunca mais foram as mesmas...',
    story_3: '✨ Não deixe essa oportunidade passar. O momento é AGORA!',
    versiculo: '"Buscai ao Senhor enquanto se pode achar..." - Isaías 55:6',
    cta_final: '💫 Me chama no direct AGORA para não perder essa oportunidade única!'
  },

  // Testemunho Silencioso
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '📱 [Stories mostrando momentos do dia-a-dia com Jesus]',
    story_2: '✨ Sabe aquela paz inexplicável mesmo nos dias difíceis?',
    story_3: '💫 É isso que acontece quando você descobre o segredo...',
    versiculo: '"A paz vos deixo, a minha paz vos dou..." - João 14:27',
    cta_final: '🤍 Quer saber mais sobre essa paz? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '📖 [Mostrando momentos de devocional]',
    story_2: '🌅 Cada manhã é uma nova oportunidade de experimentar algo extraordinário...',
    story_3: '✨ E isso tem transformado completamente minha rotina...',
    versiculo: '"As misericórdias do Senhor se renovam a cada manhã" - Lamentações 3:23',
    cta_final: '💫 Quer descobrir como ter essa mesma experiência? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Testemunho Silencioso',
    story_1: '🙏 [Mostrando resultados da vida com Cristo]',
    story_2: '✨ Não é sobre religião, é sobre relacionamento...',
    story_3: '💫 E isso pode ser real na sua vida também!',
    versiculo: '"Provai e vede que o Senhor é bom" - Salmos 34:8',
    cta_final: '💖 Quer experimentar essa mesma transformação? Me chama!'
  },

  // Conflito Invisivel
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Conflito Invisivel',
    story_1: '😔 Você já se sentiu lutando contra algo que ninguém mais consegue ver?',
    story_2: '💭 Aquela batalha silenciosa que acontece dentro de você...',
    story_3: '✨ E se eu te dissesse que existe uma saída?',
    versiculo: '"Maior é o que está em vós do que o que está no mundo" - 1 João 4:4',
    cta_final: '💪 Vem descobrir como vencer essas batalhas invisíveis!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conflito Invisivel',
    story_1: '🌪️ Em meio ao caos interno, parece que ninguém entende sua luta...',
    story_2: '💫 Mas existe Alguém que conhece cada detalhe do seu coração...',
    story_3: '🔑 E Ele tem a chave para sua libertação!',
    versiculo: '"Se o Filho vos libertar, verdadeiramente sereis livres" - João 8:36',
    cta_final: '🗝️ Quer conhecer o caminho para a verdadeira liberdade? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Conflito Invisivel',
    story_1: '⚔️ Suas batalhas internas não precisam te definir...',
    story_2: '✨ Existe um poder maior que pode te dar a vitória!',
    story_3: '💫 Chegou a hora de vencer esses conflitos invisíveis!',
    versiculo: '"Em todas estas coisas somos mais que vencedores" - Romanos 8:37',
    cta_final: '🏆 Pronto para sua vitória? Me chama no direct!'
  },

  // Curiosidade Crista
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Curiosidade Crista',
    story_1: '🤔 Você sabia que existe um segredo milenar que tem transformado vidas até hoje?',
    story_2: '📖 Descobri algo nas escrituras que mudou completamente minha perspectiva...',
    story_3: '✨ Quer saber o que é?',
    versiculo: '"Coisas que olhos não viram, nem ouvidos ouviram..." - 1 Coríntios 2:9',
    cta_final: '🔍 Curioso? Me chama no direct para descobrir!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Curiosidade Crista',
    story_1: '📚 Existe um livro que contém códigos de vida que poucos conhecem...',
    story_2: '🗝️ E quando você descobre esses segredos, tudo muda!',
    story_3: '💫 Quer saber mais?',
    versiculo: '"Conhecereis a verdade, e a verdade vos libertará" - João 8:32',
    cta_final: '🤔 Intrigado? Vem descobrir esses segredos!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Curiosidade Crista',
    story_1: '🌟 O que aconteceria se você descobrisse seu verdadeiro propósito?',
    story_2: '✨ E se eu te dissesse que isso está mais perto do que você imagina?',
    story_3: '💫 Quer descobrir?',
    versiculo: '"Clama a mim, e responder-te-ei..." - Jeremias 33:3',
    cta_final: '🔍 Curioso para saber mais? Me chama no direct!'
  },

  // Gatilho de Promessa
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '✨ Você está a um passo de uma promessa que vai mudar sua história...',
    story_2: '📖 Deus tem uma palavra específica para sua vida hoje!',
    story_3: '💫 E ela pode transformar completamente seu futuro...',
    versiculo: '"Porque eu bem sei os pensamentos que tenho a vosso respeito..." - Jeremias 29:11',
    cta_final: '🎯 Quer receber essa palavra? Me chama no direct!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '🌱 Existe uma promessa esperando para florescer na sua vida...',
    story_2: '💫 Algo que Deus preparou especialmente para você!',
    story_3: '✨ E o momento de receber é agora!',
    versiculo: '"Fiel é o que prometeu" - Hebreus 10:23',
    cta_final: '🙌 Pronto para receber sua promessa? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Gatilho de Promessa',
    story_1: '🎁 Deus separou uma promessa especial para você...',
    story_2: '✨ Algo que vai superar todas as suas expectativas!',
    story_3: '💫 Chegou a hora de receber!',
    versiculo: '"Tudo o que pedirdes em oração, crendo, recebereis" - Mateus 21:22',
    cta_final: '🔑 Quer desbloquear sua promessa? Me chama no direct!'
  },

  // Impacto Imediato
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Impacto Imediato',
    story_1: '⚡ AGORA: Algo está prestes a mudar na sua vida!',
    story_2: '💥 Uma revelação que vai impactar você imediatamente...',
    story_3: '🔥 Prepare-se para uma transformação instantânea!',
    versiculo: '"Eis que faço uma coisa nova, que está saindo à luz" - Isaías 43:19',
    cta_final: '⚡ Pronto para uma mudança AGORA? Me chama!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Impacto Imediato',
    story_1: '💥 O que você faria se sua vida mudasse nos próximos 5 minutos?',
    story_2: '⚡ Uma decisão pode transformar tudo AGORA!',
    story_3: '🔥 Não espere mais nem um segundo!',
    versiculo: '"Hoje, se ouvirdes a sua voz, não endureçais os vossos corações" - Hebreus 3:15',
    cta_final: '⚡ Quer essa transformação AGORA? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Impacto Imediato',
    story_1: '💥 ÚLTIMA CHANCE: Sua vida pode mudar agora!',
    story_2: '⚡ Não deixe essa oportunidade passar!',
    story_3: '🔥 O momento é ESTE!',
    versiculo: '"Este é o dia que o Senhor fez" - Salmos 118:24',
    cta_final: '⚡ Pronto para mudar AGORA? Me chama no direct!'
  },

  // Alvo Profetico
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Alvo Profetico',
    story_1: '👁️ Deus me mostrou algo específico sobre essa geração...',
    story_2: '🎯 Uma palavra profética que está se cumprindo AGORA!',
    story_3: '✨ E você faz parte desse mover!',
    versiculo: '"Derramarei do meu Espírito sobre toda a carne..." - Joel 2:28',
    cta_final: '🔮 Quer saber qual é seu papel nesse tempo profético? Me chama!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Alvo Profetico',
    story_1: '🎯 Existe um propósito profético para sua vida nesta geração...',
    story_2: '✨ Algo que Deus planejou antes mesmo do seu nascimento!',
    story_3: '💫 E chegou a hora de você descobrir!',
    versiculo: '"Antes que te formasse no ventre te conheci..." - Jeremias 1:5',
    cta_final: '🔮 Quer descobrir seu chamado profético? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Alvo Profetico',
    story_1: '🎯 Você foi escolhido para um tempo como este!',
    story_2: '✨ Uma geração profética está se levantando...',
    story_3: '💫 E você tem um papel fundamental!',
    versiculo: '"Para este momento é que você chegou a esta posição" - Ester 4:14',
    cta_final: '🔮 Pronto para descobrir seu propósito profético? Me chama!'
  },

  // Revelação Progressiva
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Revelacao Progressiva',
    story_1: '📖 Descobri algo nas escrituras que mudou minha vida...',
    story_2: '✨ A cada dia Deus tem revelado mais sobre isso...',
    story_3: '💫 E hoje recebi a parte mais incrível dessa revelação!',
    versiculo: '"Mas o caminho dos justos é como a luz da aurora, que vai brilhando mais e mais" - Provérbios 4:18',
    cta_final: '🌅 Quer descobrir essa revelação progressiva? Me chama!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Revelacao Progressiva',
    story_1: '🔍 Cada dia tenho descoberto mais sobre esse mistério...',
    story_2: '📚 É como um tesouro que quanto mais você cava, mais encontra...',
    story_3: '💎 E hoje encontrei a peça que faltava!',
    versiculo: '"Ele revela o profundo e o escondido" - Daniel 2:22',
    cta_final: '✨ Quer conhecer essa revelação completa? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Revelacao Progressiva',
    story_1: '🌅 A cada dia Deus revela mais dessa verdade...',
    story_2: '🔑 E hoje recebi a chave final desse mistério!',
    story_3: '💫 Chegou a hora de compartilhar tudo!',
    versiculo: '"Mas, como está escrito: As coisas que o olho não viu... Deus preparou" - 1 Coríntios 2:9',
    cta_final: '🎯 Pronto para receber essa revelação completa? Me chama!'
  },

  // Conexão Divina
  {
    tipo_frase: 'Abertura',
    engenharia_social: 'Conexao Divina',
    story_1: '🤝 Você já sentiu que alguns encontros não são por acaso?',
    story_2: '✨ Deus tem me mostrado algo especial sobre conexões divinas...',
    story_3: '💫 E sinto que nosso encontro aqui não é coincidência!',
    versiculo: '"Os passos do homem são dirigidos pelo Senhor" - Salmos 37:23',
    cta_final: '🌟 Quer descobrir o propósito desse encontro? Me chama!'
  },
  {
    tipo_frase: 'Desenvolvimento',
    engenharia_social: 'Conexao Divina',
    story_1: '🎯 Deus tem um propósito em cada conexão que Ele estabelece...',
    story_2: '✨ E hoje Ele me mostrou algo específico sobre você...',
    story_3: '💫 Uma palavra que pode mudar sua história!',
    versiculo: '"Não foi você que me escolheu, mas eu que escolhi você" - João 15:16',
    cta_final: '🤝 Quer saber qual palavra Deus tem para você? Me chama!'
  },
  {
    tipo_frase: 'Encerramento',
    engenharia_social: 'Conexao Divina',
    story_1: '🌟 Não existem coincidências no Reino de Deus...',
    story_2: '✨ Cada encontro tem um propósito divino...',
    story_3: '💫 E esse momento foi preparado especialmente para você!',
    versiculo: '"Porque somos feitura sua, criados em Cristo Jesus para boas obras" - Efésios 2:10',
    cta_final: '🎯 Pronto para descobrir seu propósito nessa conexão? Me chama!'
  }
]