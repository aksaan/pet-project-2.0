import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import { VueDadata } from 'vue-dadata';
import 'vue-dadata/dist/style.css';

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Vue)
  .use(VueCookies)
  .use(VueDadata)
  .mount('#app')
