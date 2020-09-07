<template>
    <tr>
        <th>{{ team.name }}</th>
        <td>{{ results.canasta | formatNumber }}</td>
        <td>{{ results.loose | formatNumber }}</td>
        <td>{{ results.remaining | formatNumber }}</td>
        <td>{{ results.wentOutBonus }}</td>
        <td><b>{{ results.total | formatNumber }}</b></td>
    </tr>
</template>

<script>
export default {
    name: 'RoundStatsModalRow',
    props: {
        team: {
            type: Object,
            required: true
        },
        roundId: {
            type: Number,
            required: true
        }
    },
    computed: {
        results () {
            return this.$store.getters.getRoundResultsByTeam(this.roundId, this.team.id)
        }
    }
}
</script>

<style>

</style>