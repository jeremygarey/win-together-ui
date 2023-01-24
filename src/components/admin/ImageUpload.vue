<!-- <template>
  <div>
    <upload-media :server="url"></upload-media>
    {{ url }}
  </div>
</template>

<script>
import { UploadMedia } from "vue-media-upload";
export default {
  components: {
    UploadMedia,
  },
  data() {
    return {
      url: `${this.$axios.defaults.baseURL}upload-tm-image`,
    };
  },
};
</script>-->



<template>
  <div>
    <!-- <input ref="file" v-on:change="handleFileUpload()" type="file" /> -->
    <input ref="file" type="file" />
  </div>
  <button class="w-20 rounded mt-2" @click="uploadImage">Upload</button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Add",

  setup() {
    const file = ref(null);

    const handleFileUpload = async () => {
      // debugger;
      console.log("selected file", file.value.files);
    };

    return {
      handleFileUpload,
      file,
    };
  },
};
</script>
