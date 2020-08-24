<template>
    <tr>
        <th scope="row">{{ cardDisplayName }}</th>
        <td>
            <b-form-select
                size="sm"
                v-model="form.food"
                :options="options"
                class="nu-select"
            ></b-form-select>
        </td>
        <td>
            <b-form-input type="number" size="sm"></b-form-input>
        </td>
        <td>
            <b-form-input type="number" size="sm"></b-form-input>
        </td>
        <td v-show="showScoreColumn">
            <span>{{ this.card.value }}</span>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        card: {
            required: true
        }
    },
    data () {
        return {
            form: {
                food: null
            },
            options: [{ text: 'None', value: null }, 'Natural', 'Unatural']
        }
    },
    computed: {
        showScoreColumn () {
            return this.$store.state.options.showScoreColumn;
        },
        cardDisplayName () {
            console.log(this.$store.state.options.showFullCardName)
            return (this.$store.state.options.showFullCardName) ? this.card.name : this.card.abbreviation
        }
    }
}
</script>

<style>

</style>