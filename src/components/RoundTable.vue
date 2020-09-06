<template>
  <b-col class="round-table">
    <table class="table table-hover">
        <thead>
            <th colspan="5" class="text-light text-center py-1">
                <b-badge :style="{ background: team.color, fontSize: '15px' }">{{ team.name }}</b-badge>
            </th>
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
        // console.log(this.$store.getters.currentRound)
    }
}
</script>