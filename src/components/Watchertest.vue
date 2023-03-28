<template>
  <v-text-field type="number" v-model="a"></v-text-field>
</template>

<script>
export default {
    data(){
        return{
            a : 0,
    }
    },
    watch: {
        a(nextvalue, prevvalue){
            alert(`а изменилась С ${prevvalue} на ${nextvalue}`);
        }
    }
}
</script>

<style>

</style>