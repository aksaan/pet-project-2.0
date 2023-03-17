<template>
    <v-container class="d-flex w-100 justify-center align-center h-100">
        <v-card width="500" color="deep-purple-darken-2" class="pa-10" elevation="5">
            <v-form>
                <h1 class="text-center text-purple-lighten-4 mb-5">Профиль</h1>
                <v-text-field label="E-mail" color="purple-lighten-3" v-model="email">{{user.email}}</v-text-field>
                <v-text-field type="password" label="Password" color="purple-lighten-3" v-model="password">{{user.secondname}}</v-text-field>
                <v-row class="justify-space-around">
                    <v-btn variant="outlined" color="purple-lighten-3" class="mt-5" elevation="5" @click="registration($event)">Выйти</v-btn>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
    return{
        email : "", 
        password : "",
    }
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    }
}
</script>

<style>

</style>