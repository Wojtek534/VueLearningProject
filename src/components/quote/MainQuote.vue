<template>
  <div clas="container">
    <p>MainQuote</p>
    <app-progress :maxQuotes="maxQuotes" :quoteCount="quotes.length"/>
    <app-new-quote @quoteEmit="quoteToArray"></app-new-quote>
    <app-grid :maxQuotes="maxQuotes" :quotes="quotes" @quoteDeleted="deleteQuote"/>
  </div>
</template>

<script>
  import QuoteGrid from './QuoteGrid'
  import NewQuote from './NewQuote.vue'
  import Progress from './HeaderQuote.vue'
  export default {
    data: function() {
      return {
        maxQuotes: 10,
        quotes: ["sample quote"]
      };
    },
    methods:{
      quoteToArray(q){
        if(this.quotes.length < this.maxQuotes){
        this.quotes.push(q)
        }
        else{
          alert('Max quotes number reached.')
        }
      },
      deleteQuote(index){
        this.quotes.splice(index, 1)

      }
    },
    components: {
      appGrid: QuoteGrid,
      appNewQuote: NewQuote,
      appProgress: Progress
    }
  };
</script>

<style>
</style>

