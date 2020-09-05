<template>
  <b-modal id="round-completed-modal" title="Round Completed?" header-bg-variant="light" @ok="handleOk" @cancel="handleCancel" :ok-disabled="wentOutTeamId == null">
    <div class="mb-4">
        <h4>Who went out?</h4>
        <p>An additional 100 points is added</p>
        <b-form-select :options="teamSelectOptions" v-model="wentOutTeamId"></b-form-select>
    </div>
    <hr>
    <h4 class="mb-1">Review Scores</h4>
    <b-row>
        <b-col sm="4" v-for="team in teams" :key="team.id">
            <div class="round-score-box">
                <b>{{ team.name }}</b>
                <p class="mb-0">{{ score(team.id) }}</p>
            </div>
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
        teamSelectOptions () {
            let options = [{ value: null, text: 'Select a team' }]

            for (const key in this.teams) {
                let team = this.teams[key]
                options.push({
                    text: team.name,
                    value: Number(team.id)
                })
            }

            return options
        },
        currentRoundNumber () {
            return this.$store.state.game.currentRound
        },
        nextRoundNumber () {
            return this.$store.getters.nextRoundNumber
        },
        currentRoundObject () {
            return this.$store.getters.currentRound
        },
        wentOutTeamId: {
            get () {
                return this.currentRoundObject.wentOutTeamId 
            },
            set (val) {
                this.$store.commit('setRoundWentOutTeamId', {
                    roundId: this.currentRoundNumber,
                    val
                })
            }
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
        },
        handleCancel () {
            // clear any selection to this input
            this.wentOutTeamId = null
        }
    }
}
</script>

<style lang="scss">

</style>