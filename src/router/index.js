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
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServicesView.vue')
  },
  {
    path: '/services/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServicesDetailView.vue')
  },
  {
    path: '/analyzes',
    name: 'analyzes',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyzesView.vue')
  },
  {
    path: '/analyzes/view',
    name: 'analyzes-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyzesViewView.vue')
  },
  {
    path: '/analyzes/appointment',
    name: 'analyzes-appointment',
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyzesAppointmentView.vue')
  },
  {
    path: '/visits',
    name: 'visits',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitsView.vue')
  },
  {
    path: '/visits/planned/',
    name: 'visits-planned',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitsPlannedView.vue')
  },
  {
    path: '/visits/history/',
    name: 'visits-history',
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitsHistoryView.vue')
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorsView.vue')
  },
  {
    path: '/doctors/doctor',
    name: 'doctor',
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorView.vue')
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
