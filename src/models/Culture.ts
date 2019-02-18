import { sample } from "../Util";
import { Idea } from "./Idea";
import { Individual } from "./Individual";
import { Language } from "./Language";
import { Activity, Life } from "./Life";

export class Culture {
    constructor(private life: Life, private language: Language) { }

    public bestowAspect(): Idea {
        return this.life.generateAspect();
    }

    public bestowProfession(): Activity {
        return this.life.generateActivity();
    }

    public bestowGivenName(individual: Individual): Idea {
        return sample([
            Idea.Glory,
            Idea.Steady,
            Idea.Shiny,
        ]);
    }

    public bestowFamilyName(individual: Individual): Idea {
        return sample([
            Idea.Smith,
            Idea.Safety,
            Idea.Strength,
        ]);
    }

    public say(word: Idea): string {
        return this.language.write(word);
    }
}
