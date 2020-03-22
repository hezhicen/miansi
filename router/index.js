import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: ()=>import('../views/No.vue')
      },
      {
        path: '/add',
        component: ()=>import('../views/Add.vue')
      },
      {
        path: '/ok',
        component: ()=>import('../views/Ok.vue')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
