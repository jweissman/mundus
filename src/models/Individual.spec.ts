import { Individual } from "./Individual";
import { Place } from "./Place";
import { Culture } from "./Culture";

describe("Individual", () => {
    it("has a tripartite name", () => {
        const person = new Individual(
            ["humble", "steady", "labor" ],
            new Place(),
        );
        expect(person.description).toMatch(
            // [name] ([meaning]) the [title]
            /(\w+) (\w+) (\w+) \(humble steady labor\)/,
        );
    });

    it("has a job", () => {
        const person = new Individual(
            ["humble", "steady", "labor" ],
            new Place(),
            "farmer",
        );
        // the [adjective] farmer
        expect(person.description).toMatch(/the (\w+) farmer/);
    });

    it("has a hometown", () => {
        const home = new Place();
        const person = new Individual(["humble", "steady", "labor" ], home);
        expect(person.description).toMatch(`of ${home.description}`);
    });
});
