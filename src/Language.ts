import { Life } from "./Life";
import { sample } from "./Util";
// language model
export namespace Language {
    export type Word = {
        // kind: "name"
        writtenForm: String;
        meaning: Life.Aspect;
    };
    export class System {
        generateName(meaning: Life.Aspect = Life.Aspect.Courage): Word {
            let syllables = ['eps', 'ly', 'ra', 'ne', 'mo', 'ko', 'rus', 'ta', 'los', 'me', 'i'];
            let writtenForm = [
                sample(syllables),
                sample(syllables)
            ].join('');
            return {
                writtenForm,
                meaning
            };
        }
        write(word: Word): String {
            return word.writtenForm;
        }
    }
}
