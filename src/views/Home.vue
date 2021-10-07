<template>
  <div class="home">
    <img alt="State Tracker logo" src="../assets/state-tracker-logo.png">
    <HelloWorld msg="Welcome to State Tracker!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
