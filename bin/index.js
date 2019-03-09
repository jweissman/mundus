#!/usr/bin/env ts-node

const Mundus = require('../src');
const Game = Mundus.default;
const game = new Game();
console.log(game.play());