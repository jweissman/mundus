import { Engine } from "./Engine";
import { Konsole } from "./Konsole";
import { Language } from "./models/Language";
import { Place } from "./models/Place";

let engine: Engine = null;

describe("Engine", () => {
    beforeEach(() => {
        engine = new Engine({
            worldNameIdeas: [ "quiet", "stillness" ],
        });
    });

    it("should describe the world", () => {
        const narrative = engine.narrate();
        const expected = /Welcome to (\w+ \w+) \(quiet stillness\)!/;
        expect(narrative).toMatch(expected);
    });

    xit("should name the world", () => {
        engine = new Engine({
            // worldName: "Happyvale",
        });

        const narrative = engine.narrate();
        const expected = /Welcome to (\w+)!/;
        expect(narrative).toMatch(expected);
    });

    it("should describe individuals", () => {
        const person = engine.exampleIndividual();
        expect(person.description).toMatch(/[A-Z]\w+ [A-Z]\w+/);
        Konsole.log("Welcome:", person.description);
    });

    it("should describe a place", () => {
        const home: Place = engine.exampleLocation();
        expect(home.description).toMatch(/the \w+ \w+/);
        Konsole.log("Welcome to", home.description);
    });

    xit("should accept custom class", () => {
        // engine.generateIndividual('hardworking', 'farmer');
    });
    test.todo("should generate events");
});
