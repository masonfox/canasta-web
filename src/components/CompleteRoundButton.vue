<template>
  <b-button size="sm" :variant="buttonVariant" v-b-modal="'round-completed-modal'" :disabled="disabled">{{ buttonText }}</b-button>
</template>

<script>
export default {
    name: 'CompleteRoundButton',
    computed: {
        disabled () {
            // store logic for validating a round
            return false;
        },
        lastRound () {
            let { currentRound, roundMax } = this.$store.state.game
            return currentRound == roundMax
        },
        buttonVariant () {
            return (this.lastRound) ? "success" : "primary"
        },
        buttonText () {
            return (this.lastRound) ? "Complete Game" : "Complete Round"
        }
    }
}
</script>