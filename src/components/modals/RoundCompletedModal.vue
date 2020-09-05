<template>
  <b-modal id="round-completed-modal" title="Round Completed?" @ok="handleOk">
    <p>Please confirm the following results:</p>
    <b-row>
        <b-col v-for="team in teams" :key="team.id">
            <b>{{ team.name }}</b>
            <p>{{ score(team.id) }}</p>
        </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
    name: 'RoundCompletedModal',
    computed: {
        teams () {
            return this.$store.state.teams
        },
        currentRoundNumber () {
            return this.$store.state.game.currentRound
        },
        nextRoundNumber () {
            return this.$store.getters.nextRoundNumber
        }
    },
    methods: {
        score (teamId) {
            return this.$store.getters.getRoundResultsByTeam(this.currentRoundNumber, teamId).total
        },
        handleOk() {
            if (this.nextRoundNumber !== null) {
                // start a new round
                this.$store.commit('newRound')
            } else {
                // finish
                this.$bvModal.hide('round-completed-modal')
                this.$bvModal.show('game-completed-modal')
            }
        }
    }
}
</script>

<style lang="scss">

</style>