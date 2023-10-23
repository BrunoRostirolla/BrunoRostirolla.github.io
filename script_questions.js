var perguntas = [
    {
      categoria: 0,
      texto: "Qual é a capital do Brasil?",
      alternativas: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      resposta: 2, // A resposta correta é a terceira alternativa (índice 2)
      
    },
    {
      categoria: 0,
      texto: "Quem pintou a Mona Lisa?",
      alternativas: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      resposta: 0 // A resposta correta é a primeira alternativa (índice 0)
    },
    {
        categoria: 1,
        texto: "Quem pintou a Show da luna Lisa?",
        alternativas: ["asdfasdf da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        resposta: 0 // A resposta correta é a primeira alternativa (índice 0)
    },
    {
        categoria: 1,
        texto: "Quem pintou a POKEMON?",
        alternativas: ["lekoleko", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        resposta: 0 // A resposta correta é a primeira alternativa (índice 0)
    },
    {
      categoria: 2,
      texto: "Categoria 3?",
      alternativas: ["meju peru chamuscado", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
      resposta: 0 // A resposta correta é a primeira alternativa (índice 0)
  },
    // Adicione mais perguntas aqui...
  ];
  
var indicePerguntaAtual = 0;
var score = 0;
var index_categoria = parseInt(localStorage.getItem("indexcategoria"));
var perguntas_filtradas = perguntas.filter(q => q.categoria === index_categoria);

function carregarPergunta() {
  document.getElementById("pergunta").textContent = perguntas_filtradas[indicePerguntaAtual].texto;
  var alternativas = perguntas_filtradas[indicePerguntaAtual].alternativas;
  for (var j = 0; j < alternativas.length; j++) {
    document.getElementById("alternativas").children[j].textContent = alternativas[j];
  }
};
  
function verificarResposta(indiceResposta) {
    if (indiceResposta === perguntas_filtradas[indicePerguntaAtual].resposta) {
      score = score + 10*segundos;
    }
    
    indicePerguntaAtual++;
  
    if (indicePerguntaAtual < perguntas_filtradas.length) {
      carregarPergunta();
      reiniciarTimer();
    } else {
      localStorage.setItem("score", score);
      window.location.href = "score.html";
    }
};

carregarPergunta();

var timerElement = document.getElementById("timer");
var segundos = 15;
var intervalo;

function atualizarTimer() {
  var segundosFormatados = segundos.toFixed(2); // Formata para duas casas decimais
  timerElement.textContent = segundosFormatados;

  if (segundos < 5) {
    timerElement.classList.add("pulsar");
  } else {
    timerElement.classList.remove("pulsar");
  }

  if (segundos <= 0) {
    clearInterval(intervalo);
    timerElement.textContent = "Tempo Esgotado!";
    indicePerguntaAtual++;
    carregarPergunta();
    reiniciarTimer();
    // Aqui você pode adicionar a lógica para a próxima pergunta ou ação apropriada
  } else {
    segundos -= 0.01; // Reduz 0.01 a cada centésimo de segundo
  }
};

// Inicia o temporizador
intervalo = setInterval(atualizarTimer, 10);

function reiniciarTimer() {
  clearInterval(intervalo);
  segundos = 15; // Defina o tempo desejado para o próximo timer
  atualizarTimer(); // Atualize imediatamente o timer para 15.00 segundos
  intervalo = setInterval(atualizarTimer, 10);
};

