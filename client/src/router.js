import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EditComponent from './components/customer/Edit.vue'
import CreateComponent from './components/customer/Create.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: { name: 'home' } },
    { path: '/home', name: 'home', component: Home },
    { path: '/create', name: 'Create', component: CreateComponent },
    { path: '/edit/:id', name: 'Edit', component: EditComponent }
  ]
})
