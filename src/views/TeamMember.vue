<template>
  <div class="min-h-screen bg-white">
    <team-member-banner :tm="tm"></team-member-banner>
    <div class="min-h-[21vh] bg-white px-4 py-14 text-gray-800">
      <div class="container">
        {{ tm.longBio }}
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberBanner from "@/components/TeamMemberBanner.vue";
export default {
  components: {
    TeamMemberBanner,
  },
  data() {
    return {
      tm: {},
    };
  },
  mounted() {
    // axios GET request
    this.tm = {
      name: "Sheila Montney",
      title: "Managing Partner",
      email: "sheilamontney@wintogetherllc.com",
      shortBio:
        "Sheila founded Win Together with the goal of improving city viability by leveraging the capabilities of its people.",
      longBio:
        "Sheila founded Win Together with the goal of improving city viability by leveraging the capabilities of its people and the application of operational excellence principles. Sheila brings a wealth of experience from her 35-year career in the private sector where she led transformational work in operations, technology, and enabling functions for State Farm’s financial services product lines.",
      profileImage: "https://picsum.photos/300/200",
    };
  },
};
</script>