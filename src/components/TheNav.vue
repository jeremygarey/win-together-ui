
<template>
  <ul class="flex items-center px-4 py-2 max-w-screen-lg mx-auto">
    <li class="mr-6">
      <router-link to="/" active-class="text-green">
        <img
          class="hover:scale-105 w-14 transition"
          src="@/assets/logos/logo-dark.svg"
        />
      </router-link>
    </li>
    <li class="mr-6 ml-auto">
      <router-link
        class="inline-block p-8"
        to="/what-we-do"
        active-class="border-b-4 border-green transition"
        >What We Do</router-link
      >
    </li>
    <li class="mr-6">
      <router-link
        to="/who-we-are"
        active-class="border-b-4 border-green transition"
        >Who We Are</router-link
      >
    </li>
    <li class="mr-6">
      <router-link to="/gxn" active-class="border-b-4 border-green transition"
        >Government Excellence Network</router-link
      >
    </li>
    <li class="mr-6">
      <router-link to="/blog" active-class="border-b-4 border-green transition"
        >Blog</router-link
      >
    </li>
    <li class="mr-6">
      <router-link
        to="/contact"
        active-class="border-b-4 border-green transition"
        >Contact</router-link
      >
    </li>
  </ul>
</template>