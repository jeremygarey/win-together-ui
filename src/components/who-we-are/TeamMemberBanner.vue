<template>
  <div class="min-h-[40-vh] bg-white pt-72">
    <div class="bg-green text-gray-800 h-52">
      <div class="container grid grid-cols-2 p-4 gap-4 -translate-y-32">
        <div
          class="rounded-lg w-full min-h-[18rem] shadow-xl bg-cover"
          :style="`background-image: url(${tm.profileImage})`"
        ></div>
        <div class="flex flex-col justify-end">
          <h1 class="font-black text-4xl">{{ tm.name }}</h1>
          <div class="font-semibold text-2xl">{{ tm.title }}</div>
          <div class="font-light">{{ tm.email }}</div>
        </div>
      </div>
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