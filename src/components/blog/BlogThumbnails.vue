<template>
  <div class="min-h-[20vh] bg-white px-4 py-14 text-gray-800">
    <div class="container">
      <div class="sm:grid grid-cols-2 lg:grid-cols-3 gap-4">
        <router-link
          v-for="(blog, id) in store.blogPosts"
          :key="id"
          :to="`/blog/${id}`"
        >
          <div class="mb-4 sm:mb-0">
            <div
              class="
                shadow-lg shadow-black/20
                rounded-2xl
                hover:scale-105
                transition
                text-white
                bg-cover bg-center
              "
              :style="`background-image: url(${blog.thumbnailImage})`"
            >
              <div
                class="
                  text-xl
                  bg-black/40
                  h-60
                  p-4
                  rounded-2xl
                  flex flex-col
                  justify-between
                "
              >
                <div class="font-bold">
                  {{ blog.name }}
                </div>
                <div>
                  {{ blog.updatedDate }}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCmsStore } from "@/stores/cms";
export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  // data() {
  //   return {
  //     blogPosts: {
  //       1: {
  //         title: "7 Must Have Tools For Web Designers",
  //         author: "Jeremy Garey",
  //         summary:
  //           "Commodi eligendi quisquam iste temporibus sint. Fuga qui molestiae non. Maiores beatae enim nisi illum. Aspernatur accusantium dolorem reprehenderit odit voluptatibus. Voluptates qui molestiae. Sit quasi sunt ut voluptate est. Ex voluptatibus voluptas velit commodi quia non rem",
  //         body: "Nulla blanditiis possimus et a voluptatem omnis nemo nam. Illo et molestias ut error vero non ab repudiandae. Possimus explicabo consequatur vero fugiat occaecati vel praesentium. Ab quia modi cum numquam fuga iure. Assumenda quae dolor eum sunt voluptas cupiditate dolore nam fugit. Aut sed alias facere dignissimos sed eos eum occaecati.",
  //         mainImage: "https://picsum.photos/200/200",
  //         thumbnailImage: "https://picsum.photos/399/200",
  //         date: "12/29/2000",
  //       },
  //       2: {
  //         title: "7 Must Have Tools For Web Designers",
  //         author: "Jeremy Garey",
  //         summary:
  //           "Commodi eligendi quisquam iste temporibus sint. Fuga qui molestiae non. Maiores beatae enim nisi illum. Aspernatur accusantium dolorem reprehenderit odit voluptatibus. Voluptates qui molestiae. Sit quasi sunt ut voluptate est. Ex voluptatibus voluptas velit commodi quia non rem",
  //         body: "Nulla blanditiis possimus et a voluptatem omnis nemo nam. Illo et molestias ut error vero non ab repudiandae. Possimus explicabo consequatur vero fugiat occaecati vel praesentium. Ab quia modi cum numquam fuga iure. Assumenda quae dolor eum sunt voluptas cupiditate dolore nam fugit. Aut sed alias facere dignissimos sed eos eum occaecati.",
  //         mainImage: "https://picsum.photos/200/200",
  //         thumbnailImage: "https://picsum.photos/400/200",
  //         date: "12/29/2000",
  //       },
  //     },
  //   };
  // },
  // mounted() {
  //   // trigger fill of blog post thumbnails
  // },
};
</script>
