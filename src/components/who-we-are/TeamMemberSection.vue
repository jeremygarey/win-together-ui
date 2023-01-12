<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <h1 v-if="title" class="text-center text-4xl">{{ title }}</h1>
      <team-member-preview
        v-for="(tm, id) in teamMembers"
        :key="`team-member-${id}`"
        :tm="tm"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import { useCmsStore } from "@/stores/cms";
import TeamMemberPreview from "@/components/who-we-are/TeamMemberPreview.vue";
export default {
  setup() {
    const store = useCmsStore();
    const { teamMembers } = store;
    return {
      teamMembers,
    };
  },
  components: {
    TeamMemberPreview,
  },
  props: {
    title: String,
  },
  // data() {
  //   return {
  //     teamMembers: {
  //       0: {
  //         name: "Sheila Montney",
  //         title: "Managing Partner",
  //         email: "sheilamontney@wintogetherllc.com",
  //         shortBio:
  //           "Sheila founded Win Together with the goal of improving city viability by leveraging the capabilities of its people.",
  //         longBio:
  //           "Sheila founded Win Together with the goal of improving city viability by leveraging the capabilities of its people and the application of operational excellence principles. Sheila brings a wealth of experience from her 35-year career in the private sector where she led transformational work in operations, technology, and enabling functions for State Farm’s financial services product lines.",
  //         profileImage: "https://picsum.photos/300/200",
  //       },
  //       1: {
  //         name: "Sheila Montney",
  //         title: "Managing Partner",
  //         email: "sheilamontney@wintogetherllc.com",
  //         shortBio:
  //           "Sheila founded Win Together with the goal of improving city viability by leveraging the capabilities of its people.",
  //         longBio:
  //           "Sheila founded Win Together with the goal of improving city viability by leveraging the capabilities of its people and the application of operational excellence principles. Sheila brings a wealth of experience from her 35-year career in the private sector where she led transformational work in operations, technology, and enabling functions for State Farm’s financial services product lines.",
  //         profileImage: "https://picsum.photos/300/200",
  //       },
  //     },
  //   };
  // },
};
</script>