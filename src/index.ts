import Game from "./Game";

const game = new Game();
const root = document.createElement('div');
root.textContent = game.play();
document.body.appendChild(root);

// to unlock for sandbox/debugging
// window.game = game;
