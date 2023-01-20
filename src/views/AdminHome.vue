<template>
  <div class="min-h-screen bg-gray-900 pt-24 pb-10 text-white">
    <admin-nav @page-change="setPage" />
    <edit-cms-items v-if="currentPage === 'editCmsItems'" />
  </div>
</template>

<script>
import EditCmsItems from "@/components/admin/EditCmsItems.vue";
import AdminNav from "@/components/admin/AdminNav.vue";

export default {
  components: {
    EditCmsItems,
    AdminNav,
  },
  data() {
    return {
      currentPage: "editCmsItems",
    };
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
  },
};
</script>