import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from "../views/SignIn.vue"
import SignUp from "../views/SignUp.vue"
// import Registration from "../views/Registration.vue"
// import Authorization from "../views/Authorization.vue"
import Profile from "../views/Profile.vue"  
import Main from "../views/Main.vue"
import Shelter from "../views/Shelter.vue"
import ShelterPage from "../views/ShelterPage.vue"
import SocialNetwork from "../views/SocialNetwork.vue"

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
  },
  {
    path : "/main",
    component : Main,
    name : "main"
  },
  {
    path : "/shelter",
    component : Shelter,
    name : "shelter"
  },
  {
    path : "/sheltpage",
    component : ShelterPage,
    name : "sheltpage"
  },
  {
    path : "/socialnetwork",
    component : SocialNetwork,
    name : "socialnetwork"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
