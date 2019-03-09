import { makeDictionary, searchDictionary } from "./Dictionary";

describe("Dictionary", () => {
    it("can construct a language", () => {
        const phonemes = {
            leaves: ["n", "st"],
            roots: [ "ta", "ba", "ka", "ma", "la", "fa" ],
            stems: ["o", "ie"],
        };
        const dict = makeDictionary(phonemes);
        console.log("DICTIONARY", { dict });
        expect(searchDictionary(dict, "yew").form).toEqual("fast");
        expect(searchDictionary(dict, "quiet").form).toEqual("faost");
        expect(searchDictionary(dict, "light").form).toEqual("faotls");
    });
});
