import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/homeWrap',
    component:resolve=>(require(["@/views/Home/index.vue"],resolve)),
    children:[
      {
        path: '/homeWrap',
        name: 'homeWrap',
        component:resolve=>(require(["@/views/HomeWrap/index.vue"],resolve))
      },
    ]
  },
  {
    path: '/rentingList',
    name: 'rentingList',
    component:resolve=>(require(["@/views/RentingList/index.vue"],resolve))
  },
  {
    path: '/liveDetails',
    name: 'liveDetails',
    component:resolve=>(require(["@/views/LiveDetails/index.vue"],resolve))
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
