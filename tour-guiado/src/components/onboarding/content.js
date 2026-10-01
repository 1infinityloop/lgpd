// Conteúdo da apresentação e do tour guiado.
// Textos aprovados no handoff (Figma › Responsividade › "Apresentação e tour guiado").

/** Slides do carrossel de apresentação (primeiro acesso). */
export const SLIDES = [
  {
    id: 'boas-vindas',
    stage: '#efe3ff',
    eyebrow: 'Boas-vindas', icon: 'bi-stars', eyebrowColor: '#7620c1', eyebrowBg: '#f7f0ff',
    title: 'Boas-vindas ao LGPD Play',
    text: 'Aprenda a proteger dados pessoais com lições curtas, desafios e recompensas. Veja em menos de um minuto o que você vai encontrar.',
  },
  {
    id: 'licoes',
    stage: '#d4f4e6',
    eyebrow: 'Lições', icon: 'bi-journal-text', eyebrowColor: '#047b56', eyebrowBg: '#f0fdf7',
    title: 'Lições curtas, no seu ritmo',
    text: 'Cada unidade reúne podcast, vídeo, quiz, artigo e simulação de poucos minutos. As etiquetas mostram o objetivo: aprender, fixar, aprofundar ou aplicar.',
  },
  {
    id: 'ranking',
    stage: '#dcebfe',
    eyebrow: 'Ranking', icon: 'bi-trophy', eyebrowColor: '#1559ea', eyebrowBg: '#f2f7ff',
    title: 'Suba no ranking',
    text: 'Cada lição concluída vale XP. Dispute a liga semanal com pessoas do seu nível — o placar reseta toda semana, então sempre há uma nova chance.',
  },
  {
    id: 'conquistas',
    stage: '#ffecd2',
    eyebrow: 'Conquistas', icon: 'bi-patch-check', eyebrowColor: '#e4570c', eyebrowBg: '#fff6eb',
    title: 'Medalhas e badges',
    text: 'Medalhas são para todos e ficam com você para sempre. Badges são exclusivas — só uma pessoa detém cada uma — e viram molduras para o seu perfil.',
  },
  {
    id: 'lex',
    stage: '#0c8f66', dark: true,
    eyebrow: 'Assistente', icon: 'bi-chat-dots', eyebrowColor: '#047b56', eyebrowBg: '#f0fdf7',
    title: 'Tire dúvidas com a Lex',
    text: 'A Lex é a assistente do LGPD Play. Pergunte sobre a lei ou sobre situações do dia a dia, a qualquer momento e em qualquer tela.',
  },
  {
    id: 'tour',
    stage: '#e3f6ee',
    eyebrow: 'Tour guiado', icon: 'bi-signpost-split', eyebrowColor: '#047b56', eyebrowBg: '#f0fdf7',
    title: 'Quer um tour pela dashboard?',
    text: 'Em 6 passos rápidos mostramos onde fica cada coisa. Você pode pular a qualquer momento — e refazer depois pelo menu do seu perfil.',
  },
];

/**
 * Passos do tour guiado. `target` é um seletor CSS; a dashboard marca os alvos com data-tour.
 * - fixed: alvo fixo na tela (não rola a página até ele).
 * - fallback: seletor usado quando o alvo está oculto (ex.: links da barra no celular).
 * - radius: raio do recorte do destaque, igual ao do card destacado.
 */
export const TOUR_STEPS = [
  { id: 'nav', target: '[data-tour="nav"]', fallback: '[data-tour="navbar"]', fixed: true, radius: 8, icon: 'bi-compass',
    title: 'Menu principal', text: 'Navegue entre Início, Unidades, Desafio Semanal, Ranking e Amigos. Seu XP e suas vidas ficam sempre à direita.' },
  { id: 'licoes', target: '[data-tour="licoes"]', radius: 20, icon: 'bi-journal-text',
    title: 'Suas lições', text: 'Cada unidade reúne podcast, vídeo, quiz, artigo e simulação. As etiquetas mostram o objetivo de cada lição. Comece pela que está em destaque.' },
  { id: 'ranking', target: '[data-tour="ranking"]', radius: 16, icon: 'bi-trophy',
    title: 'Ranking semanal', text: 'Cada lição concluída vale XP. Dispute a liga da semana com pessoas do seu nível — o placar reseta toda semana.' },
  { id: 'conquistas', target: '[data-tour="conquistas"]', radius: 16, icon: 'bi-patch-check',
    title: 'Medalhas e badges', text: 'Medalhas ficam com você para sempre. Badges são exclusivas — só uma pessoa detém cada uma — e viram molduras para o seu perfil.' },
  { id: 'lex', target: '[data-tour="lex"]', fixed: true, radius: 24, icon: 'bi-chat-dots',
    title: 'Converse com a Lex', text: 'Ficou com dúvida sobre a LGPD? A Lex responde a qualquer momento, sem sair da página. Você também pode anexar um documento para consulta.' },
  { id: 'perfil', target: '[data-tour="perfilmenu"]', fixed: true, radius: 16, icon: 'bi-person-gear',
    title: 'Seu perfil e o tour', text: 'Aqui ficam as configurações do seu perfil e as referências. A apresentação e este tour também ficam sempre neste menu.' },
];

/** Textos dos avisos (toasts). */
export const MESSAGES = {
  welcomeClosed: 'Você pode rever a apresentação e fazer o tour pelo menu do seu perfil.',
  tourPaused: (step, total) => `Tour pausado no passo ${step} de ${total}.`,
  tourSkipped: 'Tour encerrado. Ele fica disponível no menu do seu perfil.',
  tourDone: 'Tour concluído! Você pode refazê-lo pelo menu do seu perfil.',
};
