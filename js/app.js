const button_play = document.querySelector("#button-play");
const player_hand = document.querySelector("#player-hand");
const bot_hand = document.querySelector("#bot-hand");
let player_score = document.querySelector("#player-score");
let bot_score = document.querySelector("#bot-score");
let game = document.querySelector("#game");

let game_arr = [
  `<i class="fas fa-hand-scissors"></i>`,
  `<i class="fas fa-hand-rock"></i>`,
  `<i class="fas fa-hand-paper"></i>`,
];

let player = 0;
let bot = 0;

const clearClass = () => {
  player_hand.classList.remove("win", "tie", "lose");
  bot_hand.classList.remove("lose", "tie", "win");
};

const gameKeeper = () => {
  if (player === 10) {
    game.innerHTML = "GAME OVER !! YOU WIN";
    player = 0;
    bot = 0;
    button_play.innerHTML = "Reload Game";
    button_play.classList.remove("btn", "btn-outline-dark");
    button_play.classList.add("btn", "btn-danger");
    button_play.addEventListener("click", () => {
      location.reload();
    });
  }

  if (bot === 10) {
    game.innerHTML = "GAME OVER !! BOT WINS";
    player = 0;
    bot = 0;
    button_play.innerHTML = "Reload Game";
    button_play.classList.remove("btn", "btn-outline-dark");
    button_play.classList.add("btn", "btn-danger");
    button_play.addEventListener("click", () => {
      location.reload();
    });
  }
};

button_play.addEventListener("click", function () {
  let random = Math.floor(Math.random() * game_arr.length);
  let random2 = Math.floor(Math.random() * game_arr.length);
  player_hand.innerHTML = game_arr[random];
  bot_hand.innerHTML = game_arr[random2];

  let rock = `<i class="fas fa-hand-rock"></i>`;
  let paper = `<i class="fas fa-hand-paper"></i>`;
  let scissors = `<i class="fas fa-hand-scissors"></i>`;

  if (player_hand.innerHTML === rock && bot_hand.innerHTML === paper) {
    bot += 1;
    bot_score.innerHTML = bot;
    clearClass();
    bot_hand.classList.toggle("win");
    player_hand.classList.toggle("lose");
  } else if (
    player_hand.innerHTML === rock &&
    bot_hand.innerHTML === scissors
  ) {
    player += 1;
    player_score.innerHTML = player;
    clearClass();
    player_hand.classList.toggle("win");
    bot_hand.classList.toggle("lose");
  } else if (player_hand.innerHTML === rock && bot_hand.innerHTML === rock) {
    clearClass();
    player_hand.classList.toggle("tie");
    bot_hand.classList.toggle("tie");
  } else if (player_hand.innerHTML === paper && bot_hand.innerHTML === rock) {
    player += 1;
    player_score.innerHTML = player;
    clearClass();
    player_hand.classList.toggle("win");
    bot_hand.classList.toggle("lose");
  } else if (
    player_hand.innerHTML === paper &&
    bot_hand.innerHTML === scissors
  ) {
    bot += 1;
    bot_score.innerHTML = bot;
    clearClass();
    bot_hand.classList.toggle("win");
    player_hand.classList.toggle("lose");
  } else if (player_hand.innerHTML === paper && bot_hand.innerHTML === paper) {
    clearClass();
    player_hand.classList.toggle("tie");
    bot_hand.classList.toggle("tie");
  } else if (
    player_hand.innerHTML === scissors &&
    bot_hand.innerHTML === rock
  ) {
    bot += 1;
    bot_score.innerHTML = bot;
    clearClass();
    bot_hand.classList.toggle("win");
    player_hand.classList.toggle("lose");
  } else if (
    player_hand.innerHTML === scissors &&
    bot_hand.innerHTML === paper
  ) {
    player += 1;
    player_score.innerHTML = player;
    clearClass();
    player_hand.classList.toggle("win");
    bot_hand.classList.toggle("lose");
  } else if (
    player_hand.innerHTML === scissors &&
    bot_hand.innerHTML === scissors
  ) {
    clearClass();
    player_hand.classList.toggle("tie");
    bot_hand.classList.toggle("tie");
  }
  gameKeeper();
});
