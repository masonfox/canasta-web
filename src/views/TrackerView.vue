<template>
  <b-container>
      <b-card no-body>
        <b-card-header class="tracker-header">
            <h5 class="mb-0">Current Round - {{ RoundNumber }}</h5>
            <div>
                <b-button size="sm" variant="light" pill class="mr-2" v-b-modal="'round-settings'">
                    <b-icon icon="gear"></b-icon>
                </b-button>
                <CompleteRoundButton />
            </div>
        </b-card-header>
        <b-card-body class="row py-0 px-0">
            <RoundTable />
            <RoundTable :last="true" />
        </b-card-body>
      </b-card>
      <RoundCompletedModal />
      <RoundSettingsModal />
  </b-container>
</template>

<script>
import RoundCompletedModal from '@/components/modals/RoundCompletedModal'
import RoundSettingsModal from '@/components/modals/RoundSettingsModal'
import CompleteRoundButton from '@/components/CompleteRoundButton'
import RoundTable from '@/components/RoundTable'

export default {
    name: 'TrackerView',
    computed: {
        RoundNumber: () => { return 1 }
    },
    components: {
        RoundCompletedModal,
        CompleteRoundButton,
        RoundSettingsModal,
        RoundTable
    },
    methods: {}
}
</script>

<style lang="scss">
.tracker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>