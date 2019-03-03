import { genArray, sampleOnce } from "../Util";
import { Culture } from "./Culture";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { Place } from "./Place";

export class Society {
    private members: Individual[] = [];
    constructor(cultures: Culture[]) {
        const initialPop = 1;
        this.members = genArray(initialPop, () => new Individual(
            new Place(),
            "farmer",
            sampleOnce(cultures),
        ));
    }

    get individuals() {
        return this.members;
    }
}
