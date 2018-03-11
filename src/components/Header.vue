<template>
  <div>
    <ul class="nav nav-pills nav-fill">
      <router-link to="/" tag="li" active-class="nav-item active" exact>
        <a class="nav-link">Home</a>
      </router-link>
      <router-link v-for="(item, index) in Header" :key="index" :to="'/'+item.Link" tag="li" class="nav-item">
        <a class="nav-link">{{item.Name}}</a>
      </router-link>
    </ul>
  </div>

</template>
<script>
import HeaderElement from "./HeaderElement";

export default {
  data() {
    return {
      Header: [
        {
          Name: "User",
          Link: "User"
        },
        {
          Name: "Animations",
          Link: "Animations"
        },
        {
          Name: "Directives",
          Link: "Directives"
        },
        {
          Name: "Filters",
          Link: "Filters"
        },
        {
          Name: "Rest Http",
          Link: "Rest"
        },
        {
          Name: "Form",
          Link: "form"
        },
        {
          Name: "Quotes",
          Link: "Quotes"
        },
        {
          Name: "Samples",
          Link: "Sample"
        }
      ]
    };
  },
  components: {
    headerElement: HeaderElement
  }
};
</script>
