<template>
  <div id="app">
    <main>

      <navbar-component></navbar-component>
      <router-view></router-view>
      <footer-component></footer-component>

    </main>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/FooterBar.vue';
import FooterComponent from "./components/FooterBar";

export default {
  name: 'app',
  components: {
    FooterComponent,
    'navbar-component': Navbar,
    'footer-component': Footer
  }
}
</script>

<style>
</style>
