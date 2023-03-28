<template>
  <main v-if="user.status==3">
  <v-container>
    <v-text-field label="имя" color="purple-lighten-3" v-model="user.name"></v-text-field>
  </v-container>
    <v-container class="d-flex justify-center">
      <v-card width="400">
              <v-img src="../assets/icons/dog.png" alt="" width="250" class="align-center"></v-img>
              <h2 class="text-center text-purple-lighten-4 mb-5">Собаки</h2>
        </v-card>
        </v-container>
        <v-container class="d-flex justify-center">
          <v-card width="400">
                <v-img src="../assets/icons/cat.png" alt="" width="250" class="align-center"></v-img>
                <h2 class="text-center text-purple-lighten-4 mb-5">Кошки</h2>
          </v-card>
        </v-container>
        <v-container class="d-flex justify-center">
          <v-card width="400">
                <v-img src="../assets/icons/other.png" alt="" width="250" class="align-center"></v-img>
                <h2 class="text-center text-purple-lighten-4 mb-5">Другие</h2>
        </v-card>
      </v-container>
  </main>
</template>

<script>


export default ({
  name: 'HomeView',
  data(){
    return{
        user : {
        name : "", 
        }
    }
    },

  components: {
  },
  computed:{
    main(e){
      e.preventDefault();
        let user={
          name: this.name,
        }
        console.log(user);
        this.$store.dispatch("registration", user)
      }
    }
});
</script>