import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: HelloWorld,
    redirect: '/index/index',
    children: [{
      path: '/index/index',
      name: '数据统计',
      props: true,
      component: HelloWorld
    }]
  }]
})
