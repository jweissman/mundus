import { Konsole } from "../Konsole";
import { capitalize, sampleOnce } from "../Util";
import { Culture } from "./Culture";
import { allAspects, allIdeas, allLandscapeFeatures, Aspect, Idea, LandscapeFeature } from "./Idea";

// export const allFeatures: Feature[] = Object.keys(Feature).map((key: string) => Feature[key as any] as Feature);

export class Place {
    private givenName: Idea;

    constructor(
        private culture: Culture = Culture.major,
        private aspect: Aspect = sampleOnce(allAspects),
        private feature: LandscapeFeature = sampleOnce(allLandscapeFeatures),
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
