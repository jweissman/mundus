import Game from "./Game";

describe(Game, () => {
    it("should create a session", () => {
        const game = new Game();
        const narrative: string = game.play();
        // historical narrative
        expect(narrative).toMatch(/Let me tell you about the history of our world, (\w+) (\w+)./);
        // hero journey
        expect(narrative).toMatch(/I am (\w+)/);
        expect(narrative).toMatch(/I am on a journey to (\w+)/);
        expect(narrative).toMatch(/Let's go!/);
        expect(narrative).toMatch(/We will visit (\w+)/);
    });
});
