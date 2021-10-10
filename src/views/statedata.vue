<template>
  <div class="container mt-5 text-center">
    <GoogleChart />
  </div>
</template>

<script>
import GoogleChart from '../components/GoogleChart.vue'

export default {
  name: 'App',
  components: {
    GoogleChart
  }
}
</script>
