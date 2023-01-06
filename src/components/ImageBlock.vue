<template>
  <div
    class="bg-cover bg-center bg-gray-500"
    :style="`background-image: url(${imageSource})`"
  >
    <div
      class="
        bg-black/50
        min-h-[40vh]
        flex
        items-center
        text-white text-xl
        font-light
      "
    >
      <div class="container text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
    text: String,
  },
};
</script>