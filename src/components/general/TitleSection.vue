<template>
  <div
    class="
      bg-gray-800
      text-white
      border-b-4 border-green
      drop-shadow-lg
      shadow-lg shadow-black/20
    "
  >
    <div class="pb-2 container -translate-y-6 md:-translate-y-8">
      <h1 class="text-5xl md:text-6xl font-black animate-on-scroll-slide-l">
        {{ title }}
      </h1>
      <h2 class="mt-4">{{ subtitle }}</h2>
      <div class="mt-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>