import { Engine } from "./Engine";
import { Konsole } from "./Konsole";
import { Place } from "./models/Cartography";
import { Language } from "./models/Language";

let engine: Engine = null;

describe("Engine", () => {
    beforeEach(() => {
        engine = new Engine();
    });

    it("should describe the world", () => {
        const narrative = engine.narrate();
        const expected = /Welcome to Terra Incognita!/;
        expect(narrative).toMatch(expected);
    });

    it("should name the world", () => {
        engine = new Engine({
            worldName: "Happyvale",
        });

        const narrative = engine.narrate();
        const expected = /Welcome to Happyvale!/;
        expect(narrative).toMatch(expected);
    });

    it("should describe individuals", () => {
        const person = engine.exampleIndividual();
        expect(person.description).toMatch(/\w+ \w+/);
        Konsole.log("Welcome:", person.description);
    });

    it("should describe a place", () => {
        // const elvish: Language = new Language();
        const home: Place = engine.exampleLocation();
        expect(home.description).toMatch(/the \w+ \w+/);
        expect(home.name).toMatch(/\w+/);
        Konsole.log("Welcome to", home.name, home.description);
    });
});
