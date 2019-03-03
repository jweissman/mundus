import { sample, sampleOnce } from "../Util";
import { allFeatures, Place } from "./Cartography";
import { Culture } from "./Culture";
import { allIdeas, Idea } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { Society } from "./Society";
// import { log } from '../Konsole';

export class World {
    private society: Society;
    private places: Place[];
    private commonLanguage: Language;
    constructor(private nameIdeas: Idea[] = [Idea.Bright]) {
        const life = new Life();
        this.commonLanguage = new Language('Common');
        const majorCulture = new Culture(life, this.commonLanguage);
        this.places = [
            new Place(
                majorCulture,
                sampleOnce(allIdeas),
                sampleOnce(allFeatures),
            ),
        ];
        this.society = new Society(majorCulture);
    }

    public describe = () => `Welcome to ${this.name}!`;
    private get name() {
        return this.commonLanguage.say(this.nameIdeas);
    }

    public randomPlace  = (): Place => sampleOnce(this.places);
    public randomPerson = (): Individual => sampleOnce(this.society.individuals);
}
