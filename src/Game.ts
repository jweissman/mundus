// big wrapper class -- maybe integration with excalibur/etc engine goes here?

import * as Mundus from './Mundus';

export default class Game {
    constructor() {
        console.log("[game] HELLO FROM MUNDUS", Mundus.Engine.version);
    }

    play(): any {
        throw new Error("Game#play -- Method not implemented.");
    }
}