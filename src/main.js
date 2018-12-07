import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Foo from './components/HelloWorld.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  forceRefresh: true,
  routes: [
    { path: '/foo', component: Foo, name: 'Foo'
    }
  ]
})


new Vue({
  el: '#app',
  router,
  render: h => h(App),

})
