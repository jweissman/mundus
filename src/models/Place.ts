import { Konsole } from "../Konsole";
import { capitalize, sample } from "../Util";
import { Culture } from "./Culture";
import { allAspects, allIdeas, allLandscapeFeatures, Aspect, Idea, LandscapeFeature } from "./Idea";

// export const allFeatures: Feature[] = Object.keys(Feature).map((key: string) => Feature[key as any] as Feature);

export class Place {
    // static eden = new Place();
    private givenName: Idea;

    constructor(
        private culture: Culture = Culture.major,
        private aspect: Aspect = sample(allAspects),
        private feature: LandscapeFeature = sample(allLandscapeFeatures),
    ) {
        this.givenName = culture.bestowName(this);
    }

    get description() {
        return [
            capitalize(this.culture.say(this.givenName)),
            `(${this.givenName})`,
            "the", this.aspect, this.feature,
        ].join(" ");
    }
}
