<template>
    <v-container class="d-flex w-100 justify-center align-center h-100">
        <v-card width="700" color="deep-purple-darken-2" class="pa-10" elevation="5">
            <v-form>
                <h1 class="text-center mb-5 ">Профиль</h1>
                <v-row class="d-flex align-center">
                    <v-text-field label="Имя" color="purple-lighten-3" v-model="name" :disabled="!fields.name"></v-text-field>
                    <v-btn variant="outlined" color="purple-lighten-3" size="small" elevation="5" :icon="(fields.name) ? 'mdi-check' : 'mdi-pencil'" @click="setField('name')"></v-btn>
                </v-row>
                <v-row>
                    <v-text-field label="E-mail" color="purple-lighten-3" v-model="email" :disabled="!fields.email"></v-text-field>
                    <v-btn variant="outlined" color="purple-lighten-3" size="small" elevation="5" :icon="(fields.email) ? 'mdi-check' : 'mdi-pencil'" @click="fields.email = !fields.email"></v-btn>
                </v-row>
                <v-row>
                    <v-text-field :type="(passcheck) ? 'text' : 'password'" label="Пароль" color="purple-lighten-3" v-model="password" :disabled="!fields.password"></v-text-field>
                    <v-btn variant="outlined" color="purple-lighten-3" size="small" elevation="5" :icon="(passcheck) ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" @click="passcheck = !passcheck"></v-btn>
                    <v-btn variant="outlined" color="purple-lighten-3" size="small" elevation="5" :icon="(fields.password) ? 'mdi-check' : 'mdi-pencil'" @click="fields.password = !fields.password"></v-btn>
                </v-row>
                <v-row class="justify-space-around">
                    <v-btn variant="outlined" color="purple-lighten-3" class="mt-5" elevation="5" @click="registration($event)">Выйти</v-btn>
                    <router-link :to="{name: 'shelter'}"><v-btn variant="outlined" color="purple-lighten-3" class="mt-5" elevation="5">Стать приютом</v-btn></router-link>
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
        name : "",
        fields: {
        email : false,
        name : false,
        password : false
        },
        passcheck: false,
    }
    },
    computed:{
      user(){
        return this.$store.state.user
      }
    },
    mounted(){
        console.log(this.user)
        this.email = this.user.login,
        this.password = this.user.password,
        this.name = this.user.name
    },
    methods:{
        setField(field){
            if(field==="name"){
                if(!this.fields.name){
                    this.fields.name=true;
                }
                else {
                    this.$store.dispatch("editUser", {field, value : this.name}).then(res => {
                        console.log(res);
                        if(res){
                        this.fields.name=false;
                        }
                    })
                }
            } 
            else if(field==="email"){
                if(!this.fields.email){
                    this.fields.email=true;
                }
                else{
                    this.$store.dispatch("editUser", {field, value : this.email}).then(res => {
                        console.log(res);
                        if(res){
                            this.fields.email=false;
                        }
                    })
                }
            }
            else if(field==="password"){
                if(!this.fields.password) {
                    this.fields.password=true;
                }
                else {
                    this.$store.dispatch("editUser", {field, value : this.password}).then(res => {;
                        console.log(res);
                            if(res){
                                this.fields.password=false;
                            }
                        })
                    }
                }
            }
        },
        switchPass(){

        },
        editUser(){

        }
    }
</script>

<style>

</style>