<template>
  <div>
    <button
      v-for="(item, index) in total"
      class="w-4 h-1 p-0 rounded mx-1 transition"
      :class="
        currentIndex === index
          ? 'bg-gray-400 hover:bg-gray-400'
          : 'bg-gray-200 hover:bg-gray-200'
      "
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
    currentIndex: Number,
  },
};
</script>