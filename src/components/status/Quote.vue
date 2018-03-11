<template>
  <div class="home">
    <slot name="title"></slot>
    <p>{{quote}}</P>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style scoped>
div {
  box-shadow: 1 px;
}

.home {
  background-color: lightseagreen;
}
</style>
