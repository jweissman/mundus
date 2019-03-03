// tslint:disable:object-literal-sort-keys
import { Konsole } from "../Konsole";
import { sample, sampleOnce } from "../Util";
import { Idea, allIdeas, things, Thing, aspects } from "./Idea";

interface IPhonemeGroup {
    roots: string[];
    stems: string[];
}

// @ts-ignore
const simplePhonemes = {
    roots: [
        "kath", "phor", "lexu", "mixa", "shemra", "flowga",
        "epsul", "lyrah", "raxah", "nella", "morphir", "korel", "russo",
        "tarel", "lossa", "mer", "iraz",
        "wunju", "gebo", "ansun", "ijuz", "absa",
        "hagalaz", "jera", "ehwaz", "rado",
        "mannaz", "laguz", "ishaz",
    ],
    stems: [
        "ephon", "a", "ia", "o", "ion", "ea", "ah", "er", "ir", "lie",
        "nan", "az", "giz",
    ],
};

// primal words are only nouns...
type PrimalWord = { kind: "noun", idea: Idea, form: string }
type Word = PrimalWord | { kind: "adjective" | "noun", idea: Idea, form: string }

export class Language {
    private dictionary: { [key in Idea]: Word } = this.makeDictionary();
    private get roots() { return this.syllables.roots; }
    private get stems() { return this.syllables.stems; }

    public constructor(
        public name: string,
        private syllables: IPhonemeGroup = simplePhonemes,
    ) {
        Konsole.log(`New language '${name}' created...`);
    }

    public generateName(): Word[] {
        // const root = this.generateRoot();
        let theName = sampleOnce([
            [ this.adjective(), this.noun() ],
            [ this.noun() ],
            [ this.adjective() ],
        ]);
        console.log("Created a name: ", { theName })
        return theName;
    }
    public write(idea: Idea): string { //idea: Idea): string {
        console.log("ASKED TO WRITE DOWN IDEA", { idea })
        return this.dictionary[idea].form;
    }

    public say(ideas: Idea[], delim=' '): string {
        return ideas.map((idea: Idea) => this.write(idea)).join(delim);
    }

    lookup(idea: Idea): Word { return this.dictionary[idea]; }

    private adjective(): Word {
        // @ts-ignore
        return this.lookup(sampleOnce(aspects));
    }

    private noun(): Word {
        // @ts-ignore
        return this.lookup(sampleOnce(things));
    }

    private word(idea: Idea, kind: 'noun' | 'adjective', form: string) {
        return { idea, kind, form };
    }


    private makeDictionary(): { [key in Idea]: Word } {
        const roots = {
            beauty: this.root(),
            knowledge: this.root(),
            labor: this.root(),

            power: this.root(),
            wealth: this.root(),
            nature: this.root(),
        };

        const forms = {
            aurochs: this.form(roots.power),
            courage: this.form(roots.power),
            honor: this.form(roots.power),
            might: this.form(roots.power),
            haven: this.form(roots.power),

            cattle: this.form(roots.wealth),
            plenty: this.form(roots.wealth),
            shine: this.form(roots.wealth),
            glitter: this.form(roots.wealth),

            gift: this.form(roots.beauty),
            glimmer: this.form(roots.beauty),
            glory: this.form(roots.beauty),
            inspiration: this.form(roots.beauty),
            height: this.form(roots.beauty),
            beauty: roots.beauty,

            need: this.form(roots.labor),
            reliability: this.form(roots.labor),
            steadiness: this.form(roots.labor),
            energy: this.form(roots.labor),

            ice: this.form(roots.nature),
            stillness: this.form(roots.nature),
            quiet: this.form(roots.nature),
            journey: this.form(roots.nature),
            brilliance: this.form(roots.nature),
            sharpness: this.form(roots.nature),
        }

        const dict: { [ key in Idea ]: Word } = {
            power: this.word('power', 'noun', roots.power),
            powerful: this.word('powerful', 'adjective', this.form(roots.power)),
            aurochs: this.word('aurochs', 'noun', forms.aurochs),
            wild: this.word('wild', 'adjective', this.form(forms.aurochs)),
            courage: this.word('courage', 'noun', forms.courage),
            courageous: this.word('courageous', 'adjective', this.form(forms.courage)),
            honor: this.word('honor', 'noun', forms.honor),
            honorable: this.word('honorable', 'adjective', this.form(forms.honor)),
            might: this.word('might', 'noun', forms.might),
            mighty: this.word('mighty', 'adjective', this.form(forms.might)),
            haven: this.word('haven', 'noun', forms.haven),
            careful: this.word('careful', 'adjective', this.form(forms.haven)),

            wealth: this.word('wealth', 'noun', roots.wealth),
            wealthy: this.word('wealthy', 'adjective', this.form(roots.wealth)),
            cattle: this.word('cattle', 'noun', forms.cattle),
            tame: this.word('tame', 'adjective', this.form(forms.cattle)),
            plenty: this.word('plenty', 'noun', forms.plenty),
            plentiful: this.word('plentiful', 'adjective', this.form(forms.plenty)),
            shine: this.word('shine', 'noun', forms.shine),
            shining: this.word('shining', 'adjective', this.form(forms.shine)),
            glitter: this.word('glitter', 'noun', forms.glitter),
            glittering: this.word('glitter', 'adjective', this.form(forms.glitter)),

            beauty: this.word('beauty', 'noun', roots.beauty),
            beautiful: this.word('beautiful', 'noun', this.form(roots.beauty)),
            gift: this.word('gift', 'noun', forms.gift),
            blessed: this.word('blessed', 'adjective', this.form(forms.gift)),
            glimmer: this.word('glimmer', 'noun', forms.glimmer),
            glimmering: this.word('glimmering', 'adjective', this.form(forms.glimmer)),
            glory: this.word('glory', 'noun', forms.glory),
            glorious: this.word('glorious', 'adjective', this.form(forms.glory)),
            inspiration: this.word('inspiration', 'noun', forms.inspiration),
            inspiring: this.word('inspiring', 'adjective', this.form(forms.inspiration)),
            height: this.word('height', 'noun', forms.height),
            elevated: this.word('elevated', 'adjective', this.form(forms.height)),

            need: this.word('need', 'noun', forms.need),
            desperate: this.word('desperate', 'adjective', this.form(forms.need)),
            labor: this.word('labor', 'noun', roots.labor),
            hardworking: this.word('hardworking', 'adjective', this.form(roots.labor)),
            reliability: this.word('reliability', 'noun', forms.reliability),
            reliable: this.word('reliable', 'adjective', this.form(forms.reliability)),
            steadiness: this.word('steadiness', 'noun', forms.steadiness),
            steady: this.word('steady', 'adjective', this.form(forms.steadiness)),
            energy: this.word('energy', 'noun', forms.energy),
            industrious: this.word('industrious', 'adjective', this.form(forms.energy)),

            ice: this.word('ice', 'noun', forms.ice),
            cold: this.word('cold', 'adjective', this.form(forms.ice)),
            journey: this.word('journey', 'noun', forms.journey),
            vast: this.word('vast', 'adjective', this.form(forms.journey)),
            stillness: this.word('stillness', 'noun', forms.stillness),
            still: this.word('still', 'adjective', this.form(forms.stillness)),
            quiet: this.word('quiet', 'noun', forms.quiet),
            silent: this.word('silent', 'adjective', this.form(forms.quiet)),
            brilliance: this.word('brilliance', 'noun', forms.brilliance),
            brilliant: this.word('brilliant', 'adjective', this.form(forms.brilliance)),
            sharpness: this.word('sharpness', 'noun', forms.sharpness),
            sharp: this.word('sharp', 'adjective', this.form(forms.sharpness)),

            yew: this.word('yew', 'noun', roots.nature),
            // sun: this.word('sun', 'noun', this.form(roots.nature)),
        };
        // Konsole.log("making dictionary", { dict });
        return dict;
    }

    private root(): string {
        return sampleOnce(this.roots);
    }

    private form(root: string): string {
        return sampleOnce([
            [ root, sampleOnce(this.stems) ],
            [ root.slice(0,-1), sampleOnce(this.stems) ],
            [ root.slice(0,-2), sampleOnce(this.stems) ],
            [ sampleOnce(this.stems), root.slice(0,-1) ],
        ]).join("");
    }
}
