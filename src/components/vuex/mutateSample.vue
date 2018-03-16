<template>
  <div>
    <p>Numer is {{getCounter}}</p>
    <p>Double is {{doubleCounter}}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // getters form store
  computed: {
    ...mapGetters(["getCounter", "doubleCounter"])
  }
};
</script>
