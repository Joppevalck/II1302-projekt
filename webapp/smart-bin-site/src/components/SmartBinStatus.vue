<template>
  <div class="StatusContainer">
      <h1 class="title">{{smartBinId}}</h1>
      <p>Bin fullness: {{procent}}%</p>
  </div>
</template>

<script>

export default {
  
  name: 'SmartBinStatus',
  props: {
      smartBinId: String,
      procent: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.StatusContainer{
    background-color: aquamarine;
    width: 200px
}

h1.title{
  font-size: 20px;
}
</style>
