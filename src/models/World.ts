import { Konsole } from "../Konsole";
import { genArray, sample } from "../Util";
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

    constructor(
        private worldNameIdeas: Idea[] = ["vast", "beauty"],
        rulerNameIdeas: Idea[] = ["shining", "gift"],
    ) {
        this.places = genArray(10, () => new Place(
            Culture.major,
            sample(allAspects),
            sample(allLandscapeFeatures),
        ));
        this.society = new Society([Culture.major], rulerNameIdeas);
    }

    public describe = () => `${this.name} (${this.worldNameIdeas.join(" ")})`;

    public get name() {
        return Language.common.say(this.worldNameIdeas);
    }

    public randomPlace  = (): Place => sample(this.places);
    public randomPerson = (): Individual => sample(this.society.individuals);

    public get ruler(): Individual {
        return this.society.leader;
    }
}
