<template>
  <div id="app">
    <Header />
    <HeroComponent />
    <ServicesComponent />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import HeroComponent from './components/HeroComponent.vue'


export default {
  name: 'App',
  components: {
    Header,
    HeroComponent,
    ServicesComponent
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 16px 0;
}
</style>
