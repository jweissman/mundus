import { Culture } from "./Culture";
import { Society } from "./Society";

describe("Society", () => {
    it("has people", () => {
        const society = new Society([Culture.major]);
        expect(society.individuals.length).toBeGreaterThan(0);
    });
});
