import { World } from "./World";

describe("World", () => {
    it("has a two-part capitalized name", () => {
        const world = new World();
        expect(world.name).toMatch(/[A-Z]\w+ [A-Z]\w+/);
    });

    it("has a ruler", () => {
        const world = new World();
        const ruler = world.ruler;
        expect(ruler.description).toMatch(/\w+ \w+ \w+ \(\w+ \w+ \w+\) the (\w+) monarch/);
    });
});
