export enum Idea {
    // power
    Courage = "courageous",
    Honor = "honorable",
    Dominance = "powerful",
    Strength = "might",
    Safety = "haven",

    // wealth
    Plenty = "plentiful",
    Shiny = "shining",
    Glitter = "glittering",

    // beauty
    Glimmer = "glimmering",
    Glory = "glorious",
    Inspiring = "inspirational",
    Tall = "high",

    // labor
    Reliable = "reliable",
    Steady = "steady",
    Hardworking = "hardworking",

    // knowledge
    Bright = "brilliant",
    Sharp = "keen",
}

export const allIdeas: Idea[] =
    Object.keys(Idea).map((key: string) => Idea[key as any] as Idea);
