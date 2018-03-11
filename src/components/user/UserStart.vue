<template>
  <div>
    <ul class="list-group">
      <router-link v-for="(item, index) in Header" :key="index" :to="''+item.Link" tag="li" class="list-group-item" cursor="pointer">
        {{item.Name}}
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Header: [
        {
          Name: "User 1",
          Link: "/user/1"
        },
        {
          Name: "User 2",
          Link: "/user/2"
        },
        {
          Name: "User 3",
          Link: "/user/3"
        }
      ]
    };
  }
};
</script>
