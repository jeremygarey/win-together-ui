<template>
  <div class="container p-0">
    <div class="grid grid-cols-3 pb-2 px-2 font-light text-gray-400">
      <div>Email</div>
      <div>Name</div>
      <div class="text-right">Date</div>
    </div>
    <div class="p-2 bg-gray-800 rounded-lg flex flex-col gap-2">
      <div
        class="p-2 bg-gray-700 rounded-lg grid grid-cols-3"
        v-for="(s, id) in adminStore.subscribers"
        :key="`subscriber-${id}`"
      >
        <div class="font-bold">{{ s.email }}</div>
        <div>{{ s.name }}</div>
        <div class="text-right">{{ formatDate(s.date) }}</div>
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