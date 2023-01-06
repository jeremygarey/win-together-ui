<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <div v-for="(blog, id) in blogPosts" :key="id">
        {{ id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: {
        1: {
          title: "7 Must Have Tools For Web Designers",
          author: "Jeremy Garey",
          summary:
            "Commodi eligendi quisquam iste temporibus sint. Fuga qui molestiae non. Maiores beatae enim nisi illum. Aspernatur accusantium dolorem reprehenderit odit voluptatibus. Voluptates qui molestiae. Sit quasi sunt ut voluptate est. Ex voluptatibus voluptas velit commodi quia non rem",
          body: "Nulla blanditiis possimus et a voluptatem omnis nemo nam. Illo et molestias ut error vero non ab repudiandae. Possimus explicabo consequatur vero fugiat occaecati vel praesentium. Ab quia modi cum numquam fuga iure. Assumenda quae dolor eum sunt voluptas cupiditate dolore nam fugit. Aut sed alias facere dignissimos sed eos eum occaecati.",
        },
        2: {
          title: "7 Must Have Tools For Web Designers",
          author: "Jeremy Garey",
          summary:
            "Commodi eligendi quisquam iste temporibus sint. Fuga qui molestiae non. Maiores beatae enim nisi illum. Aspernatur accusantium dolorem reprehenderit odit voluptatibus. Voluptates qui molestiae. Sit quasi sunt ut voluptate est. Ex voluptatibus voluptas velit commodi quia non rem",
          body: "Nulla blanditiis possimus et a voluptatem omnis nemo nam. Illo et molestias ut error vero non ab repudiandae. Possimus explicabo consequatur vero fugiat occaecati vel praesentium. Ab quia modi cum numquam fuga iure. Assumenda quae dolor eum sunt voluptas cupiditate dolore nam fugit. Aut sed alias facere dignissimos sed eos eum occaecati.",
          mainImage: "@/../public/assets/hero-images/table.jpg",
          thumbnailImage: "@/../public/assets/hero-images/table.jpg",
        },
      },
    };
  },
  mounted() {
    // trigger fill of blog post thumbnails
  },
};
</script>
