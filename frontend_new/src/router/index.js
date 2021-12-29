import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About'
import Home from '@/views/Home'
import Price from '@/views/Price'
import Service from '@/views/Service'
import Team from '@/views/Team'
import Auth from '@/views/Authorization'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'RocketWash | Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'RocketWash | About' }
  },
  {
    path: '/price',
    name: 'Price',
    component: Price,
    meta: { title: 'RocketWash | Price' }
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: { title: 'RocketWash | Service' }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: { title: 'RocketWash | Team' }
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: Auth,
    meta: { title: 'RocketWash | Authorization' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
});

export default router
