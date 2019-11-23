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
        let statementFound = false;
        
        // find out if there is a match
        messenger.monsterData.forEach( (monster) => {
            const monsterMatches = monster.scaryStatements.filter( (statement) => {
                return statement === message
            } )

            if (monsterMatches.length > 0) {
                statementFound = true;
            }

        } )

        // we expect at least one match
        expect(statementFound).to.equal(true)
    })

    it.skip('does not send more than one text per hour',  () => {
    })

    it.skip('does not send messages from blacklisted monsters', () => {

    })
})
  