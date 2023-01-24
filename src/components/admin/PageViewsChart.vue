<template>
  <Line :data="data" :options="options" />
</template>
  
<script>
import { useAdminStore } from "@/stores/admin";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  setup() {
    const adminStore = useAdminStore();
    return {
      adminStore,
    };
  },
  components: {
    Line,
  },
  data() {
    return {
      data: {
        labels: Object.keys(this.adminStore.pageViews.byDay),

        datasets: [
          {
            label: "Page views",
            backgroundColor: "#8CC63F",
            fill: false,
            borderColor: "#a9a9a9",
            data: Object.values(this.adminStore.pageViews.byDay),

            // tension: 0.2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#e4e4e4",
            },
          },
          y: {
            ticks: {
              color: "#e4e4e4",
            },
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>