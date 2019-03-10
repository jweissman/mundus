import { genArray, sample } from "../Util";
import { Culture } from "./Culture";
import { allAspects, allThings, Idea } from "./Idea";
import { Individual } from "./Individual";
import { Place } from "./Place";

export class Society {
    private members: Individual[] = [];
    constructor(cultures: Culture[], rulerNameIdeas: Idea[] = []) {
        const initialPop = 10;
        const home = new Place();
        this.members = genArray(initialPop, () => new Individual(
            [ sample(allAspects), sample(allAspects), sample(allThings) ],
            home,
            "farmer",
            sample(cultures),
        ));

        this.members.unshift(
            new Individual(
                rulerNameIdeas || [ sample(allAspects), sample(allAspects), sample(allThings) ],
                home,
                "monarch",
                sample(cultures),
            ),
        );
    }

    get individuals() {
        return this.members;
    }

    get leader() {
        return this.members[0];
    }
}
