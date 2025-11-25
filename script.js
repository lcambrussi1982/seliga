// DADOS DAS TURMAS E ALUNOS
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
  "RH - Técnico em Administração": {
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

const turmaSelect = document.getElementById('turmaSelect');
const componenteSelect = document.getElementById('componenteSelect');
const tbodyAlunos = document.getElementById('tbodyAlunos');

function preencherSelectTurmas() {
  turmaSelect.innerHTML = "";
  Object.keys(dadosTurmas).forEach(turmaNome => {
    const opt = document.createElement('option');
    opt.value = turmaNome;
    opt.textContent = turmaNome;
    turmaSelect.appendChild(opt);
  });
}

function atualizarComponentesETabela() {
  const turmaNome = turmaSelect.value;
  const turma = dadosTurmas[turmaNome];
  if (!turma) return;

  // componentes
  componenteSelect.innerHTML = "";
  turma.componentes.forEach(comp => {
    const opt = document.createElement('option');
    opt.value = comp;
    opt.textContent = comp;
    componenteSelect.appendChild(opt);
  });

  // tabela de alunos
  tbodyAlunos.innerHTML = "";
  turma.alunos.forEach((aluno, index) => {
    const tr = document.createElement('tr');

    const tdNum = document.createElement('td');
    tdNum.textContent = index + 1;

    const tdNome = document.createElement('td');
    tdNome.textContent = aluno.nome;

    const tdSituacao = document.createElement('td');
    const inputSit = document.createElement('input');
    inputSit.type = 'text';
    inputSit.value = aluno.situacao || "";
    tdSituacao.appendChild(inputSit);

    const tdObs = document.createElement('td');
    const inputObs = document.createElement('input');
    inputObs.type = 'text';
    tdObs.appendChild(inputObs);

    tr.appendChild(tdNum);
    tr.appendChild(tdNome);
    tr.appendChild(tdSituacao);
    tr.appendChild(tdObs);
    tbodyAlunos.appendChild(tr);
  });

  atualizarCabecalhoTexto();
}

function atualizarCabecalhoTexto() {
  document.getElementById('campoProfessorTexto').textContent =
    document.getElementById('professor').value;
  document.getElementById('campoTurmaTexto').textContent = turmaSelect.value;
  const turma = dadosTurmas[turmaSelect.value];
  document.getElementById('campoCursoTexto').textContent = turma ? turma.curso : "";
  document.getElementById('campoComponenteTexto').textContent = componenteSelect.value;
  document.getElementById('campoTrimestreTexto').textContent =
    document.getElementById('trimestre').value;
}

function gerarPDF() {
  atualizarCabecalhoTexto();

  const turmaNome = turmaSelect.value || "turma";
  const componente = componenteSelect.value || "disciplina";
  const professor = (document.getElementById('professor').value || "professor")
    .replace(/\s+/g, "_");

  const opt = {
    margin: 10,
    filename: `relatorio_${turmaNome.replace(/\s+/g, "_")}_${componente.replace(/\s+/g, "_")}_${professor}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  const elemento = document.getElementById('relatorio');
  html2pdf().set(opt).from(elemento).save();
}

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

// Eventos
turmaSelect.addEventListener('change', atualizarComponentesETabela);
componenteSelect.addEventListener('change', atualizarCabecalhoTexto);
document.getElementById('professor').addEventListener('input', atualizarCabecalhoTexto);
document.getElementById('trimestre').addEventListener('input', atualizarCabecalhoTexto);
document.getElementById('btnGerarPdf').addEventListener('click', gerarPDF);
document.getElementById('btnAutoSeLiga').addEventListener('click', preencherTextoSeLiga);

// Inicialização
preencherSelectTurmas();
atualizarComponentesETabela();
