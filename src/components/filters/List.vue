<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                <p>Filters and mixins</p>
                <input v-model="selected" class="form-control">
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {fruitMixin} from './mixins.js'
    export default {
       mixins: [fruitMixin]
    }
</script>
