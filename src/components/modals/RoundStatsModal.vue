<template>
  <b-modal size="xl" id="round-stats" header-bg-variant="light" title="Round Detail">
    <div class="text-center">
        <h6>Select Round</h6>
        <div class="d-flex mb-3 justify-content-center align-items-center">
            <b-button size="sm" variant="dark" @click="decrement" :disabled="decrementDisabled">
            <b-icon icon="dash" />
            </b-button>
            <b-badge class="mb-0 mx-2" style="font-size: 13px; font-weight: 500; padding: .45rem;" variant="primary">Round {{ roundId }}</b-badge>
            <b-button size="sm" variant="dark" @click="increment" :disabled="incrementDisabled">
                <b-icon icon="plus" />
            </b-button>
        </div>
    </div>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th width="20%" scope="col">Team</th>
                <th width="12%" scope="col">Canasta</th>
                <th width="12%" scope="col">Loose</th>
                <th width="12%" scope="col">Remaining</th>
                <th width="12%" scope="col">Out Bonus</th>
                <th width="10%" scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <RoundStatsModalRow v-for="team in teams" :roundId="roundId" :team="team" :key="team.id" />
        </tbody>
    </table>
  </b-modal>
</template>

<script>
import RoundStatsModalRow from './components/RoundStatsModalRow'

export default {
    name: 'RoundStatsModal',
    components: {
        RoundStatsModalRow
    },
    data () {
        return {
            roundId: 1
        }
    },
    computed: {
        teams () {
            return this.$store.state.teams
        },
        currentRoundId () {
            return this.$store.state.game.currentRound
        },
        decrementDisabled () {
            return this.roundId == 1
        },
        incrementDisabled () {
            if (this.$store.state.game.ended) {
                return this.roundId == this.currentRoundId
            } else {
                return this.roundId == (this.currentRoundId - 1)
            }
        }
    },
    methods: {
        increment () {
            this.roundId++
        },
        decrement () {
            this.roundId--
        }
    }
}
</script>

<style lang="scss">
#round-stats {

    tbody th {
        border-right: 1px solid #ddd;
    }
}
</style>