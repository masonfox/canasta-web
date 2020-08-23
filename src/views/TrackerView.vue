<template>
  <b-container>
      <b-card no-body>
        <b-card-header class="tracker-header">
            <h5 class="mb-0">Current Round</h5>
            <CompleteRoundButton />
        </b-card-header>
        <b-card-body class="row">
        <b-col>
            <table class="table">
                <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
            </table>
        </b-col>
        <b-col>
            Woot
        </b-col>
        </b-card-body>
      </b-card>
      <RoundCompletedModal />
  </b-container>
</template>

<script>
import RoundCompletedModal from '@/components/modals/RoundCompletedModal'
import CompleteRoundButton from '@/components/CompleteRoundButton'

export default {
    name: 'TrackerView',
    components: {
        RoundCompletedModal,
        CompleteRoundButton
    },
    methods: {}
}
</script>

<style lang="scss">
.tracker-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>