var score_final = parseInt(localStorage.getItem("score"));
document.getElementById("score_show").textContent = "Seu score é: " + score_final;

var ranking = JSON.parse(localStorage.getItem("ranking"));

function appendRanking(nome, pontuacao) {
    var usuario = { nome: nome, pontuacao: pontuacao };
    ranking.push(usuario);
    localStorage.setItem("ranking", JSON.stringify(ranking));
};

var botao_ranking = document.getElementById("ranking");
botao_ranking.addEventListener("click", function(){
    var nome = document.getElementById("nome").value;
    appendRanking(nome, score_final);
    window.location.href = "view_ranking.html";
});

