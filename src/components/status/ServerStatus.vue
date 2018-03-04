<template>
  <div>
    <app-comp-status :defaultStatus="customStatus" v-for="item in 2" :key="item" @myEvent="customStatus = $event" />
    <hr>
    <button @click="changeStatus">Change status</button>
  </div>
</template>

<script>
  import status from "./Status";
  export default {
    data() {
      return {
        customStatus: "default"
      };
    },
    components: {
      "app-comp-status": status
    },
    methods: {
      changeStatus() {
        this.customStatus = "Denied";
      }
    }
  };
</script>
