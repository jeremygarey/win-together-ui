<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <h1 v-if="title" class="text-center text-4xl">{{ title }}</h1>
      <div v-for="(tm, id) in store.teamMembers" :key="`team-member-${id}`">
        <team-member-preview :tm="tm" :id="id" v-if="!tm.archived" />
      </div>
    </div>
  </div>
</template>

<script>
import { useCmsStore } from "@/stores/cms";
import TeamMemberPreview from "@/components/who-we-are/TeamMemberPreview.vue";
export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  components: {
    TeamMemberPreview,
  },
  props: {
    title: String,
  },
};
</script>