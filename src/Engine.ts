import { IGameConfig } from "./Game";
import { Individual } from "./models/Individual";
import { World } from "./models/World";

export class Engine {
    public world: World;
    static get version() { return "1.0.0"; }
    constructor(private options: IGameConfig = {}) {
        this.world = new World(options.worldNameIdeas, options.rulerNameIdeas);
    }
    public narrate(): string {
        let narrative = `This land is ${this.world.describe()}.`;
        narrative += `Our ruler is ${this.world.ruler.description}.`;
        return narrative;
    }
    public exampleIndividual(): Individual {
        return this.world.randomPerson();
    }
    public exampleLocation(): any {
        return this.world.randomPlace();
    }
}
