import { Life } from "./Life";
import { Language } from "./Language";
import { Culture } from "./Culture";
// 'psychological' model
export class Individual {
    private forename: Language.Word;
    private surname: Language.Word;
    private aspect: Life.Aspect;
    private job: Life.Profession;
    constructor(private culture: Culture.System) {
        this.aspect = culture.bestowAspect();
        this.job = culture.bestowProfession();
        this.forename = culture.bestowGivenName(this);
        this.surname = culture.bestowFamilyName(this);
    }
    get name(): String {
        let elements = [this.forename, this.surname];
        let name = elements.map(word => this.culture.say(word)).join(' ');
        return `${name} the ${this.aspect} ${this.job}`;
    }
}
