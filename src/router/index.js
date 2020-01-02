import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parents from "../components/FirstPhase";
import Children from "../components/Children/FirstPhaseChildren";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/children',
    name:'Children',
    component: Children,
    props: true
  },
  {
    path:'/parents',
    name: 'Parents',
    component : Parents,
    props:true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
