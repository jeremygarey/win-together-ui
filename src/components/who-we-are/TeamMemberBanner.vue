<template>
  <div class="min-h-[40-vh] bg-white pt-64">
    <div class="bg-green text-gray-800 h-80 md:h-52">
      <div class="container md:grid grid-cols-2 p-4 gap-4 -translate-y-32">
        <div
          class="
            rounded-lg
            w-full
            min-h-[18rem]
            shadow-xl
            bg-cover
            animate-slidefrombottom
          "
          :style="`background-image: url(${tm.profileImage})`"
        ></div>
        <div class="flex flex-col justify-end">
          <h1 class="font-black text-4xl animate-slidefromright mt-6 md:mt-0">
            {{ tm.name }}
          </h1>
          <div
            class="
              font-semibold
              text-2xl
              animation-delay-200
              animate-slidefromright
              opacity-0
            "
          >
            {{ tm.title }}
          </div>
          <div
            class="
              font-light
              animation-delay-400
              animate-slidefromright
              opacity-0
            "
          >
            {{ tm.email }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tm: Object,
  },
};
</script>