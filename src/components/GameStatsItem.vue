<template>
    <b-col sm="6" class="game-stats-container">
        <div class="game-stats-item">
            <h5 class="title">{{ team.name }}</h5>
            <p :class="classObject">{{ score | formatNumber }}</p>
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
        isWinningGame () {
            return this.$store.getters.isWinningGame(this.team.id)
        },
        classObject () {
            return {
                'score': true,
                'text-success': this.isWinningGame,
                'text-danger': !this.isWinningGame,
                'text-dark': false
            }
        }
    }
}
</script>

<style>

</style>