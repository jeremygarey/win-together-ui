
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
    :class="transparentNav ? 'bg-transparent text-white' : 'bg-white shadow-md'"
  >
    <ul class="hidden md:flex items-center container">
      <li>
        <router-link to="/">
          <img
            v-if="transparentNav"
            class="hover:scale-105 w-14 transition duration-300"
            src="@/assets/logos/logo-light.svg"
          />
          <img
            v-else
            class="hover:scale-105 w-14 transition duration-300"
            src="@/assets/logos/logo-dark.svg"
          />
        </router-link>
      </li>
      <li
        v-for="(route, index) in routes"
        :key="`nav-item-${index}`"
        class="mr-2 lg:mr-4 hover:text-green transition"
        :class="index === 0 ? 'ml-auto' : ''"
      >
        <router-link
          :to="route.route"
          class="inline-block py-6 px-2 shadow-top-transparent"
          active-class="shadow-top-green transition"
          >{{ route.name }}</router-link
        >
      </li>
    </ul>
    <div class="md:hidden bg-white text-gray-800">
      <div class="flex justify-between py-2 px-3 bg-white z-50 relative">
        <router-link to="/" @click="navOpen = false">
          <img
            src="@/assets/logos/logo-dark.svg"
            class="w-8 h-8 hover:scale-110 transition"
            alt=""
          />
        </router-link>
        <button
          class="bg-transparent hover:bg-transparent text-gray-800 p-0"
          @click="toggleNav"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-8 h-8 hover:scale-110 transition"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <transition name="slide-fade">
        <ul
          class="p-2 bg-white top-0 absolute mt-12 w-full shadow-md z-40"
          v-if="navOpen"
        >
          <li class="hover:text-green transition py-2">
            <router-link
              to="/"
              class="inline-block px-2 text-gt"
              active-class="text-green transition"
              @click="toggleNav"
              >Home</router-link
            >
          </li>

          <li
            v-for="(route, index) in routes"
            :key="`mobile-nav-item-${index}`"
            class="hover:text-green transition py-2"
          >
            <router-link
              :to="route.route"
              class="inline-block px-2 text-gt"
              active-class="text-green transition"
              @click="toggleNav"
              >{{ route.name }}</router-link
            >
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      scrollPosition: 0,
      navOpen: false,
      routes: [
        { route: "/what-we-do", name: "What We Do" },
        { route: "/who-we-are", name: "Who We Are" },
        { route: "/gxn", name: "Government Excellence Network" },
        { route: "/blog", name: "Blog" },
        { route: "/contact", name: "Contact" },
      ],
    };
  },
  computed: {
    transparentNav() {
      return (
        this.scrollPosition < 10 && !this.$route.path.includes("/team-member/")
      );
    },
  },
  methods: {
    updateScoll() {
      this.scrollPosition = window.scrollY;
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 250ms ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 50%;
  transform: translateY(-300px);
}
</style>