<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <h1 v-if="title" class="text-center text-4xl">{{ title }}</h1>
      <div
        class="
          grid
          lg:grid-cols-3
          sm:grid-cols-2
          gap-4
          mt-4
          font-light
          max-w-screen-lg
          mx-auto
        "
      >
        <div class="my-auto animate-on-scroll-slide-l" v-if="textLeft">
          <slot name="text"></slot>
        </div>
        <div class="my-auto lg:col-span-2">
          <slot name="image"></slot>
        </div>
        <div v-if="!textLeft" class="my-auto animate-on-scroll-slide-r">
          <slot name="text"></slot>
        </div>
      </div>
      <div class="text-center mt-6">
        <router-link
          class="mx-auto inline-block"
          v-if="buttonLinkTo && buttonText"
          :to="buttonLinkTo"
        >
          <button>{{ buttonText }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    textLeft: Boolean,
    buttonText: String,
    buttonLinkTo: String,
    imageSource: String,
  },
  computed: {
    imageUrl() {
      return `@/assets/images/${this.imageSource}`;
    },
  },
};
</script>