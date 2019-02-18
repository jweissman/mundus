import { Life } from "./Life";
import { Language } from "./Language";
import { Individual } from "./Individual";
import { Society } from "./Society";
import { sample } from "./Util";
import { Cartography } from './Cartography';

export class World {
    private society: Society;
    private places: Cartography.Place[];
    constructor(private name: String) {
        let life = new Life.System();
        this.places = [
            new Cartography.Place()
        ];
        this.society = new Society(new Language.System(), life);
    }

    describe = () => `Welcome to ${this.name}!`

    randomPlace  = (): Cartography.Place => sample(this.places)
    randomPerson = (): Individual => sample(this.society.individuals)

}
