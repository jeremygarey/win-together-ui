<template>
  <div
    class="bg-cover bg-center"
    style="background-image: url('./assets/hero-images/table.jpg')"
  >
    <div class="bg-gradient-to-b from-black/20 to-black/20">
      <div class="bg-gradient-to-b from-black/30 to-transparent">
        <div
          class="
            min-h-screen
            max-w-screen-lg
            mx-auto
            flex flex-col
            justify-center
            items-center
            py-10
          "
        >
          <div class="text-white text-center w-9/12 mt-auto">
            <img
              src="@/assets/logos/logo-wide-light.svg"
              alt=""
              class="mx-auto animate-on-scroll-slide-l"
            />
            <div
              class="
                text-3xl
                font-semibold
                mt-6
                animate-on-scroll-slide-l
                animation-delay-500
                initial-opacitity-0
              "
            >
              Helping communities build cultures of excellence powered by people
              + process.
            </div>
            <button
              class="
                mt-6
                animate-slidefrombottom
                animation-delay-1000
                initial-opacity-0
              "
            >
              Learn More
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="
              text-white
              w-16
              h-16
              mx-auto
              cursor-pointer
              align-bottom
              mt-auto
              animate-bounce
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>