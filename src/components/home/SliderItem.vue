<template>
  <!-- <transition :name="transitionEffect"> -->
  <transition name="fade">
    <div class="text-center w-full" v-show="currentSlide === index">
      <p class="text-xl font-light">"{{ slide.quote }}"</p>
      <img
        class="rounded-full w-32 h-32 mx-auto mt-4"
        :src="slide.imageSource"
        alt=""
      />
      <div class="mt-4 font-semibold">{{ slide.name }}</div>
      <div class="">{{ slide.description }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style scoped>
/* .slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 400ms ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transition: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transition: translateX(-100%);
} */

.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>