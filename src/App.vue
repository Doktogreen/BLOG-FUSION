<template>
  <nav-bar/>
  <router-view/>
  <Footer />
  <!-- <footer /> -->
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar, Footer},
  name: 'App',
  
}
</script>

<style>
  @import './components/all-profile//Profile.css';
</style>
