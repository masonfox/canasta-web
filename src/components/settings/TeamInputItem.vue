<template>
    <b-row class="mb-2">
        <b-col sm="8" class="mr-0">
            <b-form-input
                v-model="team.name"
                size="sm"
                type="text"
                class=""
                placeholder="Team/individual name"
            ></b-form-input>
        </b-col>
        <b-col sm="2">
            <b-form-input
                v-model="team.color"
                size="sm"
                type="color"
                sm="3"
            ></b-form-input>
        </b-col>
        <b-col sm="2">
            <b-button size="sm" variant="danger" @click="removeTeam" :disabled="disabled">
                <b-icon icon="trash"></b-icon>
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'TeamInputItem',
    props: {
        team: {
            required: true,
            type: Object
        }
    },
    computed: {
        teamCount () {
            let teams = this.$store.state.teams
            return Object.keys(teams).length
        },
        disabled () {
            return this.teamCount == 1
        }
    },
    methods: {
        removeTeam () {
            this.$store.commit('deleteTeam', this.team.id)
        }
    }
}
</script>

<style>

</style>