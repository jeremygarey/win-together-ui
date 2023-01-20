<template>
  <div>
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
    <div class="flex mt-4">
      <button
        @click="resetChanges"
        class="rounded bg-gray-700 hover:bg-gray-600"
      >
        Reset
      </button>
      <button @click="saveChanges" class="mx-2 rounded">Save</button>
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
      const success = await this.store.updateTm(this.tm, this.id);
      if (success) {
        this.showMessage(false, "Saved successfully");
      } else {
        this.showMessage(true, "There was an error. Please try again later");
      }
    },
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