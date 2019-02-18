import { capitalize } from "../Util";
import { Culture } from "./Culture";
import { Idea } from "./Idea";
import { Activity } from "./Life";

// 'psychological' model
export class Individual {
    private forename: Idea;
    private surname: Idea;
    private aspect: Idea;
    private job: Activity;
    constructor(private culture: Culture) {
        this.aspect = culture.bestowAspect();
        this.job = culture.bestowProfession();
        this.forename = culture.bestowGivenName(this);
        this.surname = culture.bestowFamilyName(this);
    }
    get description(): string {
        const elements = [this.forename, this.surname];
        const name = elements.map((word) =>
            capitalize(
                this.culture.say(word),
            ),
        ).join(" ");
        return `${name} (${this.forename} ${this.surname}) the ${this.aspect} ${this.job}`;
    }
    public say(idea: Idea): string {
        return this.culture.say(idea);
    }
}
