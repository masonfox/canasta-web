<template>
    <td :class="classObject">{{ score }}</td>
</template>

<script>
export default {
    name: 'RoundStatsRow',
    props: ['round', 'team'],
    data () {
        return {
            defaultVal: "-"
        }
    },
    computed: {
        isActiveRound () {
            return this.round.id == this.currentRoundId
        },
        isMaxRound () {
            return this.round.id == this.$store.state.game.roundMax
        },
        gameEnded () {
            return this.$store.state.game.ended
        },
        isActiveRoundOrEnded () {
            return !this.isActiveRound || this.isMaxRound && this.gameEnded
        },
        score () {
            return (this.isActiveRoundOrEnded) ? this.$options.filters.formatNumber(this.roundScore.total) : this.defaultVal
        },
        currentRoundId () {
            return this.$store.getters.currentRound.id
        },
        roundScore () {
            return this.$store.getters.getRoundResultsByTeam(this.round.id, this.team.id)
        },
        won () {
            return this.$store.getters.wonRound(this.round.id, this.team.id)
        },
        classObject () {
            return {
                'score': true,
                'text-success': this.won,
                'text-danger': !this.won,
                'text-dark': this.isActiveRound && !this.gameEnded
            }
        }
    }
}
</script>

<style>

</style>