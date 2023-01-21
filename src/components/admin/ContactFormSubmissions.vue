<template>
  <div class="container p-0">
    <div
      class="mb-6"
      v-for="(cfs, id) in adminStore.contactFormSubmissions"
      :key="`cfs-${id}`"
    >
      <div class="p-2 bg-gray-800 rounded-lg">
        <div class="flex gap-8 pb-2 font-light">
          <div class="font-bold">{{ cfs.name }}</div>
          <div>{{ cfs.email }}</div>
          <div>{{ formatDate(cfs.date) }}</div>
          <div :class="cfs.subscribed ? 'text-green' : 'text-red-300'">
            {{ cfs.subscribed ? "Subscribed" : "Not subscribed" }}
          </div>
        </div>
        <div class="bg-gray-700 p-2 rounded font-light">
          <p>{{ cfs.message }}</p>
        </div>
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