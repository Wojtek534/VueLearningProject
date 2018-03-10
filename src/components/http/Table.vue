<template>
  <table class="table table-hover">
  <thead class="thead-inverse">
    <th>#</th>
    <th> UserName</th>
    <th>Email</th>
  </thead>
    <tbody v-for="(user, index) in users" :key="index">
      <th scope="row">
        {{index}}
      </th>
      <td>{{user.Username}}</td>
      <td>{{user.Email}}</td>
    </tbody>
    </table>
</template>
<script>
export default {
props:['users']
}
</script>
