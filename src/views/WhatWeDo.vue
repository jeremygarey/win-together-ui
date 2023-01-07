<template>
  <div>
    <partial-hero
      imageSource="'../../assets/hero-images/table-meeting-3.jpg'"
    />
    <title-section
      title="About Us"
      subtitle="Win Together® exists to enable performance excellence in local governments."
    >
      <p>
        Win Together® was founded in 2020 with a single mission: to enable
        performance excellence in local governments. We accomplish this by
        redefining community engagement and building cultures of continuous
        improvement in government enabled by people and process. Working
        together to solve problems, residents and their local governments can
        achieve outstanding results that sustain over time, effectively and
        efficiently meeting the needs of the community.
      </p>
    </title-section>
    <info-section>
      <template v-slot:image>
        <img
          class="rounded-xl"
          src="@/assets/images/whiteboard-meeting.jpg"
          alt=""
        />
      </template>
      <template v-slot:text>
        <h1>Driving Excellence Through Collaborative Engagement</h1>
        <p class="mt-2">
          We partner with local governments who have the vision and desire to
          create high achieving, sustainable, and resilient communities. We
          provide the tools and resources to help make it a reality.
        </p>
      </template>
    </info-section>
    <image-block
      imageSource="@/../public/assets/hero-images/table-topdown.jpg"
    />
    <columns-section title="Our Principles">
      <template v-slot:col-1>
        <img
          class="rounded-xl mt-4"
          src="@/assets/images/table-meeting.jpg"
          alt=""
        />
        <h2 class="mt-4">Building Communities of Communities</h2>
        <p class="mt-2 font-light">
          We believe there is great value in learning from other local
          governments near and far, many of which face similar issues but have
          not historically had an easy way to share and learn from each other.
        </p>
      </template>
      <template v-slot:col-2>
        <img
          class="rounded-xl mt-4"
          src="@/assets/images/girls-laughing.jpg"
          alt=""
        />
        <h2 class="mt-4">Redefining Community Engagement</h2>
        <p class="mt-2 font-light">
          Citizens are an underutilized resource in most local governments even
          though they have a shared investment in the community. Smart
          engagement helps alleviate local government resource constraints and
          builds buy-in from residents.
        </p>
      </template>
      <template v-slot:col-3>
        <img
          class="rounded-xl mt-4"
          src="@/assets/images/teamwork.jpg"
          alt=""
        />
        <h2 class="mt-4">Developing Capabilities in People</h2>
        <p class="mt-2 font-light">
          Consulting engagements often identify problems and solutions already
          known by the client, and the work stops there. We measure our success
          on outcomes and are motivated to not only provide solutions but also
          build cultures of continuous improvement through intentional knowledge
          transfer of methods that can be used in the future.
        </p>
      </template>
    </columns-section>
  </div>
</template>

<script>
import PartialHero from "@/components/PartialHero.vue";
import TitleSection from "@/components/TitleSection.vue";
import InfoSection from "@/components/InfoSection.vue";
import ImageBlock from "@/components/ImageBlock.vue";
import ColumnsSection from "@/components/ColumnsSection.vue";
import { setInitialOpacities, animateOnScroll } from "@/animations.js";

export default {
  components: {
    PartialHero,
    TitleSection,
    InfoSection,
    ImageBlock,
    ColumnsSection,
  },
  mounted() {
    setInitialOpacities();
    animateOnScroll("animate-on-scroll-slide-l", "animate-slidefromleft");
    animateOnScroll("animate-on-scroll-slide-b", "animate-slidefrombottom");
    animateOnScroll("animate-on-scroll-slide-r", "animate-slidefromright");
  },
};
</script>