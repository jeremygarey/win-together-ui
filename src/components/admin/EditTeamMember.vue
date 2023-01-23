<template>
  <div>
    <div class="bg-gray-800 p-2 rounded-lg">
      <div>
        <label for="name">Name</label>
        <!-- <div class="w-full flex justify-between">
          <svg
            v-if="!newTm"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mb-1 hover:scale-110 transition"
            @click="archive"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </div> -->
        <input
          id="name"
          class="bg-gray-700 p-2 rounded w-full font-light"
          type="text"
          v-model="tm.name"
        />
      </div>
      <div class="mt-4">Profile Image</div>
      <div class="flex gap-4">
        <img class="rounded h-40" :src="tm.profileImage" alt="" />
        <!-- <div class="h-100 flex flex-col justify-center gap-2">
          <p class="">Upload new profile image:</p>
          <image-upload />
        </div> -->
        <!-- <div>
          <button class="rounded bg-gray-700 hover:bg-gray-600">
            Upload Image
          </button>
        </div> -->
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
      <div class="mt-4">
        <input id="archived" type="checkbox" v-model="tm.archived" />
        <label class="ml-2" for="archived">Archived</label>
      </div>
    </div>
    <div class="flex mt-4">
      <button
        @click="resetChanges"
        class="rounded bg-gray-700 hover:bg-gray-600 mr-2"
        v-if="!newTm"
      >
        Reset
      </button>
      <button @click="saveChanges" class="rounded">Save</button>
      <transition name="fade">
        <div v-if="displaySuccess" class="p-2 ml-8 bg-darkgreen rounded">
          {{ message }}
        </div>
      </transition>
      <transition name="fade">
        <div v-if="displayError" class="bg-red-800 p-2 rounded ml-8">
          {{ message }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import RichTextEditor from "@/components/admin/RichTextEditor.vue";
import ImageUpload from "./ImageUpload.vue";
import { useCmsStore } from "@/stores/cms";

export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  emits: ["archive"],
  components: {
    RichTextEditor,
    ImageUpload,
  },
  props: {
    tm: Object,
    id: String,
    newTm: Boolean,
  },
  data() {
    return {
      displaySuccess: false,
      displayError: false,
      message: "",
    };
  },
  methods: {
    async resetChanges() {
      const success = await this.store.resetTm(this.id);
      if (success) {
        this.showMessage(false, "Reset successfully");
      } else {
        this.showMessage(true, "There was an error. Please try again later");
      }
    },
    async saveChanges() {
      let success = false;
      if (this.newTm) {
        success = await this.store.createTm(this.tm);
      } else {
        success = await this.store.updateTm(this.tm, this.id);
      }
      if (success) {
        this.showMessage(false, "Saved successfully");
      } else {
        this.showMessage(true, "There was an error. Please try again later");
      }
    },
    // async archive() {
    //   let success = await this.store.archiveTm(this.id);
    //   if (success) {
    //     this.$emit("archived");
    //   }
    // },
    showMessage(error, message) {
      this.message = message;
      if (error) {
        this.displayError = true;
        setTimeout(() => {
          this.displayError = false;
        }, 8000);
      } else {
        this.displaySuccess = true;
        setTimeout(() => {
          this.displaySuccess = false;
        }, 5000);
      }
    },
  },
};
</script>