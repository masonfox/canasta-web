<template>
  <b-col class="round-table" :class="{ last }">
    <table class="table">
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
                <CardRow :card="card" :key="index" />
            </template>
        </tbody>
    </table>
  </b-col>
</template>

<script>
import CardRow from '@/components/CardRow'

export default {
    name: 'RoundTable',
        props: {
        last: {
            type: Boolean,
            default: false
        }
    },
    components: {
        CardRow
    },
    computed: {
        showScoreColumn () {
            return this.$store.state.options.showScoreColumn;
        },
        cards () {
            return this.$store.state.cards
        }
    }
}
</script>

<style lang="scss">
.round-table.last {
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
        width: 5.75rem;
    }

    input.form-control {
        width: 3.65rem;
    }
}
</style>