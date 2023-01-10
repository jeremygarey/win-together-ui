<template>
  <div
    class="bg-cover bg-center bg-gray-500"
    :style="`background-image: url(${imageSource})`"
  >
    <div class="bg-black/50 min-h-[40vh] flex text-white text-xl font-light">
      <div class="container mt-auto">
        <div class="font-bold text-3xl p-4">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    imageSource: String,
    title: String,
  },
};
</script>