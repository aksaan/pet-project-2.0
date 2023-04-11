<template>
    <main>
        <Information></Information>
    </main>
</template>

<script>
import Information from "../components/Information.vue"
export default {
    components : {
        Information,
    },
    data(){
        return{
            user : false,
        }
    },
}
</script>

<style>

</style>