import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 组件
import User from './components/User/User.vue'
import Assessment from './components/Assessment/Assessment.vue'
import Class from './components/Class/Class.vue'
import Task from './components/Task/Task.vue'
import Track from './components/Track/Track.vue'
import Database from './components/Database/Database.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/user', component: User },
        { path: '/assessment', component: Assessment },
        { path: '/class', component: Class },
        { path: '/task', component: Task },
        { path: '/track', component: Track },
        { path: '/database', component: Database }
      ]
    }
  ]
})
