import Game from "./Game";
import "./game.css";

if (typeof document !== "undefined") {
    const game = new Game();
    const root = document.createElement("div");
    root.classList.add("game");

    const history = document.createElement("div");
    history.textContent = game.history();
    root.appendChild(history);

    const journey = document.createElement("div");
    journey.textContent = game.heroJourney();
    root.appendChild(journey);

    document.body.appendChild(root);
}

export default Game;
