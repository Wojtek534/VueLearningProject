<template>
  <div>
    <p>User component</p>
    <button class="btn btn-primary" @click="NavigateHome">Go Home</button>
    <hr>
    <button class="btn btn-primary btn-md" @click="fetchData">Get Data</button>
    <br>
    <br>
    <app-table :users="users" />
    <router-view></router-view>
  </div>
</template>
<script>
import Table from "../http/Table";

export default {
  data() {
    return {
      newUser: {
        Username: "",
        Email: ""
      },
      users: [],
      id: this.$route.params.id
    };
  },
  methods: {
    NavigateHome() {
      this.$router.push("/");
    },
    fetchData() {
      this.$http
        .get("data.json")
        .then(
          response => {
            return response.json();
          },
          error => {
            console.log(error);
          }
        )
        .then(data => {
          console.log(data);
          const array = [];
          for (let key in data) {
            array.push(data[key]);
          }
          this.users = array;
        });
    }
  },
  components: {
    appTable: Table
  }
};
</script>
