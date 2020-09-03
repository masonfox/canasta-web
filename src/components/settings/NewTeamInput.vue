<template>
      <b-row>
        <b-col sm="8" class="mb-1 mr-0">
            <b-form-input
                v-model="teamName"
                size="sm"
                type="text"
                class=""
                placeholder="New team/individual name"
            ></b-form-input>
        </b-col>
        <b-col sm="2">
            <b-form-input
                v-model="teamColor"
                size="sm"
                type="color"
                sm="3"
            ></b-form-input>
        </b-col>
        <b-col sm="2">
            <b-button size="sm" variant="success" @click="handleClick">
                <b-icon icon="plus"></b-icon>
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'NewTeamInput',
    data () {
        return {
            teamName: '',
            teamColor: '#000'
        }
    },
    methods: {
        handleClick () {
            if (this.teamName !== "") {
                this.$store.commit('addTeam', {
                    name: this.teamName,
                    color: this.teamColor
                })
                this.$store.dispatch('newGame')
                Object.assign(this.$data, this.$options.data())
            }
        }
    }
}
</script>

<style>

</style>