import { capitalize } from "../Util";
import { Culture } from "./Culture";
import { Idea, Profession } from "./Idea";
import { Place } from "./Place";

// 'psychological' model
export class Individual {
    private forename: Idea;
    private midname: Idea;
    private surname: Idea;
    private aspect: Idea;

    constructor(
        private home: Place,
        private job: Profession = Culture.major.bestowProfession(),
        private culture: Culture = Culture.major,
    ) {
        this.aspect = culture.bestowIndividualAspect(this.job);
        this.forename = culture.bestowGivenName(this);
        this.midname = culture.bestowMidName(this);
        this.surname = culture.bestowFamilyName(this);
    }

    get name(): Idea[] {
        const elements = [
            this.forename,
            this.midname,
            this.surname,
        ];
        return elements;
    }

    get description(): string {
        const name = this.name.map((word) =>
            capitalize(
                this.culture.say(word),
            ),
        ).join(" ");
        const meaning = this.name.join(" ");
        const title = [this.aspect, this.job].join(" ");
        const origin = this.home.description;
        return `${name} (${meaning}) the ${title} of ${origin}`;
    }

    public say(idea: Idea): string {
        return this.culture.say(idea);
    }
}
