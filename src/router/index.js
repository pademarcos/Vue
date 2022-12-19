import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/buscador',
    name: 'buscador',
    
    component: () => import('../views/BuscadorView.vue')
  },
  {
    path: '/formulario',
    name: 'formulario',
    
    component: () => import('../views/BuscadorView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
