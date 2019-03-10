import Game from "./Game";

describe(Game, () => {
    it("should create a session", () => {
        const game = new Game();
        const session: string = game.play();
        // historical narrative
        expect(session).toContain("Let me tell you about the history of our world.");
        // expect(session).toMatch(/\((\w+) (\w+) \(\w+) (\w+)\)\./);
        // expect(session).toMatch(/In the beginning, (\w+) created (\w+)/);
        // hero journey
        expect(session).toMatch(/I am (\w+)/);
        expect(session).toMatch(/I am on a journey to (\w+)/);
        expect(session).toMatch(/Let's go!/);
        expect(session).toMatch(/We will visit (\w+)/);
    });
});
