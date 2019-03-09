import { sampleOnce } from "../Util";
import { allAspects, allIdeas, allThings, Idea, Profession } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Life } from "./Life";
import { Place } from "./Place";

export class Culture {
    public static major: Culture = new Culture();
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
        ]);
    }

    public bestowMidName(individual: Individual): Idea {
        return sampleOnce([
            "humble",
            "steady",
            "industrious",
        ]); // allAspects);
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

    public bestowIndividualName(
        individual: Individual,
        nameOpts: {
            forename?: Idea,
            midname?: Idea,
            surname?: Idea,
        } = {},
    ) {
        const { forename, midname, surname } = nameOpts;
        return [
            forename || this.bestowGivenName(individual),
            midname  || this.bestowMidName(individual),
            surname  || this.bestowFamilyName(individual),
        ];
    }
}
