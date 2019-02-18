// big wrapper class -- maybe integration with excalibur/etc engine goes here?

import * as Mundus from './Mundus';

export default class Game {
    engine: Mundus.Engine

    constructor() {
        this.engine = new Mundus.Engine()
    }

    play(): any {
        console.log(this.engine.narrate())

        let person = this.engine.exampleIndividual()
        console.log("My name is", person.name)

        let place = this.engine.exampleLocation()
        console.log("I hail from", place.name)

        console.log("Would you help us build a village?")
    }
}