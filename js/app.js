const button_play = document.querySelector("#button-play");
const player_hand = document.querySelector("#player-hand");
const bot_hand = document.querySelector("#bot-hand");

let game_arr = [
  `<i class="fas fa-hand-scissors"></i>`,
  `<i class="fas fa-hand-rock"></i>`,
  `<i class="fas fa-hand-paper"></i>`,
];

button_play.addEventListener("click", function () {
  let random = Math.floor(Math.random() * game_arr.length);
  let random2 = Math.floor(Math.random() * game_arr.length);
  player_hand.innerHTML = game_arr[random];
  bot_hand.innerHTML = game_arr[random2];
});
