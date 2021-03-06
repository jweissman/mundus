import { Engine } from "./Engine";
import { Idea } from "./models/Idea";

export interface IGameConfig {
    worldNameIdeas?: Idea[];
    rulerNameIdeas?: Idea[];
}

export default class Game {
    private engine: Engine;

    constructor() {
        this.engine = new Engine();
    }

    public play(): string {
        return [
            this.history(),
            this.heroJourney(),
        ].join("\r\n");
    }

    public history(): string {
        let message = "HISTORY. ";
        message += "Let me tell you about the history of our world, ";
        // message += this.engine.world.describe();
        message += this.engine.narrate();
        message += ". In the beginning Eru (One) created Luminous (Light) and Sonus (Music)...";
        // message += "\r\n" + this.heroJourney();
        return message;
    }

    public heroJourney(): string {
        let message = "JOURNEY. ";
        const person = this.engine.exampleIndividual();
        const place = this.engine.exampleLocation();
        message += `I am ${person.description}, `;
        message += `and I am on a journey to ${place.description}. `;
        message += "Let's go! ";
        const anotherPlace = this.engine.exampleLocation();
        message += `We will visit ${anotherPlace.description}. `;
        return message;
    }
}
