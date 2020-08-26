<template>
    <!-- dropping all modals here -->
    <div>
        <GameSettingsModal />
        <ConfirmNewGame />
    </div>
</template>

<script>
import GameSettingsModal from './modals/GameSettingsModal'
import ConfirmNewGame from './modals/ConfirmNewGame'

export default {
    name: 'modals',
    components: {
        GameSettingsModal,
        ConfirmNewGame
    }
}
</script>

<style>

</style>