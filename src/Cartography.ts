import { Life } from "./Life";
import { sample } from "./Util";

export namespace Cartography {
    enum Feature {
        Bridge = 'bridge',
        Atoll = 'atoll',
        Vale = 'vale',
        Hill = 'hill',
        Dale = 'dale',
        Crest = 'crest',
        Ridge = 'ridge',
        Plain = 'plain',
        Taiga = 'taiga',
        Lowland = 'lowland',
        Wetland = 'wetland',
        Marsh = 'marsh',
        Swamp = 'swamp',
        Valley = 'valley',
    }

    const allFeatures: Array<Feature> =
        Object.keys(Feature).map((key: string) => Feature[key as any] as Feature);

    export class Place {
        constructor(
            // private name
            private aspect: Life.Aspect = sample(Life.allAspects),
            private feature: Feature = sample(allFeatures)
        ) {}


        get name() {
            return ['the', this.aspect, this.feature].join(' ')
        }
    }
}
