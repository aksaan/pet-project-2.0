<template>
    <h1 class="text-center mb-5 ">Название</h1>
    <v-container class="d-flex justify-center align-center w-300 h-300">
        <v-card width="800" color="deep-purple-darken-2" class="pa-10" elevation="5">
        <v-avatar color="surface-variant" size="x-large"></v-avatar>
            <v-row>
                <v-text-field label="Статус"></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Ответственное лицо"></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Номер телефона"></v-text-field>
            </v-row>
            <v-row>
                <v-text-field label="Почта"></v-text-field>
            </v-row>
            <v-row>
                <v-textarea name="input-7-1" variant="filled" label="Описание" auto-grow></v-textarea>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>