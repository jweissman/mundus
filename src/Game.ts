import { Engine } from "./Engine";
import { Konsole } from "./Konsole";
import { Idea } from "./models/Idea";

export interface IGameConfig {
    worldNameIdeas?: Idea[];
}

export default class Game {
    private engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    public play(): any {
        this.log(this.engine.narrate());

        const person = this.engine.exampleIndividual();
        this.log("I am", person.description);

        const place = this.engine.exampleLocation();
        this.log("I am on a journey to", place.description);

        this.log("Let's go!!!");
        // while(true)
        for (let i = 0; i < 10; i++) {
            const nextPlace = this.engine.exampleLocation();
            this.log("We visit ", nextPlace.description, "...");
        }
    }

    private log(...args: any[]) { Konsole.log(...args); }
}
