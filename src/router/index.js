import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: '/tasklist',
        name: 'SignUp',
        component: SignUpView
      },

    ]
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
