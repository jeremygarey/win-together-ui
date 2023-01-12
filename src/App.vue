<script setup>
import TheNav from "@/components/general/TheNav.vue";
import TheFooter from "@/components/general/TheFooter.vue";

import { useCmsStore } from "./stores/cms";
const CmsStore = useCmsStore();
CmsStore.fill();
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

