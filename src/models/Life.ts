import { sample } from "../Util";
import { allAspects, allProfessions, Aspect, Idea, Profession } from "./Idea";

export class Life {
    public static natural: Life = new Life();
    constructor(private professions: Profession[] = allProfessions) {
    }

    public generateAspect(
        profession: Profession = this.generateActivity(
    )): Aspect {
        let aspects: Aspect[] = [ "humble" ];
        switch (profession) {
            case "farmer": aspects = ["silent"]; break;
            case "fighter": aspects = ["sharp", "wealthy", "desperate"]; break;
            default: break;
        }
        return sample(aspects);
    }
    public generateActivity(): Profession {
        return sample(this.professions);
    }
}
