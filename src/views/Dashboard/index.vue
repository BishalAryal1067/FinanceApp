<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import Table from "@component/Table/Table.vue";
import { getBillInformation } from "@controller/fetchData";

import { onMounted, ref } from "vue";

let tableHeadings = ['Items', 'Date', 'Cost', 'Total'];
const tableData = ref([])
onMounted(async () => {
  const bill = await getBillInformation();
  tableData.value = bill?.data;
  //getting dates on which items were purchased
  let purchaseDates = new Set();
  
  tableData.value.forEach(data => {
    purchaseDates = purchaseDates.add(data.date);
  })
  //getting items purchased in the date
  let itemsByDate = purchaseDates.forEach(val => {
    return {
      purchaseDate: val,
      items: [],
      costs: []
    }
  })
  // tableData.value.forEach(data=>{
  //   itemsByDate.map(item=>{
  //     if(item.purchaseDate == data.date){
  //       item.items.push(data.item);
  //       item.costs.push(data.cost)
  //     }
  //   })
  // })
})

</script>

<template>
  <GlobalLayout>
    <div class="w-full bg-black_1 h-screen max-h-screen flex gap-3">
      <Table :table-style="'bg-teal w-[80%] max-h-[45vh] rounded-lg mt-5 table-fixed'"
        :heading-style="'text-lg text-[white]'" :table-data="tableData" :headings="tableHeadings">
      </Table>
    </div>
  </GlobalLayout>
</template>
