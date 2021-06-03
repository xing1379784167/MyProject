import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const WorkContext = () => import('../views/workcontext/WorkContext.vue')
const Edution = () => import('../views/edution/Edution.vue')
const WorkExperience = () => import('../views/workexperience/WorkExperience.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:() => import('../views/home/Home.vue')
    // component:Home
  },
  
  {
    path:'/workcontext',
    component: () => import('../views/workcontext/WorkContext.vue')
    // component:WorkContext
  },

  {
    path:'/edution',
    component: () => import('../views/edution/Edution.vue')
    // component:Edution
  },

  {
    path:'/workexperience',
    component: () => import('../views/workexperience/WorkExperience.vue')
    // component:WorkExperience
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
