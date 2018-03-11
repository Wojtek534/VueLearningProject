<template>
  <div>
    <button class="btn btn-primary" @click="NavigateBack">Back to details</button>
    <hr>
    <p>Edit</p>
    <p>{{$route.query.locale}}</p>
    <p>{{$route.query.q}}</p>
    <hr>
     <button class="btn btn-primary" @click="Confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">some text below</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      Confirmed: false
    }
  },
  methods: {
    NavigateBack() {
      this.$router.push("/user/" + this.$route.params.id);
    }
  },
  beforeRouteLeave(to, from, next){
    if(confirm("Confirm leave ?")){
      next()
    }
  }
};
</script>
