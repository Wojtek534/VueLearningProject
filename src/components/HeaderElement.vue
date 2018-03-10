<template>
  <li class="nav-item">
    <div class="nav-link"><router-link :to="Link">{{Name}}</router-link></div>
  </li>
</template>
<script>
export default {
  props:['Link', 'Name']
}
</script>
