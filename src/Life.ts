import { sample } from "./Util";

// export namespace Mundus {
export namespace Life {
    // major groupings of aspects...?
    enum Goal {
        Power,
        Wealth,
        Beauty,
        Knowledge,
        Labor
    }
    // 'adjective'
    export enum Aspect {
        // power
        Courage = 'courageous',
        Honor = 'honorable',
        Potency = 'powerful',
        Strength = 'mighty',
        // wealth
        Plenty = 'plentiful',
        Shiny = 'shining',
        Glitter = 'glittering',
        // beauty
        Glimmer = 'glimmering',
        Glory = 'glorious',
        Inspiring = 'inspirational',
        // labor
        Reliable = 'reliable',
        Steady = 'steady',
        Hardworking = 'hard-working'
    }
    // 'job'
    export enum Profession {
        Farming = 'farmer',
        Fighting = 'fighter'
    }
    export class System {
        constructor() {
            // ...
        }
        generateAspect(): Aspect {
            return sample(this.allAspects);
        }
        generateProfession(): Profession {
            return sample(this.allProfessions);
        }
        private get allAspects(): Array<Aspect> {
            return Object.keys(Aspect).map((key: string) => Aspect[key as any] as Aspect);
        }
        private get allProfessions(): Array<Profession> {
            return Object.keys(Profession).map((key: string) => Profession[key as any] as Profession);
        }
    }
}
