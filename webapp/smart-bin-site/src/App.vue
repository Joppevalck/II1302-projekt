<template>
  <div id="app">
    <HelloBoys msg="Hello Pangpangpang Bois"/>
  </div>
</template>

<script>
import HelloBoys from './components/HelloBoys.vue'

export default {
  name: 'App',
  components: {
    HelloBoys
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
