import { sample } from "../Util";
import { Idea } from "./Idea";

export const allAspects: Idea[] =
    Object.keys(Idea).map((key: string) => Idea[key as any] as Idea);

export enum Activity {
    Farming = "farmer",
    Fighting = "fighter",
    Praying = "cleric",
}

const allActivities: Activity[] =
    Object.keys(Activity).map((key: string) => Activity[key as any] as Activity);

export class Life {
    public generateAspect(): Idea {
        return sample(allAspects);
    }
    public generateActivity(): Activity {
        return sample(allActivities);
    }
}
// }
