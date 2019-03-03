import { sampleOnce } from "../Util";
import { Idea, allAspects, allProfessions, Profession, Aspect } from "./Idea";

export class Life {
    static natural: Life = new Life();
    constructor(private professions: Profession[] = allProfessions) {
    }

    public generateAspect(
        profession: Profession = this.generateActivity(
    )): Aspect {
        let aspects: Aspect[] = [ 'humble' ];
        switch(profession) {
            case 'farmer': aspects = ['silent']; break;
            case 'fighter': aspects = ['sharp', 'wealthy', 'desperate']; break;
            default: break;
        }
        return sampleOnce(aspects);
    }
    public generateActivity(): Profession {
        return sampleOnce(this.professions);
    }
}
