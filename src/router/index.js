import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Account from '../views/Account.vue'
import States from '../views/States.vue'
import Visual from '../views/Visual.vue'
import StateData from '../views/statedata.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/state',
    name: 'States',
    component: States
  },
  {
    path: '/visual',
    name: 'Visua.',
    component: Visual
  },
  {
    path: '/statedata',
    name: 'statedata.',
    component: StateData
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
