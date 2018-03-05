<template>
<div class="container">
  <div class="row">
    <div class="col-sm-8 col-xs-12 col-md-6 mx-auto">
      <p>Animations</p>
      <hr>
      <button class="btn btn-primary" @click="show =!show">Show Alert</button>
      <br>
      <br>
      <transition name="fade">
      <div class="alert alert-info" v-show="show">Some alert here</div>
      </transition>
      <transition name="slide" type="transition">
      <div class="alert alert-info" v-if="show">Some alert here</div>
      </transition>
      <transition name="fade" appear>
      <div class="alert alert-info" v-if="show">Some alert here</div>
      </transition>
    </div>
  </div>
</div>
</template>
<script>
export default {
data(){
  return{
    show: true
  }
}
}
</script>
<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
 transition: opacity  1s;
}
.fade-leave{

}
.fade-leave-active{
transition: opacity  1s;
opacity: 0;
}
.slide-enter{
 /* transform: translateY(20px) */
 opacity: 0;
}
.slide-enter-active{
animation: slide-in 1s ease-out forwards;
opacity: 0.5;
}
.slide-leave{

}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;

}
@keyframes slide-in{
  from{
    transform: translateY(20px)
  }
  to{
transform: translateY(0px)
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px)
  }
  to {
transform: translateY(20px)
  }
}
</style>

