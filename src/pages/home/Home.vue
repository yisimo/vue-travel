<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style scoped>
.hello {
  color: red;
}
</style>
