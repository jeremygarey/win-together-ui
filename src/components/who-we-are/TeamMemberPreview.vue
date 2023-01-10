<template>
  <router-link :to="`/who-we-are/${id}`">
    <div class="grid grid-cols-2 gap-4 mb-8 max-w-screen-md mx-auto">
      <img
        class="rounded-lg w-full hover:scale-105 transition"
        :src="tm.profileImage"
        alt=""
      />
      <div class="my-auto">
        <h1>{{ tm.name }}</h1>
        <div class="font-semibold">{{ tm.title }}</div>
        <div class="font-light">{{ tm.shortBio }}</div>
        <div class="font-semibold">{{ tm.email }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    tm: Object,
    id: String,
  },
};
</script>