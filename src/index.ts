import Game from "./Game";

const game = new Game();
game.play();

// @ts-ignore
window.game = game;