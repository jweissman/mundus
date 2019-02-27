import { Idea } from "./Idea";
import { Language } from "./Language";

describe("Language", () => {
    it("has a name", () => {
        const elvish = new Language("Elvish");
        expect(elvish.name).toBe("Elvish");
    });

    it("generates names", () => {
        const roots = [ "the" ];
        const stems = [ "re" ];

        const syllables = {
            roots,
            stems,
        };

        const lang = new Language("Computer", syllables);
        expect(lang.generateName()).toBe("there");
    });

    it("generates random names", () => {
        const roots = ["hel", "wor"];
        const stems = [ "lo", "ld" ];

        const syllables = {
            roots,
            stems,
        };

        const lang = new Language("Computer", syllables);
        for (let i = 0; i < 10; i++) {
            expect(lang.generateName()).toMatch(/(hel|wor)(lo|ld)/);
        }
    });

    it("writes ideas", () => {
        const roots = [ "the" ];
        const stems = [ "re" ];

        const syllables = {
            roots,
            stems,
        };

        // every word is 'there'
        const lang = new Language("cpu", syllables);
        expect(lang.write(Idea.Courage)).toBe("there");
        expect(lang.write(Idea.Hardworking)).toBe("there");
    });
});
