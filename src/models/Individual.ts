import { capitalize, sample } from "../Util";
import { Culture } from "./Culture";
import { allAspects, allThings, Idea, Profession } from "./Idea";
import { Place } from "./Place";

// 'psychological' model
export class Individual {
    private forename: Idea;
    private midname: Idea;
    private surname: Idea;
    private aspect: Idea;

    constructor(
        private nameIdeas: Idea[] = [],
        private home: Place,
        private job: Profession = Culture.major.bestowProfession(),
        private culture: Culture = Culture.major,
    ) {
        this.aspect = culture.bestowIndividualAspect(this.job);

        const [ forename, midname, surname ] = culture.bestowIndividualName(this, {
            forename: nameIdeas[0] || sample(allAspects),
            midname: nameIdeas[1] || sample(allAspects),
            surname: nameIdeas[2] || sample(allThings),
        });
        this.forename = forename;
        this.midname  = midname;
        this.surname  = surname;
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
