// Write your tests here!
const {polybius} = require("../src/polybius")
const {expect} = require("chai")
describe("decoding a message",()=>{
    it("should return false if the length of all numbers is odd",()=>{
        let input = "231234412"
        let actual = polybius(input,false)

        expect(actual).to.be.false
    })
    it("should decode a message by translating each pair of numbers into a letter",()=>{
        let input = "314341423322 4234 31434313"
        let expected = "cod(i/j)ng (i/j)s cool"
        let actual = polybius(input, false)

        expect(actual).to.equal(expected)
    })
})
describe("encoding a message",()=>{
    it("should encode a message by translating each letter to number pairs",()=>{
        let input = "Secret word"
        let expected = "345131245144 25432441"
        let actual = polybius(input)

        expect(actual).to.equal(expected)
    })
    it("should translate both 'i' and 'j' to 42",()=>{
        let input = "javaScript"
        let expected = "42111511343124425344"
        let actual = polybius(input)

        expect(actual).to.equal(expected)
    })
    it("should leave spaces as is",()=>{
        let input = "code word"
        let expected = "31434151 25432441"
        let actual = polybius(input)

        expect(actual).to.equal(expected)
    })
})