<template>
  <div>
    <p> Status: {{defaultStatus}} </p>
    <button @click="reset" class="btn btn-primary btn-lg">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    defaultStatus: {
      type: String,
      required: true
    }
  },
  methods: {
    reset() {
      this.$emit("myEvent", "EventValue");
    }
  }
};
</script>

<style scoped>
button {
  border: 2px;
}
</style>
