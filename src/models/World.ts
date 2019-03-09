import { Konsole } from "../Konsole";
import { genArray, sample, sampleOnce } from "../Util";
import { Culture } from "./Culture";
import { allAspects, allIdeas, allLandscapeFeatures, Idea } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { Place } from "./Place";
import { Society } from "./Society";

export class World {
    private society: Society;
    private places: Place[];
    constructor(private nameIdeas: Idea[] = ["vast", "beauty"]) {
        const life = new Life();
        this.places = genArray(10, () => new Place(
            Culture.major,
            sampleOnce(allAspects),
            sampleOnce(allLandscapeFeatures),
        ));
        this.society = new Society([Culture.major]);
        // Konsole.log("Created new world...", this.describe());
    }

    public describe = () => `${this.name} (${this.nameIdeas.join(" ")})`;
    public get name() {
        return Language.common.say(this.nameIdeas);
    }

    public randomPlace  = (): Place => sampleOnce(this.places);
    public randomPerson = (): Individual => sampleOnce(this.society.individuals);
}
