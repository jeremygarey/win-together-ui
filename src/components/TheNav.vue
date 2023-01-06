
<template>
  <div
    id="the-nav"
    class="
      text-gray-800
      fixed
      top-0
      left-0
      right-0
      transition
      duration-300
      z-50
    "
    :class="
      scrollPosition < 10 ? 'bg-transparent text-white' : 'bg-white shadow-md'
    "
  >
    <ul class="flex items-center container">
      <li class="mr-4">
        <router-link to="/" active-class="text-green">
          <img
            v-if="scrollPosition >= 10"
            class="hover:scale-105 w-14 transition duration-300"
            src="@/assets/logos/logo-dark.svg"
          />
          <img
            v-else
            class="hover:scale-105 w-14 transition duration-300"
            src="@/assets/logos/logo-light.svg"
          />
        </router-link>
      </li>
      <li class="mr-4 ml-auto">
        <router-link
          to="/what-we-do"
          class="inline-block py-6 px-2 shadow-top-transparent"
          active-class="shadow-top-green transition"
          >What We Do</router-link
        >
      </li>
      <li class="mr-4">
        <router-link
          to="/who-we-are"
          class="inline-block py-6 px-2 shadow-top-transparent"
          active-class="shadow-top-green transition"
          >Who We Are</router-link
        >
      </li>
      <li class="mr-4">
        <router-link
          to="/gxn"
          class="inline-block py-6 px-2 shadow-top-transparent"
          active-class="shadow-top-green transition"
          >Government Excellence Network</router-link
        >
      </li>
      <li class="mr-4">
        <router-link
          to="/blog"
          class="inline-block py-6 px-2 shadow-top-transparent"
          active-class="shadow-top-green transition"
          >Blog</router-link
        >
      </li>
      <li class="mr-4">
        <router-link
          to="/contact"
          class="inline-block py-6 px-2 shadow-top-transparent"
          active-class="shadow-top-green transition"
          >Contact</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    updateScoll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScoll);
  },
};
</script>

<style scoped>
.shadow-top-transparent {
  box-shadow: inset 0 4px 0 0 transparent;
}
.shadow-top-green {
  box-shadow: inset 0 4px 0 0 #8cc63f;
}
</style>