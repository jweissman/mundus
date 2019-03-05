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

    public play(): string {
        const person = this.engine.exampleIndividual();
        const place = this.engine.exampleLocation();
        let message = `I am ${person.description}, `;
        message += `and I am on a journey to ${place.description}. `;
        message += "Let's go! ";
        const anotherPlace = this.engine.exampleLocation();
        message += `First we will visit ${anotherPlace.description}. `;
        return message;
    }
}
