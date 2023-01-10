<template>
  <partial-hero imageSource="/assets/hero-images/government.jpg" />
  <title-section
    title="Government Excellence Network"
    subtitle="Coming December 2022"
  ></title-section>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <img
        class="max-w-lg mx-auto w-full"
        src="@/assets/logos/gxn-logo.png"
        alt=""
      />
      <p class="mt-12 text-center">
        Working in the public sector is rewarding and noble work. It can also be
        frustrating and exhausting. Constant pressure to do more with less,
        reacting to the demands of elected officials and residents can make it
        feel like you can barely catch your breath. What if you could
        manufacture time by investing an hour to gain six? That is a pretty good
        payback. Continuous improvement may sound like something we intuitively
        do every day when we do our work. In reality, it is a skill learned by
        study and application. Whether you are the City Manager or a newly hired
        seasonal employee, learning the tools of continuous improvement will
        help you see your work processes with new eyes, and remove the molasses
        you are swimming through by using a scientific approach to how you do
        your work.
        <span class="font-bold">
          We suggest you start with Foundations in Performance Excellence for
          Government when the series is live in early 2023.</span
        >
        This five-part eLearning curriculum was developed to empower you to
        reduce frustration, deliver more value with less effort, freeing up your
        time for higher value activities. Sign up below to be notified when the
        program is live.
      </p>
    </div>
  </div>
</template>

<script>
import PartialHero from "@/components/general/PartialHero.vue";
import TitleSection from "@/components/general/TitleSection.vue";
import { setInitialOpacities, animateOnScroll } from "@/animations.js";

export default {
  components: {
    PartialHero,
    TitleSection,
  },
  mounted() {
    setInitialOpacities();
    animateOnScroll("animate-on-scroll-slide-l", "animate-slidefromleft");
    animateOnScroll("animate-on-scroll-slide-b", "animate-slidefrombottom");
    animateOnScroll("animate-on-scroll-slide-r", "animate-slidefromright");
  },
};
</script>