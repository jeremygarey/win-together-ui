<template>
  <div class="container p-0">
    <div class="p-2 bg-gray-800 rounded-lg grid grid-cols-3 gap-12">
      <div class="p-2 bg-gray-700 rounded-lg">
        <div>All time views: {{ adminStore.pageViews["total"] }}</div>
        <div>Views last week: {{ adminStore.pageViews["week"] }}</div>
        <div>Views this month: {{ adminStore.pageViews["month"] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAdminStore } from "@/stores/admin";
import { DateTime } from "luxon";

export default {
  setup() {
    const adminStore = useAdminStore();
    return {
      adminStore,
    };
  },
  methods: {
    formatDate(isoString) {
      return DateTime.fromISO(isoString).toLocaleString(DateTime.DATETIME_MED);
    },
  },
};
</script>