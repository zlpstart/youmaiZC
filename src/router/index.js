import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/homeWrap',
    component: resolve => (require(["@/views/Home/index.vue"], resolve)),
    children: [
      {
        path: '/homeWrap',
        name: 'homeWrap',
        component: resolve => (require(["@/views/HomeWrap/index.vue"], resolve))
      },
      {
        path: '/serve',
        name: 'serve',
        component: resolve => (require(["@/views/Serve/index.vue"], resolve))
      },
      {
        path: '/service',
        name: 'service',
        component: resolve => (require(["@/views/Service/index.vue"], resolve))
      },
      {
        path: '/user',
        name: 'user',
        component: resolve => (require(["@/views/User/index.vue"], resolve))
      },
    ]
  },
  {
    path: '/rentingList',
    name: 'rentingList',
    component: resolve => (require(["@/views/RentingList/index.vue"], resolve))
  },
  {
    path: '/RentingDetails',
    name: 'RentingDetails',
    component: resolve => (require(["@/views/RentingDetails/index.vue"], resolve))
  },
  {
    path: '/liveList',
    name: 'liveList',
    component: resolve => (require(["@/views/LiveList/index.vue"], resolve))
  },
  {
    path: '/liveDetails',
    name: 'liveDetails',
    component: resolve => (require(["@/views/LiveDetails/index.vue"], resolve))
  },
  {
    path: '/appointment/:type',
    name: 'appointment',
    component: resolve => (require(["@/views/Appointment/index.vue"], resolve))
  },
  {
    path: '/orderform',
    name: 'orderform',
    component: resolve => (require(["@/views/OrderForm/index.vue"], resolve))
  },
  {
    path: '/payment',
    name: 'payment',
    component: resolve => (require(["@/views/Payment/index.vue"], resolve))
  },
  {
    path: '/paymenterr',
    name: 'paymenterr',
    component: resolve => (require(["@/views/PaymentERR/index.vue"], resolve))
  },
  {
    path: '/paymentsucceed',
    name: 'paymentsucceed',
    component: resolve => (require(["@/views/PaymentSucceed/index.vue"], resolve))
  },
  {
    path: '/havePaid',
    name: 'havePaid',
    component: resolve => (require(["@/views/HavePaid/index.vue"], resolve))
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
