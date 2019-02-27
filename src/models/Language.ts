// tslint:disable:object-literal-sort-keys
import { Konsole } from "../Konsole";
import { sample, sampleOnce } from "../Util";
import { Idea } from "./Idea";

interface IPhonemeGroup {
    roots: string[];
    stems: string[];
}

const simplePhonemes = {
    roots: [
        "kat", "phor", "lex", "mix", "shem", "flow",
        "eps", "lyr", "rax", "nel", "mor", "kor", "rus",
        "tar", "los", "mer", "ir",
    ],
    stems: ["ephon", "a", "ia", "o", "ion", "ea", "ah", "er", "ir", "lie"],
};

export class Language {
    private dictionary = this.makeDictionary();
    private get roots() { return this.syllables.roots; }
    private get stems() { return this.syllables.stems; }

    public constructor(
        public name: string,
        private syllables: IPhonemeGroup = simplePhonemes,
    ) {
        Konsole.log(`New language '${name}' created...`);
    }

    public generateName(): string {
        const root = this.generateRoot();
        return this.generateWord(root);
    }

    public write(idea: Idea): string {
        return this.dictionary[idea];
    }

    private makeDictionary(): { [key in Idea]: string } {
        const roots = {
            beauty: this.generateRoot(),
            knowledge: this.generateRoot(),
            labor: this.generateRoot(),
            power: this.generateRoot(),
            wealth: this.generateRoot(),
        };

        const dict = {
            courageous: this.generateWord(roots.power),
            honorable: this.generateWord(roots.power),
            powerful: this.generateWord(roots.power),
            might: this.generateWord(roots.power),
            haven: this.generateWord(roots.power),

            plentiful: this.generateWord(roots.wealth),
            shining: this.generateWord(roots.wealth),
            glittering: this.generateWord(roots.wealth),

            glimmering: this.generateWord(roots.beauty),
            glorious: this.generateWord(roots.beauty),
            inspirational: this.generateWord(roots.beauty),
            high: this.generateWord(roots.beauty),

            reliable: this.generateWord(roots.labor),
            steady: this.generateWord(roots.labor),
            hardworking: this.generateWord(roots.labor),
            smith: this.generateWord(roots.labor),

            brilliant: this.generateWord(roots.knowledge),
            keen: this.generateWord(roots.knowledge),
        };
        // Konsole.log("making dictionary", { dict });
        return dict;
    }

    private generateRoot(): string {
        return sampleOnce(this.roots);
    }

    private generateWord(root: string): string {
        return [ root, sample(this.stems) ].join("");
    }
}
