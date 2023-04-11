<template>
  <v-container class="d-flex w-100 justify-center align-center h-100">
    <v-card width="700" color="deep-purple-darken-2" class="pa-10" elevation="5">
      <v-form>
        <h1 class="text-center mb-5 ">Стать приютом</h1>
        <v-row class="d-flex align-center">
          <v-file-input label="Фотография" variant="filled" prepend-icon="mdi-camera" v-model="photo" :rulse='rules.photo' accept="image/png, image/jpeg, image/gif"></v-file-input>
        </v-row>
        <v-row class="d-flex align-center">
            <v-text-field label="ОГРН/ОГРНИП" color="purple-lighten-3" v-model="ogrn" :rules='rules.numogrn'></v-text-field>
        </v-row>
        <v-row class="d-flex align-center">
            <v-text-field label="Номер телефона" color="purple-lighten-3" v-model="number" :rules='rules.number' hint="Номер телефона без пробелов и плюса, 11 цифр"></v-text-field>
        </v-row>
        <v-row>
            <v-text-field label="E-mail" color="purple-lighten-3" v-model="email" :rules='rules.email'></v-text-field>
        </v-row>
        <v-row>
            <v-text-field label="Основной адрес" color="purple-lighten-3" v-model="address"></v-text-field>
        </v-row>
        <v-row>
            <v-textarea label="Описание" color="purple-lighten-3" v-model="feature"></v-textarea>
        </v-row>
        <v-row class="justify-space-around">
            <v-btn variant="outlined" color="purple-lighten-3" class="mt-5" elevation="5" @click="createShelter">Создать страницу приюта</v-btn>
            <v-btn variant="outlined" color="purple-lighten-3" class="mt-5" elevation="5">Выйти</v-btn>
        </v-row>
      </v-form>  
    </v-card> 
  </v-container>
</template>

<script>
export default {
  data(){
        return{
          photo : null,
          ogrn : "",
          number : "",
          email : "",
          address: "",
          feature : "",
          rules: {
            photo: [
              value => !value || !value.length || value[0].size < 2000000 || 'Avatar size should be less than 2 MB!'
            ],
            number: [
              value =>  !/^[0-9]*$/.test(value) || value.length !== 11 || 'Телефон должен быть из 11 цифр'
            ],
            numogrn: [value => (value.length === 13 && (value[0] == 1 || value[0] == 5)) || !/^[0-9]*$/.test(value) ||  (value.length === 15 && value[0] == 3) || 'ОГРН представляет собой код из 13 цифр, ОГРНИП — из 15'
            ],
            email: [value => !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(value) 
            ],
          },
        }
    },
    methods : {
      createShelter(){
        console.log(this.photo);
      },
    }
}
</script>

<style>

</style>