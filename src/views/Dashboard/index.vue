<template>
  <GlobalLayout>
    <div class="w-full bg-black_1 h-screen max-h-screen flex gap-3">
      <!--div to show cards--> 
      <div v-if="bill_list.length > 0">
          <p class="text-xl text-[white]"> bill </p>
      </div>
    </div>
  </GlobalLayout>
</template>

<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import getBillInformation from "@controller/fetchData";
import { ref, onMounted, reactive, watch } from "vue";

const bill_list = reactive([])
const bill_error = reactive([]);

onMounted(async()=>{
 const {data:list,error} = await getBillInformation();
 if(!error){
  bill_list.values = list;
 }
 else {
  bill_error.values = error;
 }
})

watch(()=>bill_list.values,(newVal)=>{
  bill_list.values = newVal;
  bill_list.forEach(bill=>{
    console.log(bill)
  })
}, {deep:true});

watch(()=>bill_error.values, (newVal)=>{
  bill_error.values=newVal;
}, {deep:true})
</script>
