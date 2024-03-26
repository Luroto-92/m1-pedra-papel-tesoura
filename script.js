/* Desenvolva seu código abaixo */
function playRockPaperScissor(jogador1, jogador2) {
    
    if (jogador1 === jogador2) {
        return "Empate!";
    } else if (
        (jogador1 === "Pedra" && jogador2 === "Tesoura") ||
        (jogador1 === "Papel" && jogador2 === "Pedra") ||
        (jogador1 === "Tesoura" && jogador2 === "Papel")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}