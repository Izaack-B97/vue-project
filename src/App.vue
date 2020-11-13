<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <Slider></Slider>
    <div class="center">
      <!-- <LastArticles></LastArticles> -->
      <router-view></router-view>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/HeaderComponent.vue';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar.vue';
// import LastArticles from './components/LastArticles';
import FooterComponent from './components/FooterComponet';

export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    Slider,
    Sidebar,
    // LastArticles,
    FooterComponent
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import './assets/css/styles.css';
</style>
