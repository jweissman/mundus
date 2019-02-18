import Game from "./Game";

describe(Game, () => {
    it("should create a session", () => {
        const game = new Game();
        game.play();
    });
});
