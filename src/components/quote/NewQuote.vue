<template>
    <div class="container">
        <form>
            <div class="col-sm-8 col-xs-12 col-md-6 mx-auto form-group">
                <label>Quote</label>
                <textarea class="form-control" rows="3" v-model="quote"></textarea>
            </div>
            <div class="col-sm-8 col-xs-12 col-md-6 mx-auto form-group">
                <button @click.prevent="createNew" class="btn btn-primary">Add Quote</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            }
        },
        methods: {
            createNew() {
                this.$emit('quoteEmit', this.quote);
                this.quote = ''
            }
        }
    
    };
</script>

<style>
    
</style>
