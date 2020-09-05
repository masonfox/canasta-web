<template>
  <b-container>
      <b-card no-body>
        <b-card-header class="tracker-header">
            <h5 class="mb-0">Round - {{ roundNumber }}</h5>
            <div>
                <b-button size="sm" variant="light" pill class="mr-2" v-b-modal="'round-settings'">
                    <b-icon icon="gear"></b-icon>
                </b-button>
                <CompleteRoundButton />
            </div>
        </b-card-header>
        <b-card-body class="row py-0 px-0">
            <RoundTable v-for="team in teams" :team="team" :key="team.id" />
        </b-card-body>
      </b-card>
  </b-container>
</template>

<script>
import CompleteRoundButton from '@/components/CompleteRoundButton'
import RoundTable from '@/components/RoundTable'

export default {
    name: 'TrackerView',
    computed: {
        teams () {
            return this.$store.state.teams
        },
        roundNumber () {
            return this.$store.state.game.currentRound
        },
        round () {
            return this.$store.getters.currentRound
        }
    },
    components: {
        CompleteRoundButton,
        RoundTable
    },
    methods: {}
}
</script>

<style lang="scss">
.tracker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>