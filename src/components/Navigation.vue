<template>
  <v-app-bar style="weight: 500px;" color="deep-purple-darken-2" density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title class="justify-center">Главная</v-app-bar-title>
          <router-link :to="{name: 'signin'}" v-if="!auth"><v-btn variant="tonal">Вход</v-btn></router-link>
        <div class="text-center" v-else>
        <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
        <v-btn color="deep-purple-lighten-4" v-bind="props">{{user.name}}</v-btn>
      </template>
        <v-list>
          <v-list-item>
            <router-link :to="{name: 'profile'}" ><v-btn variant="tonal">Профиль</v-btn></router-link>
          </v-list-item>
          <v-list-item>
            <router-link :to="{name: 'shelter'}"><v-btn variant="tonal">Приют</v-btn></router-link>
          </v-list-item>
          <v-list-item>
            <v-btn @click="exit">Выйти</v-btn>
          </v-list-item>
      </v-list>
    </v-menu>
  </div>


        </v-app-bar>
        <v-navigation-drawer color="deep-purple-darken-2" expand-on-hover rail>

        <!-- <v-list>
          <v-list-item
            prepend-avatar=""
            title=""
            subtitle=""
          ></v-list-item>
        </v-list> -->

        <v-list density="compact" nav>
          <v-list-item prepend-icon="" title="" value=""></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  computed : {
    auth(){
      console.log(this.$store.state.auth)
      return this.$store.state.auth
    },
    user(){
      console.log(this.$store.state.user)
      return this.$store.state.user
    },
  },
  methods:{
    exit(){
      this.$store.dispatch("exit").then(() => console.log(this.$router.push({name: "signin"})))
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
</style>