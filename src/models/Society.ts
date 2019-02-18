import { Culture } from "./Culture";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
// society model
export class Society {
    private members: Individual[] = [];
    constructor(private linguisticSystem: Language, private lifeSystem: Life) {
        const culture = new Culture(lifeSystem, linguisticSystem);
        this.populate(new Individual(culture));
    }
    public populate(individual: Individual) {
        this.members.push(individual);
    }
    get individuals() {
        return this.members;
    }
}
