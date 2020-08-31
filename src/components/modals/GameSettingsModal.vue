<template>
  <b-modal size="xl" id="game-settings" title="Game Settings" button-title="Save" @ok="okHandler">
    <b-container>
      <b-row>
        <b-col>
          <b-form-group
            label="Teams/Individuals:"
            label-for="teams"
            class="team-group"
          >
            <b-row>
              <b-col>
                <b-form-input
                  v-for="team in teams" :key="team.id + '-name'"
                  v-model="team.name"
                  size="sm"
                  type="text"
                  class=""
                ></b-form-input>
              </b-col>
              <b-col>
                <b-form-input
                  v-for="team in teams" :key="team.id + '-color'"
                  v-model="team.color"
                  size="sm"
                  type="color"
                  class=""
                ></b-form-input>
              </b-col>
            </b-row>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
export default {
    name: 'GameSettingsModal',
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