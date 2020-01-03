import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parents from "../components/FirstPhase";
import Children from "../components/Children/FirstPhaseChildren";
import SecondPhaseWives from "../components/Wives/SecondPhaseWives";
import ThirdPhaseChildren from "../components/Children/ThirdPhaseChildren";
import FourthPhaseWives from "../components/Wives/FourthPhaseWives";
import FourthPhaseChildren from "../components/Children/FourthPhaseChildren";
import FifthPhaseChildren from "../components/Children/FifthPhaseChildren";

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
    path:'/children/:name/:number/:photo/:path',
    name:'Children',
    component: Children,
    props: true
  },
  {
    path:'/parents',
    name: 'Parents',
    component : Parents,
    props:true,
  },
  {
    path:'/SecondLayerWives/:name/:photo/:path',
    name:'SecondPhaseWives',
    component: SecondPhaseWives,
    props:true,
  },
  {
    path:'/ThirdLayerChildren/:name/:photo/:path',
    name:'ThirdPhaseChildren',
    component: ThirdPhaseChildren,
    props:true,
  },
  {
    path:'/FourthLayerWives/:name/:photo/:path',
    name:'FourthPhaseWives',
    component: FourthPhaseWives,
    props:true,
  },
  {
    path:'/FourthLayerChildren/:name/:photo/:path',
    name:'FourthPhaseChildren',
    component: FourthPhaseChildren,
    props:true,
  },
  {
    path: '/FifthLayerChildren/:name/:photo/:path',
    name:'FifthPhaseChildren',
    component: FifthPhaseChildren,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
