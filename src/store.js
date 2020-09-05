import Vue from 'vue'
import Vuex from 'vuex'
import Score from '@/score'
import Storage from '@/storage'
import cards from '@/cards'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        game: {
            roundMax: 4,
            currentRound: 0,
            ended: false,
            started: false
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
            let round = getters.getRoundObject(roundId)
            let applyWentOutBonus = round.wentOutTeamId == teamId
            let final = []

            // loop through cards to find each individual cards to build a score object
            for (const cardId in round.cards) {
                let cardObject = round.cards[cardId]
                let { canasta, loose, remaining } = cardObject.teams[teamId]
                let scoreObject = {
                    card: getters.getCardById(cardObject.id),
                    canasta,
                    loose,
                    remaining
                }
                final.push(scoreObject)
            }

            return Score.round(final, applyWentOutBonus)
        },
        getRoundResults: (state, getters) => (roundId) => {
            let teams = state.teams
            let final = []

            for (const key in teams) {
                const team = teams[key];

                let { total } = getters.getRoundResultsByTeam(roundId, team.id)

                final.push({
                    teamId: team.id,
                    total
                })
            }

            return final
        },
        wonRound: (state, getters) => (roundId, teamId) => {
            let scores = getters.getRoundResults(roundId)

            scores.sort((a, b) => {
                return b.total - a.total
            })

            return scores[0].teamId == teamId
        },
        getGameResultsByTeam: (state, getters) => (teamId) => {
            // copy and clean
            let rounds = JSON.parse(JSON.stringify(state.rounds))
            let final = 0

            // remove the current round from the game total
            // BROKEN
            // if (!state.game.ended) {
            //     delete rounds[getters.currentRound.id]
            // }

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
        currentRound: (state) => {
            return state.rounds[state.game.currentRound]
        },
        nextRoundNumber: (state) => {
            return (state.game.currentRound !== state.game.roundMax) ? state.game.currentRound + 1 : null;
        }
    },
    mutations: {
        toggleScoreColumn(state) {
            state.options.showScoreColumn = !state.options.showScoreColumn
            saveState()
        },
        toggleFullCardName(state) {
            state.options.showFullCardName = !state.options.showFullCardName
            saveState()
        },
        setRoundCardValue(state, payload) {
            if (payload.type !== "canasta") { payload.val = Number(payload.val) }
            // update values in the store
            state.rounds[state.game.currentRound].cards[payload.cardId].teams[payload.teamId][payload.type] = payload.val
            // officially mark the game as started
            if (state.game.started == false) state.game.started = true
            // persist state changes to store
            saveState()
        },
        setRoundWentOutTeamId (state, payload) {
            let { roundId, val } = payload
            Vue.set(state.rounds[roundId], 'wentOutTeamId', val)
        },
        addTeam (state, payload) {
            let existingKeys = Object.keys(state.teams).sort((a,b) => { a-b })
            let finalArrayItem = Number(existingKeys.slice(-1)[0])
            let id = finalArrayItem + 1
            let { name, color } = payload
            Vue.set(state.teams, id, {
                id,
                name,
                color
            })
            saveState()
        },
        deleteTeam (state, teamId) {
            Vue.delete(state.teams, teamId)
            saveState()
        },
        newRound(state) {
            const roundId = state.game.currentRound + 1
            const round = { id: roundId, cards: {}, wentOutTeamId: null }
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
        resetFromStorage(state) {
            let { game, rounds, options, teams, cards } = Storage.get('state')
            state.game = game
            state.rounds = rounds
            state.options = options
            state.teams = teams
            state.cards = cards
        },
        clearRounds(state) {
            state.rounds = {}
            state.game.currentRound = 0
            state.game.started = false
        },
        endGame(state) {
            state.game.ended = true
        },
        saveState() {
            saveState()
        }
    },
    actions: {
        newGame({ commit }) {
            commit('clearRounds')
            commit('newRound')
        }
    }
})

function saveState() {
    Storage.set('state', store.state)
}

export default store