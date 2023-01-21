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
                  {{ formatDate(blog.updatedDate) }}
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
import { DateTime } from "luxon";
export default {
  setup() {
    const store = useCmsStore();
    return {
      store,
    };
  },
  methods: {
    formatDate(isoString) {
      return DateTime.fromISO(isoString).toLocaleString(DateTime.DATE_FULL);
    },
  },
};
</script>
