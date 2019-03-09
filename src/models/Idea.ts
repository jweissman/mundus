// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
const primalThings = <const> [
    "aurochs",
    "cattle",
    "horse",

    "yew",
    "birch",

    "ice",

    "need",
    "gift",

    "year",
    "day",
];
type PrimalThing = typeof primalThings[number];

// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
const keyIdeas = <const> [
    "beauty",
    "knowledge",
    "labor",
    "power",
    "wealth",
    "nature",
]
export type KeyIdea = typeof keyIdeas[number];
export const allKeyIdeas: KeyIdea[] = [...keyIdeas];

// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
const landscapeFeatures = <const> [
    "forest",
    "mountain",
    // "marsh",
    // "valley",
    // "hill",
    // "crest",
    // "ridge",
    // "plain",
    // "taiga",
];
export type LandscapeFeature = typeof landscapeFeatures[number];

export const allLandscapeFeatures: LandscapeFeature[] = [...landscapeFeatures];

// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
const professions = <const> [
    "farmer",
    "fighter",
    // "cleric",
    // "healer",
];
export type Profession = typeof professions[number];
export const allProfessions: Profession[] = [...professions];

// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
const things = <const> [
    "courage",
    "honor",
    // "power",
    "might",
    "haven",
    // "cattle",
    // "wealth",
    "plenty",
    "shine",
    "glitter",
    "light",
    // "gift",
    "glimmer",
    "glory",
    "inspiration",
    "height",
    // "beauty",
    "humility",
    // "need",
    // "labor",
    "reliability",
    "steadiness",
    "energy",
    // "ice",
    "stillness",
    "quiet",
    "journey",
    "brilliance",
    "sharpness",
    // emptiness...
    // "yew",
    // "spirit",
];

export type Thing =
    PrimalThing |
    KeyIdea |
    LandscapeFeature |
    Profession |
    typeof things[number]
    ;

export const allThings: Thing[] = [
    ...primalThings,
    ...keyIdeas,
    ...landscapeFeatures,
    ...professions,
    ...things,
];

// @ts-ignore
// tslint:disable-next-line: no-angle-bracket-type-assertion
const aspects = <const> [
    "wild",
    "courageous",
    "honorable",
    "powerful",
    "mighty",
    "careful",

    "tame",
    "wealthy",
    "plentiful",
    "shining",
    "glittering",

    "blessed",
    "glimmering",
    "glorious",
    "inspiring",
    "elevated",
    "beautiful",
    "humble",

    "desperate",
    "hardworking",
    "reliable",
    "steady",
    "industrious",

    "cold",
    "still",
    "silent",
    "vast",
    "brilliant",
    "sharp",
    // "ethereal",
];

export type Aspect = typeof aspects[number];
export const allAspects: Aspect[] = [...aspects];

export type Idea =
    PrimalThing |
    LandscapeFeature |
    Thing |
    Aspect
    ;

export const allIdeas: Idea[] = [
    ...primalThings,
    ...things,
    ...aspects,
];
