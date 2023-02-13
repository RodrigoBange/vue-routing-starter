<script>
import Navigation from './components/Navigation.vue'
import Router from './router/index.js'

export default {
  name: "App",
  components: {
    Navigation,
    Router
  }
};
</script>

<template>
  <navigation />
  <!-- Add a router view -->
  <router-view></router-view>
</template> 

<style scoped>
</style>
