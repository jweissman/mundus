import Game from "./Game";
if (typeof document !== "undefined") {
    const game = new Game();
    const root = document.createElement("div");
    root.textContent = game.play();
    document.body.appendChild(root);
}
export default Game;
