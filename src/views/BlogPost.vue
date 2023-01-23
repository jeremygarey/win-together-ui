<template>
  <blog-banner :title="bp.name" :imageSource="bp.mainImage"></blog-banner>
  <blog-content>
    <div v-html="bp.body"></div>
  </blog-content>
</template>

<script>
import ImageBlock from "@/components/general/ImageBlock.vue";
import BlogBanner from "@/components/blog/BlogBanner.vue";
import BlogContent from "@/components/blog/BlogContent.vue";
import { useCmsStore } from "@/stores/cms";
export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  components: {
    ImageBlock,
    BlogBanner,
    BlogContent,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    bp() {
      return this.store.blogPosts[this.id];
    },
  },
  mounted() {
    if (this.bp.archived) {
      this.$router.push("blog");
    }
  },
  // data() {
  //   return {
  //     // id: this.$route.params.id,
  //     // blogPost: {},
  //   };
  // },
  // mounted() {
  // axios get blog stuff
  // this.blogPost = {
  //   text: "Nulla blanditiis possimus et a voluptatem omnis nemo nam. Illo et molestias ut error vero non ab repudiandae. Possimus explicabo consequatur vero fugiat occaecati vel praesentium. Ab quia modi cum numquam fuga iure. Assumenda quae dolor eum sunt voluptas cupiditate dolore nam fugit. Aut sed alias facere dignissimos sed eos eum occaecati.",
  //   mainImage: "https://picsum.photos/1400/600",
  //   title: "7 Must Have Tools For Web Designers",
  // };
  // },
};
</script>