<template>
  <div class="bg-gray-800 p-2 rounded-lg">
    <h1 class="normal-case">{{ bp.name }}</h1>

    <div class="mt-4">Main Image</div>
    <div class="flex">
      <img class="rounded h-40" :src="bp.mainImage" alt="" />
      <div>
        <button class="rounded bg-gray-700 hover:bg-gray-600">
          Upload Image
        </button>
      </div>
    </div>
    <div class="mt-4">Thumbnail Image</div>
    <div class="flex">
      <img class="rounded h-40" :src="bp.thumbnailImage" alt="" />
      <div>
        <button class="rounded bg-gray-700 hover:bg-gray-600">
          Upload Image
        </button>
      </div>
    </div>
    <div class="mt-4">
      <label for="summary">Summary</label>
    </div>
    <div class="">
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
    bp: Object,
    id: String,
  },
  methods: {
    resetChanges() {
      console.log("reset");
    },
    saveChanges() {
      console.log(this.id);
      this.store.updateBp(this.bp, this.id);
    },
  },
};
</script>