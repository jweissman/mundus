import { Culture } from "./Culture";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { sample, sampleOnce } from "../Util";
// society model
export class Society {
    private members: Individual[] = [];
    constructor(...cultures: Culture[]) {
        // const culture = new Culture(lifeSystem, linguisticSystem);
        let culture = sampleOnce(cultures);
        let individual = new Individual(culture);
        this.populate(individual); //new Individual(sample(cultures));
    }

    public populate(individual: Individual) {
        this.members.push(individual);
    }

    get individuals() {
        return this.members;
    }
}
