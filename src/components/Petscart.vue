<template>
    <v-container class="d-flex w-100 justify-center align-center h-100">
        <v-card width="800" color="deep-purple-darken-2" class="pa-10" elevation="5">
            <v-form>
                <h1 class="text-center mb-5">Питомец</h1>
                <v-row class="d-flex align-center">
                    <v-text-field label="Имя" color="purple-lighten-3" v-model="name"></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field label="Местонахождение приюта:" color="purple-lighten-3" v-model="Местонахождение"></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field color="#F5C7F7" label="Краткая информация о питомце:"></v-text-field>
                </v-row>
                <v-row>
                    <v-text-field color="#F5C7F7" label="Дата рождения"></v-text-field>
                </v-row>
                <v-row>
                    <v-file-input label="File input" variant="filled" prepend-icon="mdi-camera"></v-file-input>
                </v-row>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>