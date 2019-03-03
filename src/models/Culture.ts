import { sampleOnce } from "../Util";
import { Place } from "./Place";
import { allIdeas, Idea, allThings, allAspects, Profession, allLandscapeFeatures } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";

export class Culture {
    
    static major: Culture = new Culture();
    constructor(private life: Life = Life.natural, private language: Language = Language.common) { }

    public bestowIndividualAspect(profession: Profession = this.bestowProfession()): Idea {
        return this.life.generateAspect(profession);
    }

    public bestowProfession(): Profession {
        return this.life.generateActivity();
    }

    public bestowGivenName(individual: Individual): Idea {
        return sampleOnce([
            ...allAspects,
        ])
    }

    bestowMidName(individual: Individual): any {
        return sampleOnce([
            "humble",
            "steady",
            "industrious",
        ]); //allAspects);
    }

    public bestowFamilyName(individual: Individual): Idea {
        return sampleOnce(allThings);
    }

    public bestowName(entity: Place): Idea {
        return sampleOnce(allIdeas);
    }

    public say(word: Idea): string {
        return this.language.write(word);
    }
}
