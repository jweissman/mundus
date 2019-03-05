import { getEditDistance } from "../Util";
import { Language, Word } from "./Language";

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
        const name = lang.generateName();
        const dist = getEditDistance(
            name[0].form,
            "there",
        );
        expect(dist).toBeLessThan(4);
        // expect(lang.generateName()).toBe("there");
    });

    xit("generates random names", () => {
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

        // every word is related to 'there'
        const lang = new Language("cpu", syllables);
        expect(lang.write("courage")).toMatch(/(\w+)/);
        expect(lang.write("labor")).toMatch(/(\w+)/);
    });

    test.todo("it translates");
});
