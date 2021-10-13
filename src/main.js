import Vue from 'vue'
import App from './App.vue'
// importando o component global 
import GlobalComponent from './components/GlobalComponent.vue'

Vue.config.productionTip = false

// Coponente registrado globalmente 
Vue.component('global-component', GlobalComponent);


new Vue({
  render: h => h(App),
}).$mount('#app')
