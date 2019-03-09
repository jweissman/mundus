import { World } from "./World";

describe("World", () => {
    it("has a two-part capitalized name", () => {
        const world = new World();
        expect(world.name).toMatch(/[A-Z]\w+ [A-Z]\w+/);
    });
});
