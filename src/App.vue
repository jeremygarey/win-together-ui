<script setup lang="ts">
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <TheNav class="text-gray-800" />
  </header>

  <RouterView class="max-w-screen-lg mx-auto text-gray-800" />

  <TheFooter />
</template>
