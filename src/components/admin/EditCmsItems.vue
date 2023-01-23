<template>
  <div class="container flex justify-between p-0 mt-6">
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
        <div>
          <div
            class="
              p-2
              bg-gray-700
              rounded
              my-2
              hover:bg-gray-600
              transition
              cursor-pointer
              flex
            "
            @click="setNewTmEdit()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>Add new</span>
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
        <div>
          <div
            class="
              p-2
              bg-gray-700
              rounded
              my-2
              hover:bg-gray-600
              transition
              cursor-pointer
              flex
            "
            @click="setNewBpEdit()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            <span>Add new</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-9/12 ml-8">
      <edit-team-member
        v-if="editingTm"
        :tm="newTm ? newTmObject : store.teamMembers[currentTmEditId]"
        :id="currentTmEditId"
        :newTm="newTm"
      />
      <edit-blog-post
        v-if="editingBp"
        :bp="newBp ? newBpObject : store.blogPosts[currentBpEditId]"
        :id="currentBpEditId"
        :newBp="newBp"
      />
      <div v-if="!editingTm && !editingBp" class="bg-gray-800 p-2 rounded">
        Select an object to edit.
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
      newTm: false,
      editingBp: false,
      currentBpEditId: null,
      newBp: false,
      newTmObject: {
        name: "",
        profileImage: "",
        jobTitle: "",
        email: "",
        shortBio: "",
        longBio: "",
        archived: false,
      },
      newBpObject: {
        name: "",
        mainImage: "",
        thumbnailImage: "",
        summary: "",
        body: "",
        archived: false,
      },
    };
  },
  methods: {
    setTmEdit(tm, id) {
      this.editingBp = false;
      this.editingTm = true;
      this.currentTmEditId = id;
      this.newTm = false;
    },
    setNewTmEdit() {
      this.editingBp = false;
      this.editingTm = true;
      this.newTm = true;
    },
    setBpEdit(bp, id) {
      this.editingTm = false;
      this.editingBp = true;
      this.currentBpEditId = id;
      this.newBp = false;
    },
    setNewBpEdit() {
      this.editingBp = true;
      this.editingTm = false;
      this.newBp = true;
    },
  },
};
</script>
