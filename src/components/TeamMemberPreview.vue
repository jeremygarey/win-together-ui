<template>
  <div class="grid grid-cols-2 gap-4 mb-8">
    <img src="" alt="" />
    <div>
      <h1>{{ tm.name }}</h1>
      <div class="font-semibold">{{ tm.title }}</div>
      <div class="font-light">{{ tm.shortBio }}</div>
      <div class="font-semibold">{{ tm.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tm: Object,
  },
};
</script>