<template>
  <v-container class="d-flex w-100 justify-center align-center h-100">
        <v-card width="1000" height="800" color="deep-purple-darken-2" class="pa-10" elevation="5">
            <v-row>
            <v-col class="d-flex justify-flex-start">
                <v-avatar color="surface-variant" size="250"></v-avatar>
            </v-col>
            <v-col class="d-flex justify-end justify-center pa-l">
                    <v-sheet label="Имя" color="purple-lighten-3" v-model="name" :height="50" :width="100"></v-sheet>
            </v-col>
                </v-row>
            <div class="d-flex justify-end flex-column" width="200">
                <v-row>
                    <v-sheet color="#F5C7F7" label="Приют" :height="50" :width="100"></v-sheet>
                </v-row>
                <v-row>
                    <v-sheet color="#F5C7F7" label="Дата регистрации" :height="50" :width="100"></v-sheet>
                </v-row>
            </div>
        </v-card>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>