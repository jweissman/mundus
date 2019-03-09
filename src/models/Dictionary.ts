// tslint:disable: object-literal-sort-keys

import { sampleOnce, shuffle } from "../Util";
import { allKeyIdeas, Idea, KeyIdea } from "./Idea";
import { IPhonemeGroup } from "./IPhonemeGroup";
import { defineWord, Word } from "./Word";

type IDictionary = { [key in Idea]: Word };

const streamline = (str: string): string => {
    const streamlineVowels  = (s: string) => s.replace(/[aeiouy]+/gi, (v) => v.slice(0, 2));
    const streamlineRepeats = (s: string) => Array.from(new Set(s)).join("");
    // remove repeated characters
    return streamlineRepeats(streamlineVowels(str));
};

// const pickRoot = (phonemes: IPhonemeGroup): string => sampleOnce(phonemes.roots);
const pickForm = (phonemes: IPhonemeGroup, ...roots: string[]): string => {
    return streamline(
        // sampleOnce([
        [...roots, phonemes.stems[0]].join(phonemes.stems[0]),
            // sampleOnce(phonemes.stems)),
            // [ roots[0], sampleOnce(phonemes.stems) ].join(""),
        // ]),
    );
};

export function searchDictionary(dictionary: IDictionary, target: Idea): Word {
    return dictionary[target];
}

export function makeDictionary(phonemes: IPhonemeGroup, randomize: boolean = false): IDictionary {
    // const root = () => pickRoot(phonemes);
    const form = (...rts: string[]) => pickForm(phonemes, ...rts);
    const word = defineWord;

    const suffix = {
        adjective: phonemes.leaves[0], // sampleOnce(phonemes.leaves),
        noun: phonemes.leaves[1], // sampleOnce(phonemes.leaves),
    };
    const noun = (idea: Idea, f: string) => word(idea, "noun",
        streamline([f, suffix.noun].join("")),
    );
    const adj = (idea: Idea, f: string) => word(idea, "adjective",
        streamline([f, suffix.adjective].join("")),
    );

    let theRoots = (phonemes.roots);
    if (randomize) { theRoots = shuffle(theRoots); }
    // zip to object, so that we don't repeat roots
    const roots: { [key in KeyIdea]: string } = allKeyIdeas.reduce((obj: any, k: any, i: number) =>
        ({ ...obj, [k]: theRoots[i] }), {});

    const powerForms = {
        aurochs: form(roots.power, roots.beauty),
        courage: form(roots.power, roots.labor),
        honor: form(roots.power, roots.wealth),
        might: form(roots.power, roots.knowledge),
        haven: form(roots.power, roots.nature),
    };

    const wealthForms = {
        cattle: form(roots.wealth, roots.nature),
        plenty: form(roots.wealth, roots.labor),
        shine: form(roots.wealth, roots.power),
        glitter: form(roots.wealth, roots.beauty),
    };

    const beautyForms = {
        gift: form(roots.beauty, roots.labor),
        glimmer: form(roots.beauty, roots.power),
        glory: form(roots.beauty, roots.nature),
        inspiration: form(roots.beauty, roots.wealth),
        height: form(roots.beauty, roots.wealth),
        beauty: roots.beauty,
    };

    const forms = {
        ...powerForms,
        ...wealthForms,
        ...beautyForms,
        need: form(roots.labor),
        reliability: form(roots.labor),
        steadiness: form(roots.labor),
        energy: form(roots.labor, roots.power),

        ice: form(roots.nature),
        stillness: form(roots.nature),
        quiet: form(roots.nature),
        journey: form(roots.nature),
        brilliance: form(roots.nature),
        sharpness: form(roots.nature, roots.power),

        time: form(roots.power, roots.labor),
    };

    const dict: { [key in Idea]: Word } = {
        aurochs: noun("aurochs", forms.aurochs),
        power: noun("power", roots.power),
        powerful: adj("powerful", form(roots.power)),
        wild: adj("wild", form(forms.aurochs)),
        courage: noun("courage", forms.courage),
        courageous: adj("courageous", form(forms.courage)),
        honor: noun("honor", forms.honor),
        honorable: adj("honorable", form(forms.honor)),
        might: noun("might", forms.might),
        mighty: adj("mighty", form(forms.might)),
        haven: noun("haven", forms.haven),
        careful: adj("careful", form(forms.haven)),

        wealth: noun("wealth", roots.wealth),
        wealthy: adj("wealthy", form(roots.wealth)),
        cattle: noun("cattle", forms.cattle),
        tame: adj("tame", form(forms.cattle)),
        plenty: noun("plenty", forms.plenty),
        plentiful: adj("plentiful", form(forms.plenty)),
        shine: noun("shine", forms.shine),
        shining: adj("shining", form(forms.shine)),
        glitter: noun("glitter", forms.glitter),
        glittering: adj("glitter", form(forms.glitter)),

        beauty: noun("beauty", roots.beauty),
        beautiful: adj("beautiful", form(roots.beauty)),
        gift: noun("gift", forms.gift),
        blessed: adj("blessed", form(forms.gift)),
        glimmer: noun("glimmer", forms.glimmer),
        glimmering: adj("glimmering", form(forms.glimmer)),
        glory: noun("glory", forms.glory),
        glorious: adj("glorious", form(forms.glory)),
        inspiration: noun("inspiration", forms.inspiration),
        inspiring: adj("inspiring", form(forms.inspiration)),
        height: noun("height", forms.height),
        elevated: adj("elevated", form(forms.height)),
        humble: noun("humble", form(forms.height)),
        humility: adj("humility", form(forms.height)),

        need: noun("need", forms.need),
        desperate: adj("desperate", form(forms.need)),
        labor: noun("labor", roots.labor),
        hardworking: adj("hardworking", form(roots.labor)),
        reliability: noun("reliability", forms.reliability),
        reliable: adj("reliable", form(forms.reliability)),
        steadiness: noun("steadiness", forms.steadiness),
        steady: adj("steady", form(forms.steadiness)),
        energy: noun("energy", forms.energy),
        industrious: adj("industrious", form(forms.energy)),

        ice: noun("ice", forms.ice),
        cold: adj("cold", form(forms.ice)),
        journey: noun("journey", forms.journey),
        vast: adj("vast", form(forms.journey)),
        stillness: noun("stillness", forms.stillness),
        still: adj("still", form(forms.stillness)),
        quiet: noun("quiet", forms.quiet),
        silent: adj("silent", form(forms.quiet)),
        brilliance: noun("brilliance", forms.brilliance),
        brilliant: adj("brilliant", form(forms.brilliance)),
        sharpness: noun("sharpness", forms.sharpness),
        sharp: adj("sharp", form(forms.sharpness)),

        yew: noun("yew", roots.nature),
        forest: noun("forest", form(roots.nature)),
        mountain: noun("forest", form(forms.height)),
        // sun: word('sun', 'noun', form(roots.nature)),

        farmer: noun("farmer", form(roots.nature, forms.cattle)),
        fighter: noun("fighter", form(forms.stillness, forms.sharpness)),
        horse: noun("horse", form(forms.energy, forms.reliability)),
        birch: noun("birch", form(roots.nature, forms.ice)),

        year: noun("year", form(forms.time, roots.nature)),
        day: noun("day", form(forms.time, forms.reliability)),
        light: noun("light", form(roots.nature, forms.height)),

        knowledge: noun("knowledge", roots.knowledge),
        nature: noun("nature", roots.nature),
    };
    // Konsole.log(`made the dictionary for ${this.name}`, { dict });
    return dict;
}
