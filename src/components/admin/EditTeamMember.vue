<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h1 class="normal-case">{{ tm.name }}</h1>
    <div class="mt-4">Profile Image</div>
    <div class="flex">
      <img class="rounded h-40" :src="tm.profileImage" alt="" />
      <div>
        <button class="rounded bg-gray-700 hover:bg-gray-600">
          Upload Image
        </button>
      </div>
    </div>
    <div class="mt-4">
      <label for="job-title">Job Title</label>
      <input
        id="job-title"
        class="bg-gray-700 p-2 rounded w-full font-light"
        type="text"
        v-model="tm.jobTitle"
      />
    </div>
    <div class="mt-4">
      <label for="email">Email</label>
      <input
        id="email"
        class="bg-gray-700 p-2 rounded w-full font-light"
        type="text"
        v-model="tm.email"
      />
    </div>
    <div class="mt-4">
      <label for="short-bio">Short Bio</label>
    </div>
    <div class="">
      <textarea
        class="bg-gray-700 w-full p-2 rounded"
        rows="5"
        maxlength="1000"
        id="short-bio"
        v-model="tm.shortBio"
      ></textarea>
    </div>
    <div class="mt-4">
      <label for="short-bio">Long Bio</label>
    </div>
    <div class="">
      <rich-text-editor v-model="tm.longBio" />
    </div>
  </div>
  <div class="flex justify-center mt-4">
    <button
      @click="resetChanges"
      class="mx-2 rounded bg-gray-700 hover:bg-gray-600"
    >
      Reset
    </button>
    <button @click="saveChanges" class="mx-2 rounded">Save</button>
  </div>
</template>

<script>
import RichTextEditor from "@/components/admin/RichTextEditor.vue";
import { useCmsStore } from "@/stores/cms";

export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  components: {
    RichTextEditor,
  },
  props: {
    tm: Object,
    id: String,
  },
  data() {
    return {
      shortBio: "",
      longBio: "",
    };
  },
  methods: {
    resetChanges() {
      this.store.resetTm(this.id);
    },
    saveChanges() {
      this.store.updateTm(this.tm, this.id);
    },
  },
};
</script>