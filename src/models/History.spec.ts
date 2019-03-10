import { UniversalHistory } from "./History";

describe("History", () => {
    it("starts the universe", () => {
        const history = new UniversalHistory();
        const event = history.events()[0];
        expect(event.describe()).toMatch(/In the beginning/);
    });
});
