import { sample, sampleOnce } from "../Util";
import { allFeatures, Place } from "./Cartography";
import { Culture } from "./Culture";
import { allIdeas } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { Society } from "./Society";

export class World {
    private society: Society;
    private places: Place[];
    constructor(private name: string) {
        const life = new Life();
        const language = new Language();
        const culture = new Culture(life, language);
        this.places = [
            new Place(
                culture,
                // language.generateName(),
                sampleOnce(allIdeas),
                sampleOnce(allFeatures),
            ),
        ];
        this.society = new Society(new Language(), life);
    }

    public describe = () => `Welcome to ${this.name}!`;

    public randomPlace  = (): Place => sampleOnce(this.places);
    public randomPerson = (): Individual => sampleOnce(this.society.individuals);
}
