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
        winning () {
            return this.$store.getters.isWinning(this.team.id)
        },
        classObject () {
            return {
                'score': true,
                'text-success': false,
                'text-danger': false,
                'text-dark': true
            }
        }
    }
}
</script>

<style>

</style>