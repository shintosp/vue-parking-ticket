import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TicketList from '../views/TicketList.vue'
import SetTotalSlots from '../views/SetTotalSlots.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/ticket-list',
    name: 'TicketList',
    component: TicketList
  },
  {
    path: '/set-total-slots',
    name: 'SetTotalSlots',
    component: SetTotalSlots
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
