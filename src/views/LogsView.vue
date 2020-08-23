<template>
    <b-container>
        <b-row>
            <GameStats />
            <RoundStats />
        </b-row>
    </b-container>
</template>

<script>
import RoundStats from '@/components/RoundStats'
import GameStats from '@/components/GameStats'

export default {
    name: 'LogsView',
    components: {
        RoundStats,
        GameStats
    }
}
</script>

<style>

</style>