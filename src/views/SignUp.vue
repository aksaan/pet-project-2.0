<template>
    <v-container class="d-flex w-100 justify-center align-center h-100">
        <v-card width="500" color="deep-purple-darken-2" class="pa-10" elevation="5">
            <v-form>
                <h1 class="text-center text-purple-lighten-4 mb-5">Регистрация</h1>
                <v-text-field label="Имя" color="purple-lighten-3" v-model="name"></v-text-field>
                <v-text-field label="Фамилия" color="purple-lighten-3" v-model="secondname"></v-text-field>
                <v-text-field label="E-mail" color="purple-lighten-3" v-model="email"></v-text-field>
                <v-text-field type="password" label="Пароль" color="purple-lighten-3" v-model="password"></v-text-field>
                <v-row class="justify-center">
                <v-btn variant="outlined" color="purple-lighten-3" d-flex justify-center class="mt-5" elevation="5" @click="registration($event)">Создать</v-btn>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            name : "",
            secondname : "",
            email : "",
            password : "",
        }
    },
    methods: {
        registration(e){
            e.preventDefault();
            let user={
                secondname: this.secondname,
                name: this.name,
                login: this.email,
                password: this.password,
            }
            console.log(user);
            this.$store.dispatch("registration", user)
        }
    }
}
</script>

<style>

</style>