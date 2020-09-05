<template>
  <b-modal size="sm" id="round-settings" header-bg-variant="light" title="Round Settings">
    <p class="">Adjust round settings:</p>
    <table class="table table-borderless settings-table">
        <tr>
            <td><span>Card Score Column</span><td>
            <td><b-form-checkbox v-model="showScoreColumn" name="check-button" switch /></td>
        </tr>
        <tr>
            <td><span>Full Card Name</span><td>
            <td><b-form-checkbox v-model="showFullCardName" name="check-button" switch /></td>
        </tr>
    </table>
  </b-modal>
</template>

<script>
export default {
    name: 'RoundSettingsModal',
    computed: {
        showScoreColumn: {
            get () {
                return this.$store.state.options.showScoreColumn
            },
            set () {
                this.$store.commit('toggleScoreColumn')
            }
        },
        showFullCardName: {
            get () {
                return this.$store.state.options.showFullCardName
            },
            set () {
                this.$store.commit('toggleFullCardName')
            }
        }
    }
}
</script>