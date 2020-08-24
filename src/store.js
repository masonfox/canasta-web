import Vue from 'vue'
import Vuex from 'vuex'
// import Game from '@/models/game'
// import Round from '@/models/round'
import Card from '@/models/card'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        game: {
            teams: [{ name: 'Team 1' }, { name: 'Team 2' }],
            roundMax: 4,
            rounds: [],
            currentRound: 1,
            over: false
        },
        options: {
            showScoreColumn: true,
            showFullCardName: false
        },
        cards: [
            new Card('Joker', 'J', 50),
            new Card('2', '2', 20),
            new Card('Ace', 'A', 20),
            new Card('King', 'K', 10),
            new Card('Queen', 'Q', 10),
            new Card('Jack', 'J', 10),
            new Card('10', '10', 10),
            new Card('9', '9', 10),
            new Card('8', '8', 10),
            new Card('7', '7', 5),
            new Card('6', '6', 5),
            new Card('5', '5', 5),
            new Card('4', '4', 5),
            new Card('Red 3', 'R 3', -500),
            new Card('Black 3', 'B3', 0)
        ]
    },
    mutations: {
        toggleScoreColumn (state) {
            state.options.showScoreColumn = !state.options.showScoreColumn
        },
        toggleFullCardName (state) {
            state.options.showFullCardName = !state.options.showFullCardName
        }
    },
    actions: {
        completeRound () {

        }
    }
})