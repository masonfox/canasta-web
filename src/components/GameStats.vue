<template>
  <b-col cols="12" md="6" class="mb-4">
      <b-card no-body body-class="game-stats-card">
        <b-card-header class="game-header">
            <h5 class="mb-0">Game Stats</h5>
            <div>
                <b-button size="sm" variant="light" pill class="mr-2" v-b-modal="'game-settings'">
                    <b-icon icon="gear"></b-icon>
                </b-button>
                <button class="btn btn-dark btn-sm" v-b-modal="'confirm-new-game'">New Game</button>
            </div>
        </b-card-header>
        <b-card-body class="row py-0 px-0">
          <GameStatsItem v-for="team in teams" :team="team" :key="team.id" />
        </b-card-body>
      </b-card>
  </b-col>
</template>

<script>
import GameStatsItem from '@/components/GameStatsItem'

export default {
    name: 'GameStats',
    components: {
      GameStatsItem
    },
    computed: {
      teams () {
        return this.$store.state.teams
      }
    }
  }
</script>