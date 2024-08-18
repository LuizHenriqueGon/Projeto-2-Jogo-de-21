const hitBtn = document.getElementById("hit");
const standBtn = document.getElementById("stand");
const resetBtn = document.getElementById("reset");
const playerScoreEl = document.getElementById("player-score");
const dealerScoreEl = document.getElementById("dealer-score");
const playerHandEl = document.getElementById("player-hand");
const dealerHandEl = document.getElementById("dealer-hand");
const messageEl = document.getElementById("message");

let playerScore = 0;
let dealerScore = 0;
let gameOver = false;
let playerStood = false;

function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;
}

function createCardElement(value) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = value;
    return card;
}

function updateScore() {
    playerScoreEl.textContent = `Jogador: ${playerScore}`;
    dealerScoreEl.textContent = `Dealer: ${dealerScore}`;
}

function checkWinner() {
    if (playerScore > 21) {
        messageEl.textContent = "Você perdeu!";
        gameOver = true;
    } else if (dealerScore > 21) {
        messageEl.textContent = "Você ganhou!";
        gameOver = true;
    } else if (gameOver) {
        if (playerScore > dealerScore) {
            messageEl.textContent = "Você ganhou!";
        } else if (playerScore < dealerScore) {
            messageEl.textContent = "Você perdeu!";
        } else {
            messageEl.textContent = "Empate!";
        }
    }

    if (gameOver) {
        hitBtn.style.display = "none";
        standBtn.style.display = "none";
        resetBtn.style.display = "block";
    }
}

function dealCards() {
    if (gameOver) return;

    const playerCard = getRandomCard();
    playerScore += playerCard;
    playerHandEl.appendChild(createCardElement(playerCard));

    updateScore();

    if (playerScore > 21) {
        checkWinner();
    }
}

function dealerTurn() {
    
    while (dealerScore < 17) {
        const dealerCard = getRandomCard();
        dealerScore += dealerCard;
        dealerHandEl.appendChild(createCardElement(dealerCard));
        updateScore();
    }
    gameOver = true;
    checkWinner();
}

hitBtn.addEventListener("click", dealCards);

standBtn.addEventListener("click", () => {
    if (gameOver) return;
    playerStood = true;
    hitBtn.style.display = "none";
    standBtn.style.display = "none";
    dealerTurn();
});

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    dealerScore = 0;
    playerStood = false;
    gameOver = false;
    messageEl.textContent = "";
    playerHandEl.innerHTML = "";
    dealerHandEl.innerHTML = "";
    updateScore();
    hitBtn.style.display = "block";
    standBtn.style.display = "block";
    resetBtn.style.display = "none";
});

// Inicializa o placar
updateScore();