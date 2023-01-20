<template>
  <div class="min-h-screen bg-gray-900 pt-24 pb-10 text-white">
    <div class="container flex justify-between">
      <div class="w-3/12">
        <div class="bg-gray-800 p-2 rounded-lg">
          <h1>Team Members</h1>
          <div v-for="(tm, id) in store.teamMembers" :key="`team-member-${id}`">
            <div
              class="
                p-2
                bg-gray-700
                rounded
                my-2
                hover:bg-gray-600
                transition
                cursor-pointer
              "
              @click="setTmEdit(tm, id)"
            >
              {{ tm.name }}
            </div>
          </div>
        </div>
        <div class="bg-gray-800 p-2 rounded-lg mt-4">
          <h1>Blog Posts</h1>
          <div v-for="(bp, id) in store.blogPosts" :key="`blog-post-${id}`">
            <div
              class="
                p-2
                bg-gray-700
                rounded
                my-2
                hover:bg-gray-600
                transition
                cursor-pointer
              "
              @click="setBpEdit(bp, id)"
            >
              {{ bp.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-8/12">
        <edit-team-member
          v-if="editingTm"
          :tm="store.teamMembers[currentTmEditId]"
          :id="currentTmEditId"
        />
        <edit-blog-post
          v-if="editingBp"
          :bp="store.blogPosts[currentBpEditId]"
          :id="currentBpEditId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useCmsStore } from "@/stores/cms";
import EditTeamMember from "@/components/admin/EditTeamMember.vue";
import EditBlogPost from "@/components/admin/EditBlogPost.vue";

export default {
  setup() {
    const store = useCmsStore();
    return { store };
  },
  components: {
    EditTeamMember,
    EditBlogPost,
  },
  data() {
    return {
      editingTm: false,
      currentTmEditId: null,
      editingBp: false,
      currentBpEditId: null,
    };
  },
  methods: {
    setTmEdit(tm, id) {
      console.log("set tm");
      console.log(id);
      this.editingBp = false;
      this.editingTm = true;
      this.currentTmEditId = id;
    },
    setBpEdit(bp, id) {
      console.log("set bp");
      console.log(id);
      this.editingTm = false;
      this.editingBp = true;
      this.currentBpEditId = id;
    },
  },
};
</script>