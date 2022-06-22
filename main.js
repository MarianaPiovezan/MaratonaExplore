const inputPergunta = document.querySelector(".inputPergunta");
const mostraResposta = document.querySelector(".resposta");
const buttonPerguntar = document.querySelector(".buttonPerguntar");

const listaRespostas = ["Certeza!",
"Não tenho tanta certeza.",
"É decididamente assim.",
"Não conte com isso.",
"Sem dúvidas!",
"Pergunte novamente mais tarde.",
"Sim, definitivamente!",
"Minha resposta é não.",
"Você pode contar com isso.",
"Melhor não te dizer agora.",
"A meu ver, sim.",
"Minhas fontes dizem não.",
"Provavelmente.",
"Não é possível prever agora.",
"Perspectiva boa.",
"As perspectivas não são tão boas.",
"Sim.",
"Concentre-se e pergunte novamente.",
"Sinais apontam que sim.",
];


function fazerPergunta() {
    const pergunta = "<div>" + inputPergunta.value + "</div>"
    const tamanhoLista = listaRespostas.length
    const respostaAleatoria = Math.floor(Math.random()*tamanhoLista)

    if (inputPergunta.value === "") {
        alert("Digite sua pergunta.")
        return
    } else {

        buttonPerguntar.setAttribute("disabled", true)

        mostraResposta.innerHTML = pergunta + listaRespostas[respostaAleatoria]
        mostraResposta.style.opacity = 1;
        
        setTimeout (function () {

            mostraResposta.style.opacity = 0;
            buttonPerguntar.removeAttribute("disabled")
        }, 3000);
    }
}

