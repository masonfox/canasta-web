import Vue from 'vue'
import Vuex from 'vuex'
// import Game from '@/models/game'
// import Round from '@/models/round'
// import Card from '@/models/card'

Vue.use(Vuex)

let cards = {
    1: { id: 1, name: 'Jack', abbreviation: 'J', value: 50 },
    2: { id: 2, name: '2', abbreviation: '2', value: 20 },
    3: { id: 3, name: 'Ace', abbreviation: 'A', value: 20 },
    4: { id: 4, name: 'King', abbreviation: 'K', value: 10 },
    // 5: { id: 5, name: 'Queen', abbreviation: 'Q', value: 10 },
    // 6: { id: 6, name: 'Jack', abbreviation: 'J', value: 10 },
    // 7: { id: 7, name: '10', abbreviation: '10', value: 10 },
    // 8: { id: 8, name: '9', abbreviation: '9', value: 10 },
    // 9: { id: 9, name: '8', abbreviation: '8', value: 10 },
    // 10: { id: 10, name: '7', abbreviation: '7', value: 5 },
    // 11: { id: 11, name: '6', abbreviation: '6', value: 5 },
    // 12: { id: 12, name: '5', abbreviation: '5', value: 5 },
    // 13: { id: 13, name: '4', abbreviation: '4', value: 5 },
    // 14: { id: 14, name: 'Red 3', abbreviation: 'R 3', value: -500 },
    // 15: { id: 15, name: 'Black 3', abbreviation: 'B 3', value: 0 },
}

const data = {
    rounds: {
        1: { // round 1
            id: 1,
            cards: { 
                1: { // card 1
                    id: 1, teams: { // teams
                        1: { canasta: 'natural', loose: 1, remaining: 1 },
                        2: { canasta: 'unnatural', loose: 1, remaining: 1 }
                    }
                },
                2: { // card 1
                    id: 2, teams: { // teams
                        1: { canasta: 'natural', loose: 1, remaining: 1 },
                        2: { canasta: 'unnatural', loose: 1, remaining: 1 }
                    }
                },
                3: { // card 1
                    id: 3, teams: { // teams
                        1: { canasta: 'natural', loose: 1, remaining: 1 },
                        2: { canasta: 'unnatural', loose: 1, remaining: 1 }
                    }
                },
                4: { // card 1
                    id: 4, teams: { // teams
                        1: { canasta: 'natural', loose: 1, remaining: 1 },
                        2: { canasta: 'unnatural', loose: 1, remaining: 1 }
                    }
                }
            }
        }
    }
}

const Score = {
    canasta (val) {
        if (val == "natural") {
            return 500
        } else if (val == "unnatural") {
            return 300
        } else {
            return 0
        }
    },
    loose (card, val) {
        return val * card.value
    },
    remaining (card, val) {
        let remaining = val * card.value

        if (remaining > 0 && card.value > 0) { remaining = remaining * -1 }

        return remaining
    },
    card (card, canastaVal, looseVal, remainingVal) {
        let canasta = this.canasta(canastaVal)
        let loose = this.loose(card, looseVal)
        let remaining = this.remaining(card, remainingVal)
        let total = canasta + loose + remaining

        return {
            canasta,
            loose,
            remaining,
            total
        }
    },
    round (scoreArray) {
        let score = {
            canasta: 0,
            loose: 0,
            remaining: 0,
            total: 0
        }

        for (let index = 0; index < scoreArray.length; index++) {
            const item = scoreArray[index];

            let { card, canasta, loose, remaining} = item
            let cardScore = this.card(card, canasta, loose, remaining)
            
            // increment items
            score.canasta += cardScore.canasta
            score.loose += cardScore.loose
            score.remaining += cardScore.remaining
            score.total += cardScore.total
        }

        return score
    }
}

export default new Vuex.Store({
    state: {
        game: {
            teams: [{ id: 1, name: 'Team 1' }, { id: 2, name: 'Team 2' }],
            roundMax: 4,
            rounds: [],
            currentRound: 1,
            ended: false
        },
        teams: {
            1: { id: 1, name: 'Team 1', color: 'red' },
            2: { id: 2, name: 'Team 2', color: 'blue' }
        },
        rounds: data.rounds,
        options: {
            showScoreColumn: true,
            showFullCardName: false
        },
        cards
    },
    getters: {
        getCardById: (state) => (id) => {
            return state.cards[id]
        },
        getCardRoundResults: (state) => (roundId, cardId, teamId) => {
            return state.rounds[roundId].cards[cardId].teams[teamId]
        },
        getCardRoundScore: (state, getters) => (roundId, cardId, teamId, type) => {
            return getters.getCardRoundResults(roundId, cardId, teamId)[type]
        },
        getCardRowScore: (state, getters) => (cardId, canasta, loose, remaining) => {
            return Score.card(getters.getCardById(cardId), canasta, loose, remaining)
        },
        getRoundResultsByTeam: (state, getters) => (roundId, teamId) => {
            let cards = getters.getRoundObject(roundId).cards
            let final = []

            // loop through cards to find each individual cards to build a score object
            for (const cardId in cards) {
                let cardObject = cards[cardId]
                let { canasta, loose, remaining } = cardObject.teams[teamId]
                let scoreObject = {
                    card: getters.getCardById(cardObject.id),
                    canasta,
                    loose,
                    remaining
                }
                final.push(scoreObject)
            }

            return Score.round(final)
        },
        getRoundScore: (state, getters) => (roundId, teamId) => {
            return getters.getRoundResultsByTeam(roundId, teamId)
        },
        getRoundObject: (state) => (roundId) => {
            return state.rounds[roundId]
        },
        // whoWonRound: (state, getters) => () => {
        //     let teams = 
        //     let result = []

        //     return result
        // },
        // getGameScore
        currentRound: (state) => {
            return state.rounds[state.game.currentRound]
        },
        nextRoundNumber: (state) => {
            return (state.game.currentRound !== state.game.roundMax) ? state.game.currentRound + 1 : null;
        },
        scoreCard: () => (payload) => {
            console.log(payload)
        }
    },
    mutations: {
        toggleScoreColumn (state) {
            state.options.showScoreColumn = !state.options.showScoreColumn
        },
        toggleFullCardName (state) {
            state.options.showFullCardName = !state.options.showFullCardName
        },
        setRoundCardValue (state, payload) {
            state.rounds[state.game.currentRound].cards[payload.cardId].teams[payload.teamId][payload.type] = payload.val
        },
        newRound (state, roundId) {
            // const cardModel = {
            //     canasta: null,
            //     loose: 0,
            //     remaining: 0
            // }

            // let cardKeys = Object.keys(state.cards)

            // console.log('keys', cardKeys)

            // state.rounds[roundId] = function () {
            //     let obj = {}
            //     obj.id = roundId
            // }

            // set the new current round
            state.game.currentRound = roundId
        },
        endGame (state) {
            state.game.ended = true
        }
    },
    actions: {
        completeRound () {

        }
    }
})