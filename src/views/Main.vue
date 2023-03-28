<template>
  <v-card text="" width="300" height="400px" color="#675E94">
      <div class="text-h6 mb-1">Карточка питомца</div>
      <v-file-input color="#F5C7F7" accept="image/*" label="Фото питомца"></v-file-input>
      <div class="text-h6 mb-1">Информация о питомце</div>
      <v-form>
        <v-container>
          <v-text-field color="#F5C7F7" label="Имя:"></v-text-field>
          <v-text-field color="#F5C7F7" label="Местонахождение приюта:"></v-text-field>
          <v-text-field color="#F5C7F7" label="Важная информация о питомце:"></v-text-field>
        </v-container>
      </v-form>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>