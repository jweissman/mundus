import { sampleOnce } from "../Util";
import { allIdeas, Idea } from "./Idea";

export enum Activity {
    Farming = "farmer",
    Fighting = "fighter",
    Praying = "cleric",
}

const allActivities: Activity[] =
    Object.keys(Activity).map((key: string) => Activity[key as any] as Activity);

export class Life {
    public generateAspect(): Idea {
        return sampleOnce(allIdeas);
    }
    public generateActivity(): Activity {
        return sampleOnce(allActivities);
    }
}
