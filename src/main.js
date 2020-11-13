import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MiComponente from './components/MiComponente.vue'
import HolaMundo from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: LastArticles },
  { path: '/ultimos-articulos', component: LastArticles },
  { path: '/mi-componente', component: MiComponente },
  { path: '/', component: LastArticles },
  { path: '/hola-mundo', component: HolaMundo }
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
