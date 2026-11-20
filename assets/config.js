/* =====================================================================
   CONFIGURAÇÃO — HUGO MOREIRA FILMS (SAÚDE) — edite SOMENTE este arquivo (e o topo do Code.gs)
   ---------------------------------------------------------------------
   Tudo que está vazio ("") precisa ser preenchido.
   Enquanto estiver vazio, a parte correspondente fica DESLIGADA:
     - metaPixelId vazio      → Pixel não carrega
     - appsScriptUrl vazio    → nada é enviado (o payload aparece no console)
     - whatsapp vazio         → botões de WhatsApp ficam ocultos
     - logoUrl vazio          → aparece um monograma com as iniciais do nome
   ===================================================================== */

window.APP_CONFIG = {

  /* ---------- Dados do cliente ---------- */
  negocio: {
    nome: "Hugo Moreira Films",
    responsavel: "Hugo",
    whatsapp: "61991345429",   // WhatsApp do Hugo (o mesmo da página dele)
    logoUrl: "",               // sem logo por enquanto: aparece só o nome (sem o monograma "HM")
    monograma: false,
    logoAltura: 46,
    nomeNaLogo: false,
    descricao: ""
  },

  apresentacao: { titulo: "", texto: "", fotos: [], fotosNoFormulario: false },

  ensaiosAtivos: ["saude"],

  /* ---------- Integrações ---------- */
  integracoes: {
    appsScriptUrl: "",   // não usado nesta página (só WhatsApp)
    metaPixelId: "540801156825648"      // só os números do Pixel — PREENCHER antes de rodar o anúncio
  },

  pixel: { eventoCadastro: "CadastroIniciado" },

  /* ---------- Cores e fontes: as mesmas do site do Hugo (azul-marinho, gelo e céu) ---------- */
  tema: {
    fundoCentro: "#18225A",   // azul-marinho (centro)
    fundoBordas: "#10173B",   // azul-marinho escuro (bordas)
    texto: "#EEF3FF",
    destaque: "#C1DEF4",      // azul-céu: subtítulos e detalhes
    botao1: "#EDF0F7",        // botão gelo
    botao2: "#C1DEF4",
    textoBotao: "#10173B",
    erro: "#FF9A9A",
    fonteTitulos: "Lexend",
    fonteTexto: "Figtree",
    titulosMaiusculos: false,
    brilhoBotao: true,
    blocos: "#1C2C60",
    linhas: "rgba(193,222,244,.22)",
    claro: false
  },

  home: { ativa: false },

  /* ---------- Página (index.html): abertura, números, pilares, passos, incluso, sobre, perguntas, WhatsApp ---------- */
  venda: {
    revisao: false,
    tituloAba: "Hugo Moreira Films · Vídeos para médicos",
    botao: "Solicitar orçamento",
    botaoFlutuante: "Solicitar orçamento",
    microtexto: "Pagamento só na entrega · Agenda limitada · Resposta pelo WhatsApp",
    mensagemWhatsapp: "Olá, Hugo! Vi a página de vídeos para médicos e quero solicitar um orçamento de gravação.",
    numeros: [
      { valor: "+10.000", rotulo: "vídeos entregues" },
      { valor: "7 dias", rotulo: "úteis para entrega" },
      { valor: "1min30", rotulo: "por vídeo, vertical" }
    ],
    passos: {
      selo: "Como funciona",
      titulo: "Você só precisa aparecer. O resto é com a gente.",
      itens: [
        { k: "1", t: "Conversa", d: "Entendo sua especialidade, seu público e a mensagem que você quer passar." },
        { k: "2", t: "Preparação", d: "Você recebe o acesso à plataforma e definimos os ganchos de cada vídeo." },
        { k: "3", t: "Gravação", d: "No seu consultório, clínica ou no estúdio, com direção do começo ao fim." },
        { k: "4", t: "Entrega", d: "Em 7 dias úteis: vídeos de até 1min30 e fotos de capa, prontos para postar." }
      ]
    },
    fotografa: {
      foto: "assets/fotos/hugo.jpg?v=202611190700",
      selo: "Quem vai gravar com você",
      titulo: "Prazer, meu nome é Hugo!",
      texto: "Brasiliense, formado em Publicidade e Propaganda, com mais de 10.000 vídeos entregues desde 2017. Câmera na mão e vontade de criar."
    },
    faq: {
      selo: "Dúvidas",
      titulo: "Perguntas frequentes",
      itens: [
        { p: "Nunca gravei vídeo. Vou conseguir?", r: "Vai, sim. Você tem direção durante toda a gravação e acesso à plataforma para se preparar." },
        { p: "Quando eu pago?", r: "Só na entrega do material, depois que você recebe os vídeos prontos." },
        { p: "Onde acontece a gravação?", r: "No seu consultório ou clínica, ou no meu estúdio no Le Office." }
      ]
    },
    fim: { titulo: "Vamos gravar o seu conteúdo?", texto: "Me chama no WhatsApp, conta sua especialidade e eu monto o orçamento do seu jeito. Você só paga na entrega." }
  },

  formularios: {
    saude: { nome: "Saúde", boasVindas: {
      titulo: "Vídeos profissionais para médicos",
      assinatura: "Seu paciente confia em você antes da consulta.",
      fotoCentral: { src: "assets/fotos/abertura-poster.jpg?v=202611190700", foco: "50% 25%" },
      videoCentral: "assets/video/abertura.mp4?v=202611190700"
    } }
  }
};
