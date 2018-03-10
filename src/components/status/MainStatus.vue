<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <app-status/>
    <app-quote :quote='msg'>
      <p slot="title"> this is for slot</p>
      <p slot="content"> tihs for 2nd slot</p>
    </app-quote>
  </div>
</template>

<script>
  import QuoteComponent from "./Quote";
  export default {
    name: "Home",
    data() {
      return {
        msg: "Vue JS Home page"
      };
    },
    components: {
      appQuote: QuoteComponent
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .home {
    background-color: lightblue;
  }
</style>
