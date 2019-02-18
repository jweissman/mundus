import { Engine } from "./Engine";
import { Konsole } from "./Konsole";

export interface IGameConfig {
    worldName?: string;
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
        this.log("I hail from", place.description);

        this.log("Would you help us build a village?");
    }

    private log(...args: any[]) { Konsole.log(...args); }
}
