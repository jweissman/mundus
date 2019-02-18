import * as Mundus from "./Mundus";

let engine: Mundus.Engine = null 

describe('Mundus', () => {
    it('should have a version', () => {
        expect(Mundus.Engine.version).toBe('1.0.0')
    })

    beforeEach(() => {
        engine = new Mundus.Engine()
    })

    it('should describe the world', () => {
        let narrative = engine.narrate()
        let expected = /Welcome to Terra Incognita!/
        expect(narrative).toMatch(expected)
    })

    it('should name the world', () => {
        engine = new Mundus.Engine({
            worldName: 'Happyvale',
        })

        let narrative = engine.narrate()
        let expected = /Welcome to Happyvale!/
        expect(narrative).toMatch(expected)
    })

    it('should describe individuals', () => {
        let person = engine.exampleIndividual()
        expect(person.name).toMatch(/\w+ \w+/)
        console.log("Welcome:", person.name)
    })

    it('should describe a place', () => {
        let place = engine.exampleLocation()
        expect(place.name).toMatch(/the \w+ \w+/)
        console.log("Welcome to:", place.name)
    })
})
