<template>
    <b-col sm="6" class="game-stats-container">
        <div class="game-stats-item">
            <h5 class="title">{{ team.name }}</h5>
            <p :class="classObject">{{ scoreDisplay }}</p>
        </div>
    </b-col>
</template>

<script>
export default {
    name: 'GameStstaItem',
    props: {
        team: {
            required: true,
            type: Object
        }
    },
    computed: {
        score () {
            return this.$store.getters.getGameResultsByTeam(this.team.id)
        },
        scoreDisplay () {
            return (this.score > 0) ? this.$options.filters.formatNumber(this.score) : "-"
        },
        isRoundOne () {
            return this.$store.state.game.currentRound == 1
        },
        isWinningGame () {
            return (!this.isRoundOne) ? this.$store.getters.isWinningGame(this.team.id) : false
        },
        classObject () {
            return {
                'score': true,
                'text-success': this.isWinningGame,
                'text-danger': !this.isWinningGame,
                'text-dark': this.isRoundOne
            }
        }
    }
}
</script>

<style>

</style>