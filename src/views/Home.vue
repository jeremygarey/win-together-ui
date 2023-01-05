<template>
  <hero />
  <info-section
    title="What We Do"
    imageSource="../../../public/assets/hero-images/table.jpg"
    buttonText="Learn more"
    buttonLinkTo="about"
  >
    <template v-slot:text>
      <div>
        We help local governments build cultures of continuous improvement to
        address capacity constraints, economic and operational challenges, and
        improve quality of life for both employees and residents of the
        communities they serve.
      </div>
      <br />
      <div>
        Our team members have decades of experience leading successful,
        large-scale transformations and building capabilities in people to
        unleash their full potential. Whether your community has 8 employees or
        8,000 - we will equip you with the tools and skills needed to solve
        problems and transform how work is done.
      </div>
    </template>
  </info-section>
</template>

<script>
import Hero from "@/components/home/Hero.vue";
import InfoSection from "@/components/home/InfoSection.vue";

export default {
  components: {
    Hero,
    InfoSection,
  },
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
    animateOnScroll("animate-on-scroll-slide-r", "animate-slidefromright");
  },
};
</script>

<style scoped>
.hero-cover {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent 50%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}
</style>