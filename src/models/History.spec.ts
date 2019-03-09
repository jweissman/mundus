import { UniversalHistory } from "./History";

describe("History", () => {
    it("starts the universe", () => {
        let history = new UniversalHistory();
        let event = history.events()[0];
        expect(event.describe()).toMatch(/In the beginning/);
    });
});
