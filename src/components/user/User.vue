<template>
  <div>
    <button class="btn btn-primary" @click="NavigateHome">Go Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    NavigateHome() {
      this.$router.push("/");
    }
  }
};
</script>
