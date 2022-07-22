import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import CodeView from "@/views/CodeView";
import RegisterView from "@/views/RegisterView";

Vue.use(VueRouter)


function guardMyroute(to, from, next)
{
  var isAuthenticated= false;

  if(localStorage.getItem('patientId') && localStorage.getItem('code') && localStorage.getItem('expireDate')){
    var datetime_regex = /(\d\d)\.(\d\d)\.(\d\d\d\d)\s(\d\d):(\d\d)/;
    var date = datetime_regex.exec(localStorage.getItem('expireDate'));
    var expireDate = new Date(date[3], date[2], date[1], date[4], date[5]);
    var currentTime = new Date();

    if(currentTime <= expireDate) {
      isAuthenticated = true;
    }
  }

  if(isAuthenticated) 
  {
    if(to.name == 'login' || to.name == 'code' || to.name == 'register') {
      next('/lk/');
    }
    else{
      next(); // allow to enter route
    }
    
  } 
  else
  {
    if(to.name != 'login' && to.name != 'code' && to.name != 'register')
    {
      localStorage.setItem('patientId', '');
      localStorage.setItem('code', '');
      localStorage.setItem('expireDate', '');
      next('/lk/login/');
    }
    else{
      next();
    }
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter : guardMyroute,
    component: HomeView
  },
  {
    path: '/lk/',
    name: 'home',
    beforeEnter : guardMyroute,
    component: HomeView
  },
  {
    path: '/lk/login/',
    name: 'login',
    beforeEnter : guardMyroute,
    component: LoginView
  },
  {
    path: '/lk/code/',
    name: 'code',
    beforeEnter : guardMyroute,
    component: CodeView
  },
  {
    path: '/lk/register/',
    name: 'register',
    beforeEnter : guardMyroute,
    component: RegisterView
  },
  {
    path: '/lk/services/',
    name: 'services',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/ServicesView.vue')
  },
  {
    path: '/lk/services/service/:id',
    name: 'service',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/ServicesDetailView.vue')
  },
  {
    path: '/lk/analyzes/',
    name: 'analyzes',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyzesView.vue')
  },
  {
    path: '/lk/analyzes/view/',
    name: 'analyzes-view',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyzesViewView.vue')
  },
  {
    path: '/lk/analyzes/appointment/',
    name: 'analyzes-appointment',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/AnalyzesAppointmentView.vue')
  },
  {
    path: '/lk/visits/',
    name: 'visits',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitsView.vue')
  },
  {
    path: '/lk/visits/planned/',
    name: 'visits-planned',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitsPlannedView.vue')
  },
  {
    path: '/lk/visits/history/',
    name: 'visits-history',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/VisitsHistoryView.vue')
  },
  {
    path: '/lk/doctors/',
    name: 'doctors',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorsView.vue')
  },
  {
    path: '/lk/doctors/doctor/:id',
    name: 'doctor',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/DoctorView.vue')
  },
  {
    path: '/lk/appointment/',
    name: 'appointment',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/AppointmentView.vue')
  },
  {
    path: '/lk/appointment-success/',
    name: 'appointment-success',
    beforeEnter : guardMyroute,
    component: () => import(/* webpackChunkName: "about" */ '../views/AppointmentDoneView.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
  mode: 'history',
  base: "/",
})

export default router
