<template>
  <b-col cols="12" md="6" class="mb-4">
      <b-card header="Round Stats" body-class="py-0 px-0" header-tag="h5">
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