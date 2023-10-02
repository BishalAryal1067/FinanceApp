<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import Table from "@component/Table/Table.vue";
import { getBillInformation } from "@controller/fetchData";

import { onMounted, ref } from "vue";

let tableHeadings = ['item', 'purchase date', 'cost', 'total'];
const tableData = ref([])
onMounted(async () => {
  const bill = await getBillInformation();
  console.log('bill', bill)
  tableData.value = bill?.data;
  //getting dates on which items were purchased
  let purchaseDates = new Set();
  tableData.value.forEach(data => {
    purchaseDates = purchaseDates.add(data.date);
  })
  console.log('purchaseDates', purchaseDates)
  //getting items purchased in the date
  let itemsByDate = purchaseDates.forEach(val => {
    return {
      purchaseDate: val,
      items: [],
      costs: []
    }
  })
  tableData.value.forEach(data=>{
    itemsByDate.map(item=>{
      if(item.purchaseDate == data.date){
        item.items.push(data.item);
        item.costs.push(data.cost)
      }
    })
  })

  console.log('items by date', itemsByDate)
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
