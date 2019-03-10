import { Culture } from "./Culture";
import { Individual } from "./Individual";
import { Society } from "./Society";

describe("Society", () => {
    it("has people", () => {
        const society = new Society([Culture.major]);
        expect(society.individuals.length).toBeGreaterThan(0);
    });

    it("has a ruler", () => {
        const society = new Society([Culture.major]);
        expect(society.leader).toBeInstanceOf(Individual);
    });
});
