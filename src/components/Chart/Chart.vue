<template>
    <div class="flex items-center justify-center bg-[white]" :class="customStyle">
        <Bar v-if="type.toLowerCase() == 'bar'" :data="data" :options="options" Title="finance" />
        <Line v-if="type.toLowerCase() == 'line'" :data="data" :options="options" />
        <Doughnut v-if="type.toLowerCase() == 'doughnut'" :data="data" :options="options" />
        <Pie v-if="type.toLowerCase() == 'pie'" :data="data" :options="options" />
        <PolarArea v-if="type.toLowerCase() == 'polar-area'" :data="data" :options="options" />
    </div>
</template>

<script setup>
import { Bar, Line, Doughnut, Pie, PolarArea } from 'vue-chartjs';
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { computed } from 'vue';

//configuring chart
Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

//props for rendering the chart
const props = defineProps({
    chartType: {
        type: String,
    },
    chartData: {
        type: Object,
        required: true
    },
    chartOptions: {
        type: Object,
        default: () => { }
    },
    customStyle: {
        type: String
    }
})


//using computed to make props reactive
const type = computed(() => {
    return props.chartType
})

const data = computed(() => {
    return props.chartData
})

const options = computed(() => {
    return props.chartOptions
})

</script>

<style>

</style>
