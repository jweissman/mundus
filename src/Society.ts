import { Life } from "./Life";
import { Language } from "./Language";
import { Culture } from "./Culture";
import { Individual } from "./Individual";
// society model
export class Society {
    private members: Individual[] = [];
    constructor(private linguisticSystem: Language.System, private lifeSystem: Life.System) {
        let culture = new Culture.System(lifeSystem, linguisticSystem);
        this.populate(new Individual(culture) // linguisticSystem, lifeSystem)
        );
    }
    populate(individual: Individual) {
        this.members.push(individual);
    }
    get individuals() {
        return this.members;
    }
}
