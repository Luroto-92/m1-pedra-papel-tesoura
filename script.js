/* Desenvolva seu código abaixo */
function playRockPaperScissor(jogador1, jogador2) {
    
    jogador1 = jogador1.toLowerCase();
    jogador2 = jogador2.toLowerCase();

    if (jogador1 === jogador2) {
        return "Empate!";
    } else if (
        (jogador1 === "pedra" && jogador2 === "tesoura") ||
        (jogador1 === "papel" && jogador2 === "pedra") ||
        (jogador1 === "tesoura" && jogador2 === "papel")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}