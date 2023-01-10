<template>
  <div
    class="bg-cover bg-center"
    :style="`background-image: url(${imageSource})`"
  >
    <div class="bg-gradient-to-b from-black/40 to-black/40 h-[45vh]"></div>
  </div>
</template>

<script>
export default {
  props: {
    imageSource: String,
  },
};
</script>