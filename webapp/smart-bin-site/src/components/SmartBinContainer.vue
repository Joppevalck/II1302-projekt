<template>
    <div id="SmartBinContainer">
        <h3>Smart Bins</h3>
        <SmartBinStatus smartBinId="SmartBin1" v-bind:procent="20" />
    </div>
</template>

<script>
import SmartBinStatus from './SmartBinStatus.vue'

export default {
  name: 'SmartBinContainer',
  components: {
    SmartBinStatus
  }
}

</script>

<style>
div#SmartBinContainer{
    background-color: gray;
}

</style>
