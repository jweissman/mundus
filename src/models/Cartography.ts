import { Konsole } from "../Konsole";
import { capitalize, sampleOnce } from "../Util";
import { Culture } from "./Culture";
import { allIdeas, Idea } from "./Idea";

// enum FeatureKind {
//     Mountain = "mountain",
//     Sea = "sea",
// }

enum Feature {
    Atoll = "atoll",
    Vale = "vale",
    Hill = "hill",
    Dale = "dale",
    Crest = "crest",
    Ridge = "ridge",
    Plain = "plain",
    Taiga = "taiga",
    Marsh = "marsh",
    Swamp = "swamp",
    Valley = "valley",
}

export const allFeatures: Feature[] =
    Object.keys(Feature).map((key: string) => Feature[key as any] as Feature);

export class Place {
    private givenName: Idea;

    constructor(
        private culture: Culture,
        private aspect: Idea = sampleOnce(allIdeas),
        private feature: Feature = sampleOnce(allFeatures),
    ) {
        this.givenName = culture.bestowName(this);
        Konsole.log("a new place was given a name", { name: this.givenName });
    }

    get description() {
        return [
            capitalize(this.culture.say(this.givenName)),
            `(${this.givenName})`,
            "the", this.aspect, this.feature,
        ].join(" ");
    }
}
