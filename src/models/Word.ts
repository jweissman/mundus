import { Idea } from "./Idea";

export type PartOfSpeech = "adjective" | "noun";

// tslint:disable-next-line: interface-over-type-literal
type PrimalWord = { kind: PartOfSpeech, idea: Idea, form: string };
export type Word = PrimalWord | { kind: PartOfSpeech, idea: Idea, form: string };

export function defineWord(idea: Idea, kind: PartOfSpeech, form: string): Word {
    return { idea, kind, form };
}
