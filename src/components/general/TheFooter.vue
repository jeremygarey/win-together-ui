<template>
  <footer>
    <div class="bg-gray-800 text-gray-400 px-4 py-8 sm:p-10">
      <div class="container">
        <div class="md:grid grid-cols-4 gap-14">
          <div class="col-span-2">
            <img src="@/assets/logos/logo-wide-light.svg" alt="" />
            <p>Sign up for our newsletter and future updates</p>
            <div class="flex mt-4 w-full">
              <input
                type="text"
                class="rounded-l-lg text-gray-800 px-3 outline-none w-8/12"
              />
              <button
                class="
                  bg-gray-500
                  text-white
                  rounded-r-lg rounded-l-none
                  hover:bg-gray-600
                  transition
                  w-4/12
                "
              >
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h1 class="mt-4 md:mt-0 text-lg text-white">COMPANY</h1>
            <ul>
              <li class="hover:text-white transition">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/what-we-do">What We Do</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/who-we-are">Who We Are</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/gxn">Government Excellence Network</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/blog">Blog</RouterLink>
              </li>
              <li class="hover:text-white transition">
                <RouterLink to="/contact">Contact</RouterLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 class="mt-4 md:mt-0 text-lg text-white">SOCIAL</h1>
            <ul>
              <li>
                <a class="hover:text-white transition" href="/">Twitter</a>
              </li>
              <li>
                <a class="hover:text-white transition" href="/">LinkedIn</a>
              </li>
            </ul>
            <div class="mt-4">
              <RouterLink class="" to="/admin/home">
                <button
                  v-if="store.isAuthenticated"
                  class="
                    text-white text-lg
                    mt-10
                    md:mt-0
                    bg-gray-700
                    rounded
                    hover:bg-gray-600
                  "
                >
                  Admin
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900 text-gray-400 p-6">
      <div class="container">
        Copyright 2023 Win Together®. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import { useUserStore } from "@/stores/user";

export default {
  setup() {
    const store = useUserStore();
    return {
      store,
    };
  },
};
</script>