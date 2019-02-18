import { sample } from "../Util";
import { Idea } from "./Idea";
import { Language } from "./Language";
import { allAspects } from "./Life";

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
    constructor(
        public name: string,
        private aspect: Idea = sample(allAspects),
        private feature: Feature = sample(allFeatures),
    ) { }

    get description() {
        return ["the", this.aspect, this.feature].join(" ");
    }

    // public sayName(language: Language): string {
        // return language.write(this.name);
        // throw new Error("Method not implemented.");
    // }
}
