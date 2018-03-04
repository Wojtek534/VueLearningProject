<template>
    <div class="row">
        <single v-for="(q, index) in quotes" :key="index" @click.native="deleteQuote(index)">
           {{q}}
        </single>
    </div>
</template>

<script>
    import singleQuote from "./SingleQuote";
    export default {
        props: ["quotes", "maxQuotes"],
        methods:{
            deleteQuote(index){
                this.$emit('quoteDeleted', index);
            }
        },
        components: {
            single: singleQuote
        }
    };
</script>

<style>
    
</style>
