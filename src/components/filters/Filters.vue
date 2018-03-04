<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-md-6 mx-auto">
                <p>Filters and mixins</p>
                {{text | toUppercase | toLowercase}}
                <hr>
                <input v-model="selected" class="form-control">
                <ul>
                    <li v-for="(fruit, index) in filteredFruits" :key="index">{{fruit}}</li>
                </ul>
            </div>
        </div>
        <app-list/>
    </div>
</template>

<script>
    import List from './List'
    export default {
        data() {
            return {
                text: 'sample text',
                fruits: ['apple', 'orange', 'banana', 'mellon', 'grape'],
                selected: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase()
            }
        },
        components: {
            appList: List
        },
        computed: {
            filteredFruits() {
                return this.fruits.filter((element) => {
                    return element.match(this.selected)
                })
            }
        }
    }
</script>
