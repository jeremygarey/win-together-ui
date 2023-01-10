<template>
  <hero />
  <info-section
    id="what-we-do"
    title="What We Do"
    buttonText="Learn more"
    buttonLinkTo="/what-we-do"
  >
    <template v-slot:image>
      <img
        class="rounded-xl animate-on-scroll-slide-l"
        src="@/assets/images/teamwork.jpg"
        alt=""
      />
    </template>
    <template v-slot:text>
      <p>
        We help local governments build cultures of continuous improvement to
        address capacity constraints, economic and operational challenges, and
        improve quality of life for both employees and residents of the
        communities they serve.
      </p>
      <br />
      <p>
        Our team members have decades of experience leading successful,
        large-scale transformations and building capabilities in people to
        unleash their full potential. Whether your community has 8 employees or
        8,000 - we will equip you with the tools and skills needed to solve
        problems and transform how work is done.
      </p>
    </template>
  </info-section>
  <image-block>
    <template v-slot:text>
      <div>
        People are the only organizational asset with an infinite capacity to
        appreciate in value.
      </div>
    </template>
    <template v-slot:image>
      <scroll-parallax class="-z-50 absolute" :speed="0.2">
        <div
          class="w-100 bg-cover mt-[-600px] w-screen h-[60vh]"
          :style="`background-image: url(/assets/hero-images/bw-office.jpg)`"
          alt=""
        ></div>
      </scroll-parallax>
    </template>
  </image-block>
  <info-section
    :textLeft="true"
    buttonText="Join now"
    buttonLinkTo="/gxn"
    title="Government Excellence Network"
  >
    <template v-slot:image>
      <img
        class="rounded-xl animate-on-scroll-slide-r"
        src="@/assets/images/laptop-hands.jpg"
        alt=""
      />
    </template>
    <template v-slot:text>
      <p>
        Win Together® was founded in 2020 with a single mission: to enable
        performance excellence in local governments. Working together to solve
        problems, residents and their local governments can achieve outstanding
        results that sustain over time, effectively and efficiently meeting the
        needs of the community.
        <span class="font-semibold">Government Excellence Network (GXN)</span>,
        a division of Win Together®, provides a framework to build the
        capabilities needed to drive performance excellence.
        <span class="font-semibold"
          >Join now for updates about our launch in Fall 2022. GXN will provide
          learning opportunities, and a venue to exchange ideas with others in
          our knowledge sharing community.</span
        >
      </p>
    </template>
  </info-section>
  <image-block>
    <template v-slot:text>
      <div>
        <span class="font-semibold">Coming early 2023:</span> Government
        Excellence Network (GXN) provides a robust eLearning platform for the
        public sector to build skills in continuous improvement methods and a
        forum to exchange ideas. Join now to be notified when the site goes
        live!
      </div>
    </template>
    <template v-slot:image>
      <scroll-parallax class="-z-50 absolute" :speed="0.2">
        <div
          class="w-100 bg-cover mt-[-800px] w-screen h-[60vh]"
          :style="`background-image: url(/assets/hero-images/table-meeting.jpg)`"
          alt=""
        ></div>
      </scroll-parallax>
    </template>
  </image-block>
  <slider title="Timeless Words From The Past" />
  <socials-block />
</template>

<script>
import Hero from "@/components/home/Hero.vue";
import InfoSection from "@/components/general/InfoSection.vue";
import ImageBlock from "@/components/general/ImageBlock.vue";
import Slider from "@/components/home/Slider.vue";
import SocialsBlock from "@/components/home/SocialsBlock.vue";
import { setInitialOpacities, animateOnScroll } from "@/animations";
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

export default {
  components: {
    Hero,
    InfoSection,
    ImageBlock,
    Slider,
    SocialsBlock,
    ScrollParallax,
  },
  mounted() {
    setInitialOpacities();

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