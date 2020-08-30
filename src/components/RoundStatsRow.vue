<template>
    <td :class="classObject">{{ roundScore.total }}</td>
</template>

<script>
export default {
    name: 'RoundStatsRow',
    props: ['round', 'team'],
    computed: {
        roundScore () {
            return this.$store.getters.getRoundScore(this.round.id, this.team.id)
        },
        won () {
            // return this.$store.getters.whoWonRound(this.round.id, this.team.id)
            return true
        },
        classObject () {
            return {
                'font-weight-bold': true,
                'text-success': this.won,
                'text-danger': !this.won
            }
        }
    }
}
</script>

<style>

</style>