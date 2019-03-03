import { Society } from "./Society";
import { Culture } from "./Culture";

describe("Society", () => {
    it("has people", () => {
        let society = new Society([Culture.major]);
        expect(society.individuals.length).toBeGreaterThan(0);
    });

})