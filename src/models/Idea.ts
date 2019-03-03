// @ts-ignore
const primalThings = <const> ["aurochs", "yew", "ice", "cattle", "need", "gift"];
type PrimalThing = typeof primalThings[number];

// @ts-ignore
export const things = <const>[
    // ...primalThings,
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
    "sharpness"
    // emptiness...
];

export type Thing =
    PrimalThing |
    typeof things[number]
    ;

// @ts-ignore
export const aspects = <const>[
    "wild",
    
    "courageous",
    "honorable",
    "powerful",
    "mighty",
    "careful",

    // "cattle",
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

type Aspect = typeof aspects[number];

// okay, so ideas are phrased in noun form, can be 'verbalized' or 'adjectivalized' etc
//type PrimalIdea =
//    "aurochs" |
//    "yew" |
//    "ice" |
//    "cattle" |
//    "need" |
//    "gift";

export type Idea =
    PrimalThing |
    Thing |
    Aspect
    ;

export const allIdeas: Idea[] = [
    ...primalThings,
    ...things,
    ...aspects,
    //"courage",
    //"honor",
    //"stillness",
    //"journey",
];
