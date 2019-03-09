import { getEditDistance } from "../Util";
import { Language } from "./Language";

describe("Language", () => {
    it("has a name", () => {
        const elvish = new Language("Elvish");
        expect(elvish.name).toBe("Elvish");
    });

    it("writes ideas", () => {
        const lang = new Language("cpu");
        expect(lang.write("courage")).toMatch(/(\w+)/);
        expect(lang.write("labor")).toMatch(/(\w+)/);
    });

    test.todo("it translates");
});
