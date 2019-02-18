import { sample } from "../Util";
import { allFeatures, Place } from "./Cartography";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { allAspects, Life } from "./Life";
import { Society } from "./Society";

export class World {
    private society: Society;
    private places: Place[];
    constructor(private name: string) {
        const life = new Life();
        const language = new Language();
        this.places = [
            new Place(
                language.generateName(),
                sample(allAspects),
                sample(allFeatures),
            ),
        ];
        this.society = new Society(new Language(), life);
    }

    public describe = () => `Welcome to ${this.name}!`;

    public randomPlace  = (): Place => sample(this.places);
    public randomPerson = (): Individual => sample(this.society.individuals);
}
