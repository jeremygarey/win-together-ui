<script setup lang="ts">
import TheNav from "./components/TheNav.vue";
</script>

<template>
  <header>
    <TheNav />
  </header>

  <RouterView class="max-w-screen-lg mx-auto" />
</template>
