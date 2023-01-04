<script setup lang="ts">
import TheNav from "./components/TheNav.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <TheNav />
  </header>

  <RouterView class="mx-auto text-gray-800" />

  <TheFooter />
</template>
