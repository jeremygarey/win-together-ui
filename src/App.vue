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

<script>
export default {
  mounted() {
    if (process.env.NODE_ENV === "production") {
      const pageSource = document.referrer;
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const browserType = navigator.userAgent;
      const language = navigator.language;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      this.$axios.post("pageviews", {
        pageSource,
        screenHeight,
        screenWidth,
        browserType,
        language,
        timeZone,
      });
    }
  },
};
</script>

