var mocha = require('mocha')
var expect = require('chai').expect
var { describe, it } = mocha

// include the module under test - monster-messenger
const messenger = require('../monster-messenger')

// TDD - Test driven development
describe('Christmas Monster text message generator',  () => {
    it('generates a scary text for all monsters',  () => {
        // given we execute the function
        let message = messenger.getRandomMessage()
        let allStatements = messenger.getAllStatements()
        
        const matches = allStatements.filter( (statement) => {
            return message = statement
        })

        // we expect at least one match
        expect(matches.length > 0).to.equal(true)
        // TODO? any way in Chai? expect(allStatements).to.have.keys(message);
    })

    it.skip('does not send more than one text per hour',  () => {
    })

    it.skip('does not send messages from blacklisted monsters', () => {

    })
})
  