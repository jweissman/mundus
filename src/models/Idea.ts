const primalThings = <const>[
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

const landscapeFeatures = <const>[
    "forest",
    "mountain",
    // "marsh",
    // "valley",
    // "hill",
    // "crest",
    // "ridge",
    // "plain",
    // "taiga",
]
export type LandscapeFeature = typeof landscapeFeatures[number];

export const allLandscapeFeatures: LandscapeFeature[] = [...landscapeFeatures]

const professions = <const>[
    "farmer",
    "fighter",
    // "cleric",
    // "healer",
]
export type Profession = typeof professions[number];
export const allProfessions: Profession[] = [...professions];

const things = <const>[
    "courage",
    "honor",
    "power",
    "might",
    "haven",
    // "cattle",
    "wealth",
    "plenty",
    "shine",
    "glitter",
    // "gift",
    "glimmer",
    "glory",
    "inspiration",
    "height",
    "beauty",
    "humility",
    // "need",
    "labor",
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
];

export type Thing =
    PrimalThing |
    LandscapeFeature |
    Profession |
    typeof things[number]
    ;

export const allThings: Thing[] = [
    ...primalThings,
    ...landscapeFeatures,
    ...professions,
    ...things
]

const aspects = <const>[
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
    "sharp"
]

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
