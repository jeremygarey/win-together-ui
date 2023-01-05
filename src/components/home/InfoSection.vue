<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <h1 v-if="title" class="text-center">{{ title }}</h1>
    <div class="grid grid-cols-2 gap-4 mt-4 font-light">
      <div class="my-auto" v-if="textLeft">
        <slot name="text"></slot>
      </div>
      <div v-if="imageSource" class="my-auto">
        <img class="rounded-lg" :src="imageSource" alt="" />
      </div>
      <div class="my-auto">
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