<template>
    <!-- dropping all modals here -->
    <div>
        <GameSettingsModal />
        <ConfirmNewGame />
        <RoundCompletedModal />
        <GameCompletedModal />
        <RoundSettingsModal />
        <RoundStatsModal />
    </div>
</template>

<script>
import GameSettingsModal from './modals/GameSettingsModal'
import ConfirmNewGame from './modals/ConfirmNewGame'
import RoundCompletedModal from '@/components/modals/RoundCompletedModal'
import RoundSettingsModal from '@/components/modals/RoundSettingsModal'
import GameCompletedModal from '@/components/modals/GameCompletedModal'
import RoundStatsModal from '@/components/modals/RoundStatsModal'

export default {
    name: 'modals',
    components: {
        GameSettingsModal,
        ConfirmNewGame,
        RoundCompletedModal,
        RoundSettingsModal,
        GameCompletedModal,
        RoundStatsModal
    }
}
</script>

<style>

</style>