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
        let expectedMessage = 'RAwwwwwwww!'

        // we expect this result
        expect(message).to.equal(expectedMessage)
    })

    it.skip('does not send more than one text per hour',  () => {
    })

    it.skip('does not send messages from blacklisted monsters', () => {

    })
})
  