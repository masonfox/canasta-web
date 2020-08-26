<template>
  <b-col class="round-table">
    <table class="table">
        <thead>
            <th colspan="5" class="text-center py-1">{{ team.name }}</th>
        </thead>
        <thead>
            <tr>
                <th scope="col">Card</th>
                <th scope="col">N/U</th>
                <th scope="col">Loose</th>
                <th scope="col">Remaining</th>
                <th scope="col" v-if="showScoreColumn">Score</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(card, index) in cards">
                <CardRow :card="card" :team="team" :key="index" />
            </template>
        </tbody>
    </table>
  </b-col>
</template>

<script>
import CardRow from '@/components/CardRow'

export default {
    name: 'RoundTable',
    components: {
        CardRow,
    },
    props: {
        team: {
            type: Object,
            required: true
        }
    },
    computed: {
        showScoreColumn () {
            return this.$store.state.options.showScoreColumn;
        },
        cards () {
            // determine what round it is
            // combine data
            return this.$store.state.cards
        }
    },
    mounted () {
        console.log(this.$store.getters.currentRound)
    }
}
</script>

<style lang="scss">
.round-table:last-of-type {
    border-left: 1px solid rgba(0, 0, 0, 0.125);
}

.round-table {
    
    &:first-child {
        padding-right: 0 !important;
    }

    &:last-child {
        padding-left: 0 !important;
    }

    .table {
        margin-bottom: 0;
    }

    .nu-select {
        width: 6.25rem;
    }

    input.form-control {
        width: 3.65rem;
    }
}
</style>