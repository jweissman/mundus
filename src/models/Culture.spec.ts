import { Culture } from "./Culture";
import { Language } from "./Language";
import { Life } from "./Life";

describe("Culture", () => {
    it('describes professions', () => {
        const common = Language.common;

        const farmLife = new Life(['farmer']);
        let farmCulture = new Culture(farmLife, common);
        expect(farmCulture.bestowIndividualAspect()).
            toMatch(/humble|simple|kind|plain|silent/);

        const cityLife = new Life(['fighter']);
        let cityCulture = new Culture(cityLife, common);
        expect(cityCulture.bestowIndividualAspect()).
            toMatch(/sharp|wealthy|desperate/);
    });
})