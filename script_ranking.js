var ranking = JSON.parse(localStorage.getItem("ranking"));

// Ordene a lista de usuários com base nas pontuações em ordem decrescente
ranking.sort(function(a, b) {
  return b.pontuacao - a.pontuacao;
});

var top10ranking = ranking.slice(0,10);
// Acesse o elemento HTML onde você deseja exibir o ranking
var rankingList = document.getElementById("rankingList");

// Preencha a estrutura HTML com os dados ordenados
top10ranking.forEach(function(usuario, indice) {
  var listItem = document.createElement("li");
  listItem.textContent = `${indice + 1}. ${usuario.nome}: ${usuario.pontuacao} pontos`;
  rankingList.appendChild(listItem);
}); 

function restartQuiz(){
    window.location.href = "index.html";
}