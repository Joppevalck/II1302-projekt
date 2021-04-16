<template>
  <div class="hello">
    <h1 class="title" >{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloBoys',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.title{
  font-size: 20px;
}
</style>
