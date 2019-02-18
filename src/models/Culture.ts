import { Konsole } from "../Konsole";
import { sampleOnce } from "../Util";
import { Place } from "./Cartography";
import { allIdeas, Idea } from "./Idea";
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
        return sampleOnce([
            Idea.Glory,
            Idea.Steady,
            Idea.Shiny,
        ]);
    }

    public bestowFamilyName(individual: Individual): Idea {
        return sampleOnce([
            // Idea.Smith,
            Idea.Safety,
            Idea.Strength,
        ]);
    }

    public bestowName(entity: Place): Idea {
        return sampleOnce(allIdeas);
    }

    public say(word: Idea): string {
        // Konsole.log("trying to say the word", { word });
        return this.language.write(word);
    }
}
