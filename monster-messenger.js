const monsterData = require('./christmas-monsters.json')
const randomArrayIndex = require('random-array-index')

function getRandomMessage () {
    const monsterIdx = randomArrayIndex(monsterData)
    const monster = monsterData[monsterIdx]
    // @Temp - needs to get a random statement
    const statement = monster.scaryStatements[0]

    return statement
}

module.exports = {
    getRandomMessage,
    monsterData
}