import { getEditDistance } from "../Util";
import { Language } from "./Language";

describe("Language", () => {
    it("has a name", () => {
        const elvish = new Language("Elvish");
        expect(elvish.name).toBe("Elvish");
    });

    it("writes ideas", () => {
        const roots = [ "hel" ];
        const stems = [ "lo" ];
        const leaves = [ "wor" ];

        const syllables = {
            leaves,
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
