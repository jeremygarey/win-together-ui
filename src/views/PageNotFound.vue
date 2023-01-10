<template>
  <div class="bg-gray-900 text-white">
    <div
      class="container min-h-[66vh] flex flex-col justify-center items-center"
    >
      <div class="text-9xl font-black text-green">404</div>
      <div class="text-xl font-semibold mt-2">Page Not Found</div>
      <div class="text-xl font-light mt-2">
        The page you're looking for does not exist.
      </div>
      <router-link to="/">
        <button class="mt-8">Return Home</button>
      </router-link>
    </div>
  </div>
</template>