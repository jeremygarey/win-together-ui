<template>
  <div class="container p-0">
    <div class="flex pb-2 px-2 font-light text-gray-400">
      <div class="w-3/12">Name</div>
      <div class="w-4/12">Email</div>
      <div class="w-3/12 text-right">Date</div>
      <div class="w-2/12 text-right">Subscribed</div>
    </div>
    <div class="mb-6 bg-gray-800 rounded-lg p-2 flex flex-col gap-4">
      <div
        v-for="(cfs, id) in adminStore.contactFormSubmissions"
        :key="`cfs-${id}`"
        class="p-2 bg-gray-700 rounded-lg"
      >
        <div class="flex pb-2 font-light">
          <div class="font-bold w-3/12">{{ cfs.name }}</div>
          <div class="w-4/12">{{ cfs.email }}</div>
          <div class="w-3/12 text-right">{{ formatDate(cfs.date) }}</div>
          <div
            class="w-2/12"
            :class="cfs.subscribed ? 'text-green' : 'text-red-300'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-auto mr-1"
              v-if="cfs.subscribed"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-auto mr-1"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div class="bg-gray-800 p-2 rounded font-light">
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