<template>
  <div>
    <partial-hero
      imageSource="@/../public/assets/hero-images/table.jpg"
    ></partial-hero>
    <title-section
      title="Reflections"
      subtitle="Lessons learned on the journey to redemption."
    >
      <div class="mt-2 font-light">
        "This is the work of angels. In a world where so many people are
        deprived - it is a sin to be inefficient"
        <span class="italic">- Michael Hammer</span>
      </div>
    </title-section>
    <blog-thumbnails />
  </div>
</template>

<script>
import PartialHero from "@/components/PartialHero.vue";
import TitleSection from "@/components/TitleSection.vue";
import BlogThumbnails from "@/components/BlogThumbnails.vue";
export default {
  components: {
    PartialHero,
    TitleSection,
    BlogThumbnails,
  },
};
</script>