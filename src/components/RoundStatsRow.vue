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
        score () {
            return (this.isActiveRound) ? this.defaultVal : this.roundScore.total
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
                'font-weight-bold': true,
                'text-success': this.won && !this.isActiveRound,
                'text-danger': !this.won && !this.isActiveRound,
                'text-dark': this.isActiveRound
            }
        }
    }
}
</script>

<style>

</style>