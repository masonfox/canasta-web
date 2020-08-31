import Vue from 'vue'
import Vuex from 'vuex'
import Score from '@/score'
import Storage from '@/storage'

Vue.use(Vuex)

let cards = {
    1: { id: 1, name: 'Jack', abbreviation: 'J', value: 50 },
    2: { id: 2, name: '2', abbreviation: '2', value: 20 },
    3: { id: 3, name: 'Ace', abbreviation: 'A', value: 20 },
    4: { id: 4, name: 'King', abbreviation: 'K', value: 10 },
    5: { id: 5, name: 'Queen', abbreviation: 'Q', value: 10 },
    6: { id: 6, name: 'Jack', abbreviation: 'J', value: 10 },
    7: { id: 7, name: '10', abbreviation: '10', value: 10 },
    8: { id: 8, name: '9', abbreviation: '9', value: 10 },
    9: { id: 9, name: '8', abbreviation: '8', value: 10 },
    10: { id: 10, name: '7', abbreviation: '7', value: 5 },
    11: { id: 11, name: '6', abbreviation: '6', value: 5 },
    12: { id: 12, name: '5', abbreviation: '5', value: 5 },
    13: { id: 13, name: '4', abbreviation: '4', value: 5 },
    14: { id: 14, name: 'Red 3', abbreviation: 'R 3', value: -500 },
    15: { id: 15, name: 'Black 3', abbreviation: 'B 3', value: 0 },
}

const store = new Vuex.Store({
    state: {
        game: {
            roundMax: 4,
            currentRound: 0,
            ended: false
        },
        teams: {
            1: { id: 1, name: 'Team 1', color: 'red' },
            2: { id: 2, name: 'Team 2', color: 'blue' }
        },
        rounds: {},
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
        getGameResultsByTeam: (state, getters) => (teamId) => {
            let rounds = state.rounds
            let final = 0

            for (const key in rounds) {
                const round = rounds[key];
                let { total } = getters.getRoundResultsByTeam(round.id, teamId)
                final += total
            }

            return final
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
        }
    },
    mutations: {
        toggleScoreColumn (state) {
            state.options.showScoreColumn = !state.options.showScoreColumn
            saveState()
        },
        toggleFullCardName (state) {
            state.options.showFullCardName = !state.options.showFullCardName
            saveState()
        },
        setRoundCardValue (state, payload) {
            if (payload.type !== "canasta") { payload.val = Number(payload.val) }
            state.rounds[state.game.currentRound].cards[payload.cardId].teams[payload.teamId][payload.type] = payload.val
            saveState()
        },
        newRound (state) {
            const roundId = state.game.currentRound + 1
            const round = { id: roundId, cards: {} }
            let cardKeys = Object.keys(state.cards)
            let teamKeys = Object.keys(state.teams)
            const cardModel = {
                canasta: null,
                loose: 0,
                remaining: 0
            }

            // set card keys
            for (let i = 0; i < cardKeys.length; i++) {
                let cardId = Number(cardKeys[i])
                // assign card refs
                round.cards[cardId] = { id: cardId, teams: {} }

                // loop through teams
                for (let ii = 0; ii < teamKeys.length; ii++) {
                    const teamId = Number(teamKeys[ii])
                    // set team
                    round.cards[cardId].teams[teamId] = cardModel
                }
            }

            // clone and create new object
            let rounds = state.rounds
            rounds[roundId] = round
            state.rounds = JSON.parse(JSON.stringify(rounds))
            
            // set the new current round
            state.game.currentRound = roundId

            saveState()
        },
        resetFromStorage (state) {
            let { game, rounds, options, teams, cards } = Storage.get('state')
            state.game = game
            state.rounds = rounds
            state.options = options
            state.teams = teams
            state.cards = cards
        },
        clearRounds (state) {
            state.rounds = {}
            state.game.currentRound = 0
        },
        endGame (state) {
            state.game.ended = true
        }
    },
    actions: {
        newGame ({ commit }) {
            commit('clearRounds')
            commit('newRound')
        }
    }
})

function saveState () {
    Storage.set('state', store.state)
}

export default store