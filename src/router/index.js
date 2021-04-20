import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Prijava/Login'
import Register_1 from '@/components/Prijava/Register_1'
import Home from '@/components/Home'

Vue.use(Router)

const router =  new Router({

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register_1',
    name: 'register_1',
    component: Register_1
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  
]
})



export default router
