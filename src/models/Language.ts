// tslint:disable: object-literal-sort-keys

import { capitalize, sampleOnce } from "../Util";
import { makeDictionary } from "./Dictionary";
import { allAspects, allThings, Idea } from "./Idea";
import { Word } from "./Word";

const simplePhonemes = {
    roots: [
        "lyr", "ith", "mel", "kath", "phor", "lexu", "mixa", "loruz",
        // "shemra", "flowga",
        // "epsul", "lyrah", "raxah", "nella", "morphir", "korel", "russo",
        // "tarel", "lossa", "mer", "iraz",
        // "wunju", "gebo", "ansun", "ijuz", "absa",
        // "hagalaz", "jera", "ehwaz", "rado",
        // "mannaz", "laguz", "ishaz",
    ],
    stems: [
        "i", "e",
        // "ephon", "a", "ia", "o", "ion", "ea", "ah", "er", "ir", "lie",
        // "nan", "az", "giz", "qi", "lu", "mu", "ku", "ra", "ie", "eon",
    ],
    leaves: [
        "ie", "il", "el", "al",
        // "ia", "ion", "a",
    ],
};

const latinatePhonemes = {
    roots: [
        "pulchr", "aqu", "industr", "chron", "ge", "phot", "tant", "natur", "audi", "circ", "jur",
        "manu", "pac", "aut", "graph", "ae", "aeth", "hydr", "log",
        "phil", "phon", "tel", "syn", "schem", "voc", "ex", "in",
        "bibl",
    ],
    stems: [
        "ic", "io", "a", "al", "io", "ical", "ite", "itive", "ion",
        "est",
    ],
    leaves: [
        "ae", "am", "eon", "o", "or", "ior", "yr", "os", "on", "e", "ys", "is", "ie",
    ],
};

export class Language {
    public static common = new Language("Common");
    public dictionary: { [key in Idea]: Word } = makeDictionary(
        sampleOnce([latinatePhonemes, simplePhonemes]),
    );

    public constructor(
        public name: string,
    ) {}

    public generateName(): Word[] {
        const theName = sampleOnce([
            [ this.adjective(), this.noun() ],
            [ this.noun() ],
            [ this.adjective() ],
        ]);
        return theName;
    }

    public write(idea: Idea): string {
        return this.dictionary[idea].form;
    }

    public say(ideas: Idea[], delim= " "): string {
        return ideas.map((idea: Idea) => capitalize(this.write(idea))).join(delim);
    }

    public lookup(idea: Idea): Word { return this.dictionary[idea]; }

    private adjective(): Word {
        return this.lookup(sampleOnce(allAspects));
    }

    private noun(): Word {
        return this.lookup(sampleOnce(allThings));
    }
}
