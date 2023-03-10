import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'

Vue.use(VueRouter)

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default routes