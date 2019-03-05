import Game from "./Game";

describe(Game, () => {
    it("should create a session", () => {
        const game = new Game();
        const narrative: string = game.play();
        expect(narrative).toMatch(/I am (\w+)/);
        expect(narrative).toMatch(/I am on a journey to (\w+)/);
        expect(narrative).toMatch(/Let's go!/);
        expect(narrative).toMatch(/First we will visit (\w+)/);
    });
});
