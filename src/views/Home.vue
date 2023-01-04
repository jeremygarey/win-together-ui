<template>
  <div
    class="min-h-screen bg-cover bg-center"
    style="background-image: url('./assets/hero-images/table.jpg')"
  >
    <div class="min-h-screen bg-gradient-to-b from-black/20 to-black/20">
      <div class="min-h-screen bg-gradient-to-b from-black/30 to-transparent">
        <div class="min-h-screen max-w-screen-lg mx-auto flex justify-center">
          <div class="mt-auto pb-20 text-white text-center w-9/12">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="
                w-16
                h-16
                mx-auto
                mt-80
                hover:scale-105
                cursor-pointer
                transition
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
  </div>
</template>

<script>
export default {
  mounted() {
    function setInitialOpacities() {
      const targets = document.querySelectorAll(".initial-opacity-0");
      if (targets) {
        targets.forEach((t) => {
          t.classList.add("opacity-0");
        });
      }
    }

    setInitialOpacities();

    function animateOnScroll(targetClass, animationClass) {
      const targets = document.querySelectorAll(`.${targetClass}`);
      const observer = new IntersectionObserver((targets) => {
        targets.forEach((t) => {
          if (t.isIntersecting) {
            t.target.classList.add(animationClass);
          } else {
            t.target.classList.remove(animationClass);
          }
        });
      });
      if (targets) {
        targets.forEach((t) => {
          t.classList.add("opacity-0");
          observer.observe(t);
        });
      }
    }

    animateOnScroll("animate-on-scroll-slide-l", "animate-slidefromleft");
    animateOnScroll("animate-on-scroll-slide-b", "animate-slidefrombottom");
  },
};
</script>

<style scoped>
.hero-cover {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}
</style>