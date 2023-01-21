<template>
  <div class="min-h-screen bg-gray-900 pt-24 pb-10 text-white">
    <admin-nav @page-change="setPage" class="mb-6" />
    <edit-cms-items v-if="currentPage === 'editCmsItems'" />
    <contact-form-submissions v-if="currentPage === 'formSubmissions'" />
  </div>
</template>

<script>
import AdminNav from "@/components/admin/AdminNav.vue";
import ContactFormSubmissions from "@/components/admin/ContactFormSubmissions.vue";
import EditCmsItems from "@/components/admin/EditCmsItems.vue";

import { useAdminStore } from "@/stores/admin";

export default {
  setup() {
    const adminStore = useAdminStore();
    return {
      adminStore,
    };
  },
  components: {
    AdminNav,
    ContactFormSubmissions,
    EditCmsItems,
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
  mounted() {
    this.adminStore.fill();
  },
};
</script>