<template>
  <b-modal id="game-completed-modal" title="Game Completed!" @ok="handleOk">
    <p>Please confirm the following results:</p>
    <b-row>
        <b-col>
            <h1>Hello</h1>
        </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
    name: 'GameCompleteModal',
    methods: {
        handleOk () {
            // finalize game
            this.$store.commit('endGame')

            // do something else?
        }
    }
}
</script>

<style>

</style>