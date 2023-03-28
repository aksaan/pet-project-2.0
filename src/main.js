import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue from 'vue'
import VueCookies from 'vue-cookies'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Vue)
  .use(VueCookies)
  .mount('#app')
