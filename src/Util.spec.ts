import { capitalize } from "./Util";

describe("utilities", () => {
    it("should capitalize a word", () => {
        expect(capitalize("hello")).toBe("Hello");
    });
});
