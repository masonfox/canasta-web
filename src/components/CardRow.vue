<template>
    <tr>
        <th scope="row">{{ cardDisplayName }}</th>
        <td>
            <b-form-select
                size="sm"
                v-model="canasta"
                :options="options"
                class="nu-select"
            ></b-form-select>
        </td>
        <td>
            <b-form-input type="number" size="sm" min="0" step="1" v-model="loose"></b-form-input>
        </td>
        <td>
            <b-form-input type="number" size="sm" min="0" step="1" v-model="remaining"></b-form-input>
        </td>
        <td v-show="showScoreColumn">
            <!-- <pre><code>{{ this.card }}</code></pre> -->
            <span :class="badge">{{ score }}</span>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        },
    },
    data () {
        return {
            canasta: null,
            loose: 0,
            remaining: 0,
            options: [{ text: 'None', value: null }, { text: 'Natural', value: 'natural'}, { text: 'Unnatural', value: 'unnatural'}]
        }
    },
    computed: {
        score () {
            return 1
        },
        badge () {
            return {
                badge: true,
                "badge-lg": true,
                "badge-danger": this.score < 0,
                "badge-success": this.score > 0,
                "badge-light": this.score == 0
            }
        },
        showScoreColumn () {
            return this.$store.state.options.showScoreColumn;
        },
        cardDisplayName () {
            return (this.$store.state.options.showFullCardName) ? this.card.name : this.card.abbreviation
        }
    },
    methods: {
        updateCardValue (type, val) {
            this.$store.commit('setRoundCardValue', {
                teamIndex: this.teamIndex,
                cardIndex: this.cardIndex,
                type,
                val
            })
        }
    }
}
</script>

<style>

</style>