const clone = require('lodash/cloneDeep')

export default class Round {
    constructor (roundNumber, cards, teams) {
        this.number = roundNumber
        this.teams = teams

        console.log(clone(cards))
        
        // push cards into each team for the round
        this.teams.forEach(team => {
            team.cards = clone(cards)
        });
    }

    get score () {
        return 0
    }
}