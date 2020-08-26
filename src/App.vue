<template>
  <div id="app">
    <NavBar />
    <div id="app-wrapper">
      <LogsView />
      <TrackerView />
    </div>
    <Modals />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import LogsView from '@/views/LogsView'
import TrackerView from '@/views/TrackerView'
import Modals from '@/components/Modals'

export default {
  name: 'App',
  components: { LogsView, TrackerView, NavBar, Modals }
}
</script>

<style lang="scss">
  #app-wrapper {
    padding: 2.5rem 0;
  }
</style>
