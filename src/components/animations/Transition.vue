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
        <transition appear enter-class="" enter-active-class="animated bounce" leave-class="" leave-active-class="animated shake">

          <div class="alert alert-info" v-if="show">Some alert here</div>
        </transition>

        <transition name="fade" appear>
          <div>
            <div class="alert alert-info" v-if="show" key="info">Some alert here</div>
            <div class="alert alert-warning" v-if="!show" key="warn">Some alert here</div>
          </div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">
          Load / Remove Element</button>
        <br>
        <br>
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancel" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancel">
          <div style="width: 100px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      load: true
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("Before Enter");
    },
    enter(el, done) {
      console.log("Enter");
      done();
    },
    afterEnter(el) {
      console.log("After enter");
    },
    enterCancel(el) {
      console.log("Enter Cancel");
    },
    beforeLeave() {
      console.log("Before Leave");
    },
    leave() {
      console.log("Leave");
    },
    afterLeave() {
      console.log("After Leave");
    },
    leaveCancel() {
      console.log("Leave Cancel");
    }
  }
};
</script>
<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter {
  /* transform: translateY(20px) */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  opacity: 0.5;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>

