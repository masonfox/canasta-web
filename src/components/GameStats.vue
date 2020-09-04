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
          <b-col class="game-stats-item" v-for="team in teams" :key="team.id">
            <h5 class="title">{{ team.name }}</h5>
            <p class="score">{{ gameScore(team.id) | formatNumber }}</p>
          </b-col>
        </b-card-body>
      </b-card>
  </b-col>
</template>

<script>
export default {
    name: 'GameStats',
    computed: {
      teams () {
        return this.$store.state.teams
      }
    },
    methods: {
      gameScore(teamId) {
        return this.$store.getters.getGameResultsByTeam(teamId)
      }
    }
}
</script>

<style lang="scss">
.game-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.game-stats-card{
  padding: 0 !important;
}

.game-stats-item {
  text-align: center;
  padding: 1rem;

  .title {
    margin-bottom: .2rem;
  }

  .score {
    margin: 0;
  }

  &:last-child {
    border-left: 1px solid #ddd;
  }
}
</style>