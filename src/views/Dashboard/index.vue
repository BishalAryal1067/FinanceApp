<script setup>
import Chart from "@component/Chart/Chart.vue";
import GlobalLayout from "@layout/GlobalLayout.vue";

const options = {
  responsive: true
};
const data = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Financial analysis",
      data: [40, 20, 12]
    }],
};
</script>

<template>
  <GlobalLayout>
    <div class="w-full bg-black_1 h-screen max-h-screen flex gap-3">

    </div>
  </GlobalLayout>
</template>
