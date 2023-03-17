import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from "../views/SignIn.vue"
import SignUp from "../views/SignUp.vue"
// import Registration from "../views/Registration.vue"
// import Authorization from "../views/Authorization.vue"
import Profile from "../views/Profile.vue" 
// import Main from "../views/Main.vue"
// import Shelter from "../views/Shelter.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : "/signin",
    component : SignIn,
    name : "signin"
  },
  {
    path : "/signup",
    component : SignUp,
    name : "signup"
  },
  {
    path : "/profile",
    component : Profile,
    name : "profile"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
