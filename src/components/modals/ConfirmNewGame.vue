<template>
  <b-modal size="sm" id="confirm-new-game" title="New Game" @ok="handleOk" ok-variant="warning" ok-title="Confirm">
      <p class="mb-0">Are you sure? Proceeding will <b class="text-danger">remove</b> your current game.</p>
  </b-modal>
</template>

<script>
export default {
  name: 'ConfirmNewGame',
  methods: {
    handleOk () {
      this.$store.dispatch('newGame')
    }
  }
}
</script>

<style>

</style>