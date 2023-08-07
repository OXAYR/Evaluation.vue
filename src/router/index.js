import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import TaskView from '../views/TaskView.vue'


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
    childrens:[
      {
        path:'/tasklist',
        component: TaskView
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
