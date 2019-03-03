import { sampleOnce } from "../Util";
import { allIdeas, Idea, aspects } from "./Idea";

// type Activity = 'farmer' | 'fight'

export enum Activity {
    Farming = "farmer",
    Fighting = "fighter",
    Praying = "cleric",
    Healing = "healer",
    Teaching = "sage",
    Ruling = "king",
    Conquering = "soldier",
    Gambling = "gambler",
    Playing = "musician",
    Writing = "scribe",
}

const allActivities: Activity[] =
    Object.keys(Activity).map((key: string) => Activity[key as any] as Activity);

export class Life {
    public generateAspect(): Idea {
        // @ts-ignore
        return sampleOnce(aspects);
    }
    public generateActivity(): Activity {
        return sampleOnce(allActivities);
    }
}
