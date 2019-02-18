import { IGameConfig } from "./Game";
import { Individual } from "./models/Individual";
import { World } from "./models/World";

export class Engine {
    private world: World;
    static get version() { return "1.0.0"; }
    constructor(private options: IGameConfig = {}) {
        this.world = new World(options.worldName || "Terra Incognita");
    }
    public narrate(): string {
        return this.world.describe();
    }
    public exampleIndividual(): Individual {
        return this.world.randomPerson();
    }
    public exampleLocation(): any {
        return this.world.randomPlace();
    }
}