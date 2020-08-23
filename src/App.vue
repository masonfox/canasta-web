<template>
  <div id="app">
    <LogsView />
    <TrackerView />
  </div>
</template>

<script>
import LogsView from '@/views/LogsView'
import TrackerView from '@/views/TrackerView'

export default {
  name: 'App',
  components: { LogsView, TrackerView }
}
</script>

<style lang="scss">
  #app {
    padding: 2.5rem 0;
  }
</style>
