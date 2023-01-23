<template>
  <div class="container p-0">
    <div class="p-2 bg-gray-800 rounded-lg grid grid-cols-3 gap-4 gap-y-2">
      <div class="p-2 bg-gray-700 rounded-lg text-center">
        <div class="font-black text-green text-3xl">
          {{ adminStore.subscribers.added.allTime }}
        </div>
        <div class="">Total subscribers</div>
      </div>
      <div class="p-2 bg-gray-700 rounded-lg text-center">
        <div class="font-black text-green text-3xl">
          {{ adminStore.subscribers.added.week }}
        </div>
        <div>New this week</div>
      </div>
      <div class="p-2 bg-gray-700 rounded-lg text-center">
        <div class="font-black text-green text-3xl">
          {{ adminStore.subscribers.added.month }}
        </div>
        <div>New this month</div>
      </div>

      <div class="mt-4">Email</div>
      <div class="mt-4">Name</div>
      <div class="text-right mt-4">Subscribed Date</div>

      <div
        class="p-2 bg-gray-700 rounded-lg grid grid-cols-3 col-span-3"
        v-for="(s, id) in adminStore.subscribers.contacts"
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