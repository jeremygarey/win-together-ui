<template>
  <div class="container bg-gray-800 rounded-lg p-2 flex gap-2 justify-center">
    <div
      class="
        grow
        text-center
        p-2
        bg-gray-700
        rounded
        hover:bg-gray-600
        transition
        cursor-pointer
      "
      :class="currentPage === 'editCmsItems' ? 'bg-gray-600' : ''"
      @click="setPage('editCmsItems')"
    >
      Edit CMS Items
    </div>
    <div
      class="
        grow
        text-center
        p-2
        bg-gray-700
        rounded
        hover:bg-gray-600
        transition
        cursor-pointer
      "
      :class="currentPage === 'pageVisit' ? 'bg-gray-600' : ''"
      @click="setPage('pageVisits')"
    >
      Page Visits
    </div>
    <div
      class="
        grow
        text-center
        p-2
        bg-gray-700
        rounded
        hover:bg-gray-600
        transition
        cursor-pointer
      "
      :class="currentPage === 'subscribers' ? 'bg-gray-600' : ''"
      @click="setPage('subscribers')"
    >
      Newsletter Subscribers List
    </div>
    <div
      class="
        grow
        text-center
        p-2
        bg-gray-700
        rounded
        hover:bg-gray-600
        transition
        cursor-pointer
      "
      :class="currentPage === 'formSubmissions' ? 'bg-gray-600' : ''"
      @click="setPage('formSubmissions')"
    >
      Contact Form Submissions
    </div>
  </div>
</template>

<script>
export default {
  emits: ["pageChange"],
  data() {
    return {
      currentPage: "editCmsItems",
    };
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
      this.$emit("pageChange", page);
    },
  },
};
</script>