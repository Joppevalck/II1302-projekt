<template>
    <div id="SmartBinContainer">
        <h3>Smart Bins</h3>
        <SmartBinStatus v-for="item in this.items" :key="item.message" v-bind:smartBinId=item.id v-bind:procent=item.current_trash />
    </div>
</template>

<script>
import SmartBinStatus from './SmartBinStatus.vue'
import { cosmos }from '../cosmos/cosmos.js'

export default {
  name: 'SmartBinContainer',
  components: {
    SmartBinStatus
  },
  data(){
      return {
        items: []
      }
  },
  mounted() {
    cosmos.getAllData().then(res => (this.items = res)) 
  }
}

</script>

<style>
div#SmartBinContainer{
    background-color: gray;
}

</style>
