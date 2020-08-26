<template>
    <td :class="classObject">1000</td>
</template>

<script>
export default {
    name: 'RoundStatsRow',
    props: ['round', 'team'],
    computed: {
        won () {
            return false // this.$store.getters.wonRound(this.round.id, this.team.id)
        },
        classObject () {
            return {
                'font-weight-bold': true,
                'text-success': true,
                'text-danger': false
            }
        }
    }
}
</script>

<style>

</style>