import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GallerieView from "@/views/GallerieView";
import ImpressumView from "@/views/ImpressumView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallerie',
    name: 'gallerie',
    component: GallerieView
  },

  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
