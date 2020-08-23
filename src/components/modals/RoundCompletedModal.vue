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
    methods: {
        handleOk() {
            console.log('Triggered')
        }
    }
}
</script>

<style lang="scss">

</style>