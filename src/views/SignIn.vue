<template>
    <v-container class="d-flex w-100 justify-center align-center h-100">
        <v-card width="500" color="deep-purple-darken-2" class="pa-10" elevation="5">
            <v-form>
                <h1 class="text-center text-purple-lighten-4 mb-5">Вход</h1>
                <v-text-field label="email" color="purple-lighten-3" v-model="user.login"></v-text-field>
                <v-text-field type="password" label="Password" color="purple-lighten-3" v-model="user.password"></v-text-field>
                <v-checkbox label="Остаться в сети" v-model="cookies"></v-checkbox>
                    <v-row class="justify-space-around">
                        <v-btn variant="outlined" color="purple-lighten-3" class="mt-5" elevation="5" @click="authorization($event)">Вход</v-btn>
                        <router-link :to="{name: 'signup'}"><v-btn variant="tonal" color="purple-lighten-3" class="mt-5" elevation="5">Регистрация</v-btn></router-link>
                    </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
data(){
    return{
        user : {
        login : "", 
        password : "",
        },
        cookies: false,
    }
    },
    methods: {
        authorization(e){
            e.preventDefault();
            this.$store.dispatch("authorization", this.user).then(data => {
                if(data){
                    this.$cookies.set('refresh',data);
                    console.log(this.$cookies.get('refresh'))
                    this.$router.push({name: "home"})
                }
                else{
                    alert("Неправильный логин или пароль")
                }
            })
        }
    }
}
</script>

<style>

</style>