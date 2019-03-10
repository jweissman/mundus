import { Culture } from "./Culture";
import { allIdeas } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { Place } from "./Place";

describe("Culture", () => {

    it("bestows names to people", () => {
        const common = Language.common;
        const life = new Life();
        const culture = new Culture(life, common);

        const adam = new Individual([], new Place(), "farmer", culture);
        expect(culture.bestowIndividualName(adam, {
            forename: "humble",
            midname: "steady",
            surname: "day",
        })).toEqual([ "humble", "steady", "day" ]);

        const randomName = culture.bestowIndividualName(adam);
        expect(randomName).toHaveLength(3);
        expect(allIdeas).toContain(randomName[0]);
        expect(allIdeas).toContain(randomName[1]);
        expect(allIdeas).toContain(randomName[2]);
    });

    it("bestows aspects based on professions", () => {
        const common = Language.common;

        const farmLife = new Life(["farmer"]);
        const farmCulture = new Culture(farmLife, common);
        expect(farmCulture.bestowIndividualAspect()).
            toMatch(/humble|simple|kind|plain|silent/);

        const cityLife = new Life(["fighter"]);
        const cityCulture = new Culture(cityLife, common);
        expect(cityCulture.bestowIndividualAspect()).
            toMatch(/sharp|wealthy|desperate/);
    });
});
