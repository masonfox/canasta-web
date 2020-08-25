<template>
  <b-modal id="round-completed-modal" title="Round Completed?" @ok="handleOk">
    <p>Please confirm the following results:</p>
    <b-row>
        <b-col>
            <b>Team 1</b>
        </b-col>
        <b-col>
            <b>Team 2</b>
        </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
    name: 'RoundCompletedModal',
    computed: {
        nextRoundNumber () {
            return this.$store.getters.nextRoundNumber
        }
    },
    methods: {
        handleOk() {
            console.log(this.nextRoundNumber)
            if (this.nextRoundNumber !== null) {
                this.$store.commit('newRound', this.nextRoundNumber)
            } else {
                this.$store.commit('endGame')
                // launch end game modal
            }
        }
    }
}
</script>

<style lang="scss">

</style>