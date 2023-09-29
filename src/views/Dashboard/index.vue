<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import Table from "@component/Table/Table.vue";
import {getBillInformation} from "@controller/fetchData";

import { onMounted,ref } from "vue";

let tableHeadings =['item','purchase date', 'cost'];
const tableData = ref([])
onMounted(async ()=>{
  const bill = await getBillInformation();
  console.log('bill', bill)
  tableData.value = bill?.data;
})

</script>

<template>
  <GlobalLayout>
    <div class="w-full bg-black_1 h-screen max-h-screen flex gap-3">
      <Table 
      :table-style="'bg-teal w-[80%] max-h-[45vh] rounded-lg mt-5 table-fixed'"
      :heading-style="'text-lg text-[white]'"
      :table-data="tableData"
      :headings="tableHeadings">
     <tr>
      <th>Item</th>
      <th>Cost</th>
      <th>Date</th>
     </tr>
    </Table>
    </div>
  </GlobalLayout>
</template>
