import { Life } from "./Life";
import { Language } from "./Language";
import { Individual } from "./Individual";
export namespace Culture {
    export class System {
        constructor(private life: Life.System, private language: Language.System) { }
        bestowAspect(): Life.Aspect {
            return this.life.generateAspect();
        }
        bestowProfession(): Life.Profession {
            return this.life.generateProfession();
        }
        bestowGivenName(individual: Individual) {
            return this.language.generateName();
        }
        bestowFamilyName(individual: Individual) {
            return this.language.generateName();
        }
        say(word: Language.Word) {
            return this.language.write(word);
        }
    }
}
