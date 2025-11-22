<script setup lang="ts">
import { CalendarDate } from '@internationalized/date';
const currentDate = ref([]);

onMounted(()=> {
 const today = new Date();
 const year = today.getFullYear();
 const month = today.getMonth() + 1;
 const date = today.getDate();
 currentDate.value = new CalendarDate(year, month, date)
})
</script> 


<template>
 <UCard>
   <template #header>
     <div class="flex justify-between items-center">
      <p>Report</p>
        <UButton variant="subtle" color="neutral"> {{ currentDate }} </UButton>
     </div>
   </template>
 </UCard>
</template>
