import { Individual } from "./Individual";
import { World } from "./World";


interface GameConfig {
    worldName?: string
}

export class Engine {
    private world: World

    static get version() { return '1.0.0' }

    constructor(private options: GameConfig = {}) { //
        this.world = new World(options.worldName || 'Terra Incognita')
        console.log("It's a whole new world!", this.narrate())
    }

    narrate(): String {
        return this.world.describe()
    }

    exampleIndividual(): Individual {
        return this.world.randomPerson()
    }

    exampleLocation(): any {
        return this.world.randomPlace()
    }
}