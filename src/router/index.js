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
    path: '/doctors',
    name: 'doctors',
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorsView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import(/* webpackChunkName: "about" */ '../views/AppointmentView.vue')
  },
  {
    path: '/appointment-success',
    name: 'appointment-success',
    component: () => import(/* webpackChunkName: "about" */ '../views/AppointmentDoneView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
})

export default router
