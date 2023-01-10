<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <h1 v-if="title" class="text-center text-4xl">{{ title }}</h1>
      <div class="grid grid-cols-3 gap-4 text-center">
        <div>
          <slot name="col-1"></slot>
        </div>
        <div>
          <slot name="col-2"></slot>
        </div>
        <div>
          <slot name="col-3"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>