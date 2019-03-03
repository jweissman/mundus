import { Individual } from "./Individual";
import { Place } from "./Place";

describe("Individual", () => {
    it("has a tripartite name", () => {
        const person = new Individual(new Place());
        expect(person.description).toMatch(
            // [name] ([meaning]) the [title]
            /(\w+) (\w+) (\w+) \((\w+) (\w+) (\w+)\)/,
        );
    });

    it("has a job", () => {
        const person = new Individual(new Place(), "farmer");
        // the [adjective] farmer
        expect(person.description).toMatch(/the (\w+) farmer/);
    });

    it("has a hometown", () => {
        const home = new Place();
        const person = new Individual(home);
        expect(person.description).toMatch(`of ${home.description}`);
    });
});
