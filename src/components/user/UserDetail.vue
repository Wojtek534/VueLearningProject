<template>
  <div>
    <button class="btn btn-primary" @click="NavigateBack">Back</button>
    <hr>
    <h3>Details</h3>
    <p>User loaded Id: {{$route.params.id}}</p>
    <router-link tag="button" class="btn btn-primary" :to="NavigationLink">Edit user</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      NavigationLink: {
        name: "userEdit",
        params: {
          id: this.$route.params.id
        },
        query: {
          locale: "en",
          q: "12"
        },
        hash: '#data'
      }
    };
  },
  methods: {
    NavigateBack() {
      this.$router.push({ name: "userStart" });
    }
  }
};
</script>
