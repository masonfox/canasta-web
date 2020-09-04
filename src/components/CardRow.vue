<template>
    <tr>
        <th scope="row">{{ cardDisplayName }}</th>
        <td>
            <b-form-select
                size="sm"
                v-model="canasta"
                :options="options"
                :disabled="disabled"
                class="nu-select"
            ></b-form-select>
        </td>
        <td>
            <b-form-input type="number" size="sm" min="0" step="1" v-model="loose" :disabled="disabled"></b-form-input>
        </td>
        <td>
            <b-form-input type="number" size="sm" min="0" step="1" v-model="remaining" :disabled="disabledRemaining"></b-form-input>
        </td>
        <td v-if="showScoreColumn">
            <span :class="badge">{{ score | formatNumber }}</span>
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
        team: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            options: [{ text: 'None', value: null }, { text: 'Natural', value: 'natural'}, { text: 'Unnatural', value: 'unnatural'}],
            disabledIds: [14, 15]
        }
    },
    computed: {
        currentRound () {
            return this.$store.state.game.currentRound
        },
        cardValues () {
            return this.$store.getters.getCardRoundResults(this.currentRound, this.card.id, this.team.id)
        },
        score () {
            return this.$store.getters.getCardRowScore(this.card.id, this.canasta, this.loose, this.remaining).total
        },
        canasta: {
            get() {
                 return this.cardValues.canasta
            },
            set (val) {
                this.setRoundCardValue("canasta", val)
            }
        },
        loose: {
            get() {
                 return this.cardValues.loose
            },
            set (val) {
                this.setRoundCardValue("loose", val)
            }
        },
        remaining: {
            get() {
                  return this.cardValues.remaining
            },
            set (val) {
                this.setRoundCardValue("remaining", val)
            }
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
        disabled () {
            // for canastas and loose
            return this.disabledIds.includes(this.card.id)
        },
        disabledRemaining () {
            return this.card.value == 0
        },
        showScoreColumn () {
            return this.$store.state.options.showScoreColumn;
        },
        cardDisplayName () {
            return (this.$store.state.options.showFullCardName) ? this.card.name : this.card.abbreviation
        }
    },
    methods: {
        setRoundCardValue (type, val) {
            this.$store.commit('setRoundCardValue', {
                teamId: this.team.id,
                cardId: this.card.id,
                type,
                val
            })
        }
    }
}
</script>

<style>

</style>