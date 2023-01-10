<script setup>
import TheNav from "@/components/general/TheNav.vue";
import TheFooter from "@/components/general/TheFooter.vue";
</script>

<template>
  <header>
    <TheNav />
  </header>

  <div class="mx-auto text-gray-800">
    <RouterView />
  </div>

  <TheFooter />
</template>

