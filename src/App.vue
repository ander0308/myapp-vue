<template>
  <div id="app">
    <Header />
    <HeroComponent />
    <ServicesComponent />
    <FormComponent />

    <!-- Este componente foi importado globalmente no main.js  -->
    <global-component></global-component>

    
    <!-- Este componente foi importado local no App.vue  -->
    <local-component></local-component>

  </div>
</template>

<script>

import Header from './Header.vue';
import ServicesComponent from './Services.vue';
import HeroComponent from './Hero.vue';
import FormComponent from './components/FormComponent.vue';
// importando localmente
import LocalComponent from './components/LocalComponent.vue'; 


export default {
  name: 'App',
  components: {
    Header,
    HeroComponent,
    ServicesComponent,
    FormComponent,
    'local-component' : LocalComponent   // importando localmente
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

}
</style>
