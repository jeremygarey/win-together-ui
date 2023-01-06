<template>
  <div>
    <partial-hero imageSource="'../../assets/hero-images/table.jpg'" />
    <title-section
      title="Meet The Core Team"
      subtitle="Decades of diverse experiences. United by a relentless commitment to improvement. "
    >
      <p>
        Experiences include local, state, and federal government (staff,
        elected, and consulting), public and private education, non-profits,
        small business, and Fortune 100 companies.
      </p>
    </title-section>
    <team-member-section></team-member-section>
  </div>
</template>

<script>
import PartialHero from "@/components/PartialHero.vue";
import TitleSection from "@/components/TitleSection.vue";
import TeamMemberSection from "@/components/TeamMemberSection.vue";
export default {
  components: {
    PartialHero,
    TitleSection,
    TeamMemberSection,
  },
};
</script>