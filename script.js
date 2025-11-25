// ------------------------------
// DADOS DAS TURMAS E ALUNOS
// ------------------------------
const dadosTurmas = {
  "3º B - Técnico em Desenvolvimento de Sistemas": {
    curso: "Técnico em Desenvolvimento de Sistemas",
    componentes: [
      "Computação Gráfica",
      "Programação Mobile",
      "Análise de Projeto de Sistemas"
    ],
    alunos: [
      { nome: "ALIFER MIGUEL MARTINS ANTUNES", situacao: "" },
      { nome: "GEOVANA APARECIDA VARELA TERRES", situacao: "" },
      { nome: "HELISON WILLIAN PADILHA GODINHO", situacao: "" },
      { nome: "HERICK PAULO DA ROCHA", situacao: "" },
      { nome: "JAQUELINE ALVES DE RAMOS", situacao: "" },
      { nome: "JOÃO VICTOR DOS SANTOS VIEIRA", situacao: "" },
      { nome: "LETICIA APARECIDA ANDRADE DE FARIA", situacao: "" },
      { nome: "MARIA FERNANDA MOTTA LOPES", situacao: "" },
      { nome: "MATEUS HENRIQUE WIEIRA", situacao: "" },
      { nome: "ROBERTA DA SILVA CARNEIRO", situacao: "" },
      { nome: "VITORIA ELENA DAL BIANCO CHAGAS", situacao: "" }
    ]
  },
  "2º A - Técnico em Desenvolvimento de Sistemas": {
    curso: "Técnico em Desenvolvimento de Sistemas",
    componentes: [
      "Ciências da Computação",
      "Programação Mobile",
      "Análise de Projeto de Sistemas"
    ],
    alunos: [
      { nome: "ANDRESSA DA SILVA DE OLIVEIRA", situacao: "" },
      { nome: "ANDRESSA LOURENCO KRUSKIEVITZ", situacao: "" },
      { nome: "DIEGO SOUZA LIMA", situacao: "" },
      { nome: "ESTER DE QUADROS CAMARGO RUGENSKI", situacao: "" },
      { nome: "GEOVANA ALVES DOS SANTOS", situacao: "Transf." },
      { nome: "GEOVANA BENTAK PILANTIR", situacao: "" },
      { nome: "GUILHERME LOPES DOS SANTOS", situacao: "" },
      { nome: "HASSYNGER PINHEIRO DE OLIVEIRA", situacao: "" },
      { nome: "JHENIFER SILVA DOS SANTOS", situacao: "" },
      { nome: "JOAO VITOR LUSTOZA DOS REIS", situacao: "" },
      { nome: "JONAS HENRIQUE DA SILVA BRUNETTO", situacao: "" },
      { nome: "LUANA DE SOUZA SIQUEIRA", situacao: "" },
      { nome: "LUIZ HENRIQUE CAMARGO CORDEIRO", situacao: "" },
      { nome: "MATEUS GABRIEL DA SILVA LARA", situacao: "" },
      { nome: "QUÉZIA DE OLIVEIRA CAMPAGNA", situacao: "Transf." },
      { nome: "RAQUELI SIQUEIRA MARIANO", situacao: "" },
      { nome: "RYAN VITOR DA ROCHA", situacao: "" },
      { nome: "VITORIA CORDEIRO DAS NEVES", situacao: "" },
      { nome: "LARISSA ALIPIO DOS SANTOS", situacao: "Transf." },
      { nome: "JOSIEL GOULART DE SOUZA", situacao: "Exc. erro / ajuste" },
      { nome: "GEOVANA ALVES DOS SANTOS (2ª matrícula)", situacao: "Registro duplicado" }
    ]
  },
  "3º A - Técnico em Administração": {
    curso: "Técnico em Administração",
    componentes: [
      "Recursos Humanos"
    ],
    alunos: [
      { nome: "ADRIAN VINICIUS WURMSTICH PELANTIL", situacao: "" },
      { nome: "ANA CARLA DE ABREU PERETI", situacao: "" },
      { nome: "ANA CLARA DA SILVA GOMES", situacao: "" },
      { nome: "CARLOS DANIEL ALVES LANER", situacao: "" },
      { nome: "FERNANDO DA MACENA BREZEZINSKI DIDONE", situacao: "" },
      { nome: "FERNANDO EDUARDO DOS SANTOS DA FONSECA", situacao: "" },
      { nome: "HEMILLY VITORIA LOPES", situacao: "" },
      { nome: "JAMYLE DA SILVA XAVIER", situacao: "" },
      { nome: "JAQUELINE PACHECO ALVES", situacao: "" },
      { nome: "JEFERSON BUBELA JUNIOR", situacao: "" },
      { nome: "KARINA DA SILVA PEREIRA", situacao: "" },
      { nome: "KAYNA DE LIMA TONIAL", situacao: "" },
      { nome: "LUCAS EDUARDO DUARTE CALDAS", situacao: "Transf." },
      { nome: "MARIA EDUARDA BRANCO", situacao: "" },
      { nome: "MARIA JULIA ORNELES QUEIROZ", situacao: "" },
      { nome: "TAYNARA DOS SANTOS ALVES", situacao: "" },
      { nome: "YASMIN MARQUES DOS SANTOS", situacao: "" }
    ]
  }
};

// ------------------------------
// OPÇÕES PADRÃO DOS SELECTS
// ------------------------------
const opcoesSituacao = [
  "",
  "Regular",
  "Recuperação",
  "Se Liga",
  "PMA",
  "Transf.",
  "Registro duplicado",
  "Exc. erro / ajuste"
];

const opcoesObservacao = [
  "",
  "Bom desempenho",
  "Participa bem",
  "Faltas frequentes",
  "Pouco engajamento",
  "Dificuldade de conteúdo",
  "Precisa acompanhamento",
  "Aluno transferido"
];

// ------------------------------
// CACHE DE ELEMENTOS
// ------------------------------
const turmaSelect = document.getElementById('turmaSelect');
const componenteSelect = document.getElementById('componenteSelect');
const tbodyAlunos = document.getElementById('tbodyAlunos');
const campoProfessor = document.getElementById('professor');
const campoTrimestre = document.getElementById('trimestre');
const campoProfessorTexto = document.getElementById('campoProfessorTexto');
const campoTurmaTexto = document.getElementById('campoTurmaTexto');
const campoCursoTexto = document.getElementById('campoCursoTexto');
const campoComponenteTexto = document.getElementById('campoComponenteTexto');
const campoTrimestreTexto = document.getElementById('campoTrimestreTexto');
const rodapeData = document.querySelector('.rodape-data');

// ------------------------------
// FUNÇÕES AUXILIARES
// ------------------------------

// Data por extenso: "25 de novembro de 2025"
function formatarDataPorExtenso(data = new Date()) {
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
  ];
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();
  return `${dia} de ${mes} de ${ano}`;
}

// Atualiza o texto "Palmas – PR, ___ de ___ de ___"
function atualizarRodapeData() {
  const textoData = formatarDataPorExtenso();
  if (rodapeData) {
    rodapeData.textContent = `Palmas – PR, ${textoData}.`;
  }
}

// Preenche o select das turmas
function preencherSelectTurmas() {
  turmaSelect.innerHTML = "";
  Object.keys(dadosTurmas).forEach(turmaNome => {
    const opt = document.createElement('option');
    opt.value = turmaNome;
    opt.textContent = turmaNome;
    turmaSelect.appendChild(opt);
  });
}

// cria um select com base numa lista de opções
function criarSelect(opcoes, valorInicial = "") {
  const sel = document.createElement('select');
  sel.className = 'select-tabela';

  opcoes.forEach(op => {
    const opt = document.createElement('option');
    opt.value = op;
    opt.textContent = op;
    sel.appendChild(opt);
  });

  // se veio algum valor que não está na lista, adiciona como opção extra
  if (valorInicial && !opcoes.includes(valorInicial)) {
    const optExtra = document.createElement('option');
    optExtra.value = valorInicial;
    optExtra.textContent = valorInicial;
    sel.appendChild(optExtra);
  }

  sel.value = valorInicial || "";
  return sel;
}

// Atualiza componentes e tabela de alunos da turma selecionada
function atualizarComponentesETabela() {
  const turmaNome = turmaSelect.value;
  const turma = dadosTurmas[turmaNome];
  if (!turma) return;

  // Componentes curriculares
  componenteSelect.innerHTML = "";
  turma.componentes.forEach(comp => {
    const opt = document.createElement('option');
    opt.value = comp;
    opt.textContent = comp;
    componenteSelect.appendChild(opt);
  });

  // Tabela de alunos
  tbodyAlunos.innerHTML = "";
  turma.alunos.forEach((aluno, index) => {
    const tr = document.createElement('tr');

    const tdNum = document.createElement('td');
    tdNum.textContent = index + 1;

    const tdNome = document.createElement('td');
    tdNome.textContent = aluno.nome;

    // Situação com SELECT
    const tdSituacao = document.createElement('td');
    const selectSit = criarSelect(opcoesSituacao, aluno.situacao || "");
    tdSituacao.appendChild(selectSit);

    // Observações / Recuperação com SELECT
    const tdObs = document.createElement('td');
    const selectObs = criarSelect(opcoesObservacao, "");
    tdObs.appendChild(selectObs);

    tr.appendChild(tdNum);
    tr.appendChild(tdNome);
    tr.appendChild(tdSituacao);
    tr.appendChild(tdObs);
    tbodyAlunos.appendChild(tr);
  });

  atualizarCabecalhoTexto();
}

// Atualiza os textos do cabeçalho (professor, turma, curso, etc.)
function atualizarCabecalhoTexto() {
  campoProfessorTexto.textContent = campoProfessor.value;
  campoTurmaTexto.textContent = turmaSelect.value;

  const turma = dadosTurmas[turmaSelect.value];
  campoCursoTexto.textContent = turma ? turma.curso : "";
  campoComponenteTexto.textContent = componenteSelect.value;
  campoTrimestreTexto.textContent = campoTrimestre.value;
}

// Gera o PDF com html2pdf
function gerarPDF() {
  atualizarCabecalhoTexto();
  atualizarRodapeData(); // garante data atual

  const turmaNome = turmaSelect.value || "turma";
  const componente = componenteSelect.value || "disciplina";
  const professor = (campoProfessor.value || "professor").replace(/\s+/g, "_");
  const hojeISO = new Date().toISOString().slice(0, 10); // AAAA-MM-DD

  const opt = {
    margin: 10,
    filename: `relatorio_${turmaNome.replace(/\s+/g, "_")}_${componente.replace(/\s+/g, "_")}_${professor}_${hojeISO}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  const elemento = document.getElementById('relatorio');
  if (typeof html2pdf === "undefined") {
    alert("Biblioteca html2pdf não carregada. Verifique a conexão ou o script CDN.");
    return;
  }
  html2pdf().set(opt).from(elemento).save();
}

// Preenche automaticamente os textos de Se Liga (caso não tenha ninguém)
function preencherTextoSeLiga() {
  const turmaNome = turmaSelect.value;
  const componente = componenteSelect.value;
  const textoBase =
    "Após análise das avaliações e do desempenho da turma, verifica-se que, neste período, " +
    "nenhum aluno ficou em situação de Se Liga na disciplina de " + (componente || "________") +
    " da turma " + (turmaNome || "________") +
    ". Os estudantes, de modo geral, apresentam aproveitamento satisfatório, mantendo a média " +
    "necessária para aprovação, sendo mantidas ações de acompanhamento e intervenções pontuais quando necessário.";

  document.getElementById('angustias').value = textoBase;
  document.getElementById('socializando').value =
    "Turma sem alunos em situação de Se Liga neste período. Mantêm-se ações preventivas " +
    "de acompanhamento, revisões de conteúdo e atividades de reforço para garantir a aprendizagem de todos.";
}

// ------------------------------
// EVENTOS
// ------------------------------
turmaSelect.addEventListener('change', atualizarComponentesETabela);
componenteSelect.addEventListener('change', atualizarCabecalhoTexto);
campoProfessor.addEventListener('input', atualizarCabecalhoTexto);
campoTrimestre.addEventListener('input', atualizarCabecalhoTexto);
document.getElementById('btnGerarPdf').addEventListener('click', gerarPDF);
document.getElementById('btnAutoSeLiga').addEventListener('click', preencherTextoSeLiga);

// ------------------------------
// INICIALIZAÇÃO
// ------------------------------
preencherSelectTurmas();
atualizarComponentesETabela();
atualizarRodapeData();   // já coloca a data atual ao carregar
