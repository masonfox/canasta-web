<template>
  <b-col cols="12" md="6" class="mb-4">
      <b-card no-body>
        <b-card-header class="game-header">
            <h5 class="mb-0">Game Stats</h5>
            <div>
                <b-button size="sm" variant="light" pill class="mr-2" v-b-modal="'round-stats'">
                    <b-icon icon="info-circle"></b-icon>
                </b-button>
            </div>
        </b-card-header>
        <b-card-body class="py-0 px-0">
          <table class="table stats-table table-hover">
            <thead>
              <tr>
                  <th scope="col">Round #</th>
                  <th class="text-center" scope="col" v-for="team in teams" :key="team.id">{{ team.name }}</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="round in rounds" :key="round.id">
                  <th scope="row">Round {{ round.id }}</th>
                  <template v-for="team in teams">
                    <RoundStatsRow :round="round" :team="team" :key="team.id" />
                  </template>
              </tr>
            </tbody>
          </table>
        </b-card-body>
    </b-card>
  </b-col>
</template>

<script>
import RoundStatsRow from '@/components/RoundStatsRow'

export default {
    name: 'RoundStats',
    components: { RoundStatsRow },
    computed: {
      teams () {
        return this.$store.state.teams
      },
      rounds () {
        return this.$store.state.rounds
      }
    }
}
</script>

<style>

</style>