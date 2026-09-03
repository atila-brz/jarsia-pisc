export const servicos = [
  {
    id: 1,
    icone: "PSI",
    titulo: "Psicoterapia individual",
    descricao: "Espaco individual para escuta profissional, elaboracao de experiencias e cuidado emocional.",
    modalidade: "Modalidade a confirmar",
    disponivel: true,
  },
  {
    id: 2,
    icone: "ON",
    titulo: "Atendimento on-line",
    descricao: "Possibilidade de atendimento por videochamada, mediante confirmacao de disponibilidade.",
    modalidade: "Modalidade a confirmar",
    disponivel: false,
  },
  {
    id: 3,
    icone: "AC",
    titulo: "Acolhimento psicologico",
    descricao: "Conversa inicial para compreender demandas e orientar os proximos passos de cuidado.",
    modalidade: "Modalidade a confirmar",
    disponivel: true,
  },
  {
    id: 4,
    icone: "OP",
    titulo: "Orientacao psicologica",
    descricao: "Atendimento pontual e orientativo para situacoes especificas, sem substituir avaliacao continuada.",
    modalidade: "Modalidade a confirmar",
    disponivel: false,
  },
];

export const beneficios = [
  "Atendimento centrado na pessoa",
  "Ambiente respeitoso e acolhedor",
  "Privacidade e sigilo profissional",
  "Comunicacao clara sobre o processo",
];

export const depoimentos = [
  "Exemplo ficticio de uma mensagem acolhedora para a composicao visual.",
  "Exemplo ficticio de texto curto para testar o cartao de depoimento.",
];

export const perguntasFrequentes = [
  {
    pergunta: "Como funcionam os atendimentos?",
    resposta:
      "Os detalhes de formato, duracao e frequencia devem ser confirmados diretamente com a profissional.",
  },
  {
    pergunta: "A pagina ja possui dados profissionais definitivos?",
    resposta:
      "Nao. CRP, contatos, modalidades e textos institucionais precisam de confirmacao antes da publicacao.",
  },
  {
    pergunta: "O formulario envia mensagens reais?",
    resposta:
      "Nao. Nesta versao, o formulario e demonstrativo e serve para praticar estado, eventos e acessibilidade.",
  },
  {
    pergunta: "Posso trocar o placeholder por uma foto?",
    resposta:
      "Sim, desde que a imagem seja autorizada pela profissional e adequada ao uso institucional.",
  },
];

export const compromissos = [
  {
    id: "sigilo",
    titulo: "Sigilo profissional",
    texto: "Toda comunicacao da pagina deve reforcar privacidade sem expor dados sensiveis.",
  },
  {
    id: "clareza",
    titulo: "Clareza nas informacoes",
    texto: "Servicos, contatos e modalidades precisam estar confirmados antes da publicacao.",
  },
  {
    id: "acolhimento",
    titulo: "Linguagem acolhedora",
    texto: "Os textos devem informar com cuidado, sem prometer resultados ou cura.",
  },
];

export const etapasAtendimento = [
  {
    id: 1,
    titulo: "Contato inicial",
    descricao: "A pessoa envia uma mensagem demonstrativa pelo formulario da homepage.",
  },
  {
    id: 2,
    titulo: "Confirmacao de dados",
    descricao: "A profissional confirma disponibilidade, modalidade e canais reais de atendimento.",
  },
  {
    id: 3,
    titulo: "Agendamento",
    descricao: "A conversa e organizada em data e horario combinados diretamente com a profissional.",
  },
  {
    id: 4,
    titulo: "Atendimento",
    descricao: "O cuidado acontece em ambiente reservado, com respeito e sigilo profissional.",
  },
];

export const itensPublicacao = [
  "CRP verdadeiro confirmado",
  "Telefone e e-mail profissionais revisados",
  "Servicos aprovados pela profissional",
  "Imagem autorizada ou placeholder mantido",
  "Formulario conectado a um servico real, se necessario",
  "Console do navegador sem erros",
];

export const conteudosReact = [
  {
    id: "props",
    titulo: "Props",
    texto: "Permitem reaproveitar o mesmo componente com conteudos diferentes.",
  },
  {
    id: "map",
    titulo: "map()",
    texto: "Transforma arrays de dados em elementos visuais sem duplicar codigo.",
  },
  {
    id: "estado",
    titulo: "useState",
    texto: "Guarda informacoes que mudam conforme a interacao da pessoa usuaria.",
  },
  {
    id: "condicional",
    titulo: "Renderizacao condicional",
    texto: "Mostra mensagens, status e botoes apenas quando uma condicao for atendida.",
  },
];
