import { Life } from "./Life";

export namespace Cartography {
    enum Feature {
        Bridge,
        Atoll,
        Vale,
        Hill,
        Dale,
        Crest,
        Plain,
        Taiga,
        Wetland,
        Marsh,
        Swamp,
        Valley
    }
    export class Place {
        aspect: Life.Aspect;
        feature: Feature;
    }
}
