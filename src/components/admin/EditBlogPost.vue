<template>
  <div>
    <div class="bg-gray-800 p-2 rounded-lg">
      <div>
        <label for="name">Title</label>
        <input
          id="name"
          class="bg-gray-700 p-2 rounded w-full font-light"
          type="text"
          v-model="bp.name"
        />
      </div>

      <div class="mt-4">Main Image</div>
      <div class="flex">
        <img class="rounded h-40" :src="bp.mainImage" alt="" />
        <!-- <div>
          <button class="rounded bg-gray-700 hover:bg-gray-600">
            Upload Image
          </button>
        </div> -->
      </div>
      <input
        class="bg-gray-700 p-2 rounded w-full font-light mt-2"
        type="text"
        v-model="bp.mainImage"
      />
      <div class="mt-4">Thumbnail Image</div>
      <div class="flex">
        <img class="rounded h-40" :src="bp.thumbnailImage" alt="" />
        <!-- <div>
          <button class="rounded bg-gray-700 hover:bg-gray-600">
            Upload Image
          </button>
        </div> -->
      </div>
      <input
        class="bg-gray-700 p-2 rounded w-full font-light mt-2"
        type="text"
        v-model="bp.thumbnailImage"
      />
      <div class="mt-4">
        <label for="summary">Summary</label>
        <textarea
          class="bg-gray-700 w-full p-2 rounded"
          rows="5"
          maxlength="1000"
          id="summary"
          v-model="bp.summary"
        ></textarea>
      </div>
      <div class="mt-4">
        <label for="body">Body</label>
      </div>
      <div id="body">
        <rich-text-editor v-model="bp.body" />
      </div>
      <div class="mt-4">
        <input id="archived" type="checkbox" v-model="bp.archived" />
        <label class="ml-2" for="archived">Archived</label>
      </div>
    </div>
    <div class="flex mt-4">
      <button
        @click="resetChanges"
        class="rounded bg-gray-700 hover:bg-gray-600 mr-2"
        v-if="!newBp"
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
import { useCmsStore } from "@/stores/cms";

export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  data() {
    return {
      displaySuccess: false,
      displayError: false,
      message: "",
    };
  },
  components: {
    RichTextEditor,
  },
  props: {
    bp: Object,
    id: String,
    newBp: Boolean,
  },
  methods: {
    async resetChanges() {
      const success = await this.store.resetBp(this.id);
      if (success) {
        this.showMessage(false, "Reset successfully");
      } else {
        this.showMessage(true, "There was an error. Please try again later");
      }
    },
    async saveChanges() {
      let success = false;
      if (this.newBp) {
        success = await this.store.createBp(this.bp);
      } else {
        success = await this.store.updateBp(this.bp, this.id);
      }
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>