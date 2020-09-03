<template>
  <b-modal size="xl" id="game-settings" title="Game Settings" button-title="Save" @ok="okHandler">
    <b-container>
      <b-row>
        <b-col lg="6">
          <b-form-group
            label="Teams/Individuals:"
            label-for="teams"
            class="team-group"
          >
            <b-alert show variant="warning" class="alert-sm">Adding a new team will <b>reset the game</b></b-alert>
            <TeamInputItem v-for="(team, index) in teams" :key="team.id" :index="index" :team="team" />
            <NewTeamInput />
          </b-form-group>
        </b-col>
        <b-col lg="6" class="border-left">
          <p>...</p>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import TeamInputItem from '@/components/settings/TeamInputItem'
import NewTeamInput from '@/components/settings/NewTeamInput'

export default {
    name: 'GameSettingsModal',
    components: {
      TeamInputItem,
      NewTeamInput
    },
    computed: {
      teams () {
        return this.$store.state.teams
      }
    },
    methods: {
      okHandler () {
        this.$store.commit('saveState')
      }
    }
}
</script>

<style lang="scss">
  label {
    font-weight: bold !important;
  }
</style>