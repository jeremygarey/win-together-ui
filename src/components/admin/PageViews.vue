<template>
  <div class="container p-0">
    <div class="p-2 bg-gray-800 rounded-lg grid grid-cols-3 gap-4">
      <div class="p-2 bg-gray-700 rounded-lg col-span-3">
        <page-views-chart />
      </div>
      <div class="p-2 bg-gray-700 rounded-lg text-center">
        <div class="font-black text-green text-3xl">
          {{ adminStore.pageViews.totals.allTime }}
        </div>
        <div class="">Views all time</div>
      </div>
      <div class="p-2 bg-gray-700 rounded-lg text-center">
        <div class="font-black text-green text-3xl">
          {{ adminStore.pageViews.totals.month }}
        </div>
        <div>Views last 31 days</div>
      </div>
      <div class="p-2 bg-gray-700 rounded-lg text-center">
        <div class="font-black text-green text-3xl">
          {{ adminStore.pageViews.totals.week }}
        </div>
        <div>Views last 7 days</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAdminStore } from "@/stores/admin";
import { DateTime } from "luxon";

import PageViewsChart from "./PageViewsChart.vue";

export default {
  setup() {
    const adminStore = useAdminStore();
    return {
      adminStore,
    };
  },
  components: {
    PageViewsChart,
  },
  methods: {
    formatDate(isoString) {
      return DateTime.fromISO(isoString).toLocaleString(DateTime.DATETIME_MED);
    },
  },
};
</script>