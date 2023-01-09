<template>
  <blog-banner
    :title="blogPost.title"
    :imageSource="blogPost.mainImage"
  ></blog-banner>
  <blog-content>
    {{ blogPost.text }}
  </blog-content>
</template>

<script>
import ImageBlock from "@/components/ImageBlock.vue";
import BlogBanner from "@/components/BlogBanner.vue";
import BlogContent from "@/components/BlogContent.vue";
export default {
  components: {
    ImageBlock,
    BlogBanner,
    BlogContent,
  },
  data() {
    return {
      id: this.$route.params.id,
      blogPost: {},
    };
  },
  mounted() {
    // axios get blog stuff
    this.blogPost = {
      text: "Nulla blanditiis possimus et a voluptatem omnis nemo nam. Illo et molestias ut error vero non ab repudiandae. Possimus explicabo consequatur vero fugiat occaecati vel praesentium. Ab quia modi cum numquam fuga iure. Assumenda quae dolor eum sunt voluptas cupiditate dolore nam fugit. Aut sed alias facere dignissimos sed eos eum occaecati.",
      mainImage: "https://picsum.photos/1400/600",
      title: "7 Must Have Tools For Web Designers",
    };
  },
};
</script>