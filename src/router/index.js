import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Prijava/Login'
import Register_1 from '@/components/Prijava/Register_1'
import Home from '@/components/Home'
import Kalkulator_kalorija from '@/components/Kalkulator_kalorija'
import Plan_prehrane from '@/components/Plan_prehrane/plan_prehrane_home'
import Obiteljski_plan from '@/components/Plan_prehrane/obiteljski_plan'
import Pojedinacni_plan from '@/components/Plan_prehrane/pojedinacni_plan'
import Pojedinacni_zene from '@/components/Plan_prehrane/pojedinacni_zene'
import Pojedinacni_muski from '@/components/Plan_prehrane/pojedinacni_muski'




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
  {
    path: '/kalkulator_kalorija',
    name: 'kalkulator_kalorija',
    component: Kalkulator_kalorija
  },
  {
    path: '/plan_prehrane_home',
    name: 'plan_prehrane_home',
    component: Plan_prehrane
  },
  {
    path: '/obiteljski_plan',
    name: 'obiteljski_plan',
    component: Obiteljski_plan
  },
  {
    path: '/pojedinacni_plan',
    name: 'pojedinacni_plan',
    component: Pojedinacni_plan
  },
  {
    path: '/pojedinacni_zene',
    name: 'pojedinacni_zene',
    component: Pojedinacni_zene
  },
  {
    path: '/pojedinacni_muski',
    name: 'pojedinacni_muski',
    component: Pojedinacni_muski
  },

 
  
]
})



export default router
