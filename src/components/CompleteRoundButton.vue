<template>
  <b-button size="sm" variant="success" v-b-modal="'round-completed-modal'" :disabled="disabled">Complete Round</b-button>
</template>

<script>
export default {
    name: 'CompleteRoundButton',
    computed: {
        disabled () {
            // store logic for validating a round
            return false;
        }
    }
}
</script>