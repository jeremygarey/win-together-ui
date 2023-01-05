<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="max-w-screen-lg mx-auto">
      <h1 v-if="title" class="text-center">{{ title }}</h1>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 font-light">
        <div class="my-auto animate-on-scroll-slide-l" v-if="textLeft">
          <slot name="text"></slot>
        </div>
        <div v-if="imageSource" class="my-auto lg:col-span-2">
          <img
            class="rounded-lg animate-on-scroll-slide-b"
            :src="imageSource"
            alt=""
          />
        </div>
        <div class="my-auto animate-on-scroll-slide-r">
          <slot name="text" v-if="!textLeft"></slot>
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
};
</script>