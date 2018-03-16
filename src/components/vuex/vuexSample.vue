<template>
  <div>
    <p>Numer is {{getCounter}}</p>
    <p>Double is {{doubleCounter}}</p>
    <hr>
    <button class="btn btn-primary" @click="increment({number: 100, time: 500})">Increment</button>
    <button class="btn btn-info" @click="decrement">Decrement</button>
    <hr>
    <mutated-sample/>
  </div>
</template>
<script>
import MutatedSample from "./mutateSample";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      number: 0
    };
  },
  methods: {
    ...mapMutations(["decrement"]),
    ...mapActions(["increment"])
  },
  // getters form store
  computed: {
    ...mapGetters(["getCounter", "doubleCounter"])
  },
  components: {
    mutatedSample: MutatedSample
  }
};
</script>
