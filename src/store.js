import Vue from 'vue'
import Vuex from 'vuex'
// import Game from '@/models/game'
// import Round from '@/models/round'
// import Card from '@/models/card'

Vue.use(Vuex)

let cards = {
    1: { id: 1, name: 'Jack', abbreviation: 'J', value: 50 },
    2: { id: 2, name: '2', abbreviation: '2', value: 50 },
    3: { id: 3, name: 'Ace', abbreviation: 'A', value: 50 },
    4: { id: 4, name: 'King', abbreviation: 'K', value: 20 }
}

const data = {
    rounds: {
        1: { // round 1
            id: 1,
            cards: { 
                1: { // card 1
                    id: 1, teams: { // teams
                        1: { team: 1, canasta: 'natural', loose: 1, remaining: 1 },
                        2: { team: 2, canasta: 'unnatural', loose: 1, remaining: 1 }
                    }
                }
            }
        }
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
        currentRound: (state) => {
            return state.game.rounds.find(round => round.number == state.game.currentRound)
        },
        nextRoundNumber: (state) => {
            return (state.game.currentRound !== state.game.roundMax) ? state.game.currentRound + 1 : null;
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
            console.log(payload)
            Vue.set(state.game.rounds[0].teams[payload.teamIndex].cards[payload.cardIndex], payload.type, payload.val)
        },
        newRound (state, roundNumber) {
            state.game.rounds.push(new Round(roundNumber, state.cards, state.game.teams))
            state.game.currentRound = roundNumber
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