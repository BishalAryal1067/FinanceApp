<script setup>
import { ref, reactive, onMounted } from 'vue';
import InputField from "@component/FormElements/InputField.vue"
import Button from "@component/FormElements/Button.vue";
import Icon from '@icon/Icon.vue';
import BasicModal from '@component/Modal/BasicModal.vue';
import { supabase } from "@controller/supabaseConnection";

//styling for button
const buttonClass = 'px-4 py-2 rounded-lg max-w-fit box-border'

//variables for billing
const bill = reactive([])
const columnHeadings = ['Item', 'Quantity', 'Rate', 'Total'];

//adding row
const addRow = ()=>{
  bill.push({item:'', qty:'', rate:'', total:''});
}



//custom width for input fields
const width = 'min-w-[12rem] max-w-[12rem]';

//saving bill details
const saveBill = ()=>{
  const billDetails = JSON.stringify(bill)
  console.log(billDetails);
}

</script>

<template>
  <div class="flex flex-col mt-4 gap-2">
    <!--header-->
    <Button 
    :label="'Bill'" 
    :class="[buttonClass, 'bg-blue_light']">
   <Icon :iconName="'plus'" fill="black"/>
  </Button>
  <!--Bill section-->
  <div id="bill-section" class="w-full box-border pr-2 flex-wrap">
    <!--bill-->
    <div id="bill" class="bg-grey_2 max-w-fit box-border px-3 py-2 rounded">
      <div id="bill-header" class="flex gap-2">
        <InputField :placeholder="'Bill heading...'"/>
        <InputField :inputType="'date'" :placeholder="'date'"/>
        <span 
        class="bg-[teal] flex items-center gap-2 justify-center px-2 py-1 rounded-lg cursor-pointer text-sm font-semibold text-grey_2"
        @click="addRow">
        <Icon :iconName="'add'"/>
        Add
       </span>
       <!--save button-->
       <Button 
       :label="'Save Bill'" 
       :class="[buttonClass, 'bg-[aqua]']"
       @click="saveBill"></Button>
    </div>
    <hr class="w-full h-[.2175rem] bg-grey_2 border-dashed stroke-[12px] my-2" />
      <div id="items-area" class="max-w-full">
        <!--heading-->
        <div id="column-headings" class="w-full flex justify-between">
          <span v-for="heading in columnHeadings" class="capitalize flex justify-start min-w-[12rem] max-w-[12rem] pl-0 box-border"> {{ heading }} </span>
        </div>
        <!--empty-->
          <div id="empty-row" class="w-full flex justify-start" v-if="bill.length == 0">
            <p class="text-xs my-2 italic text-grey_1 font-medium">[Note*]: No item is added. Click on the add item above then enter details</p>
          </div>
        <!--items-->
            <div id="row" v-for="row in bill" class="w-full flex justify-between gap-2 items-center mb-2">
              <InputField type="text" :customStyle="width" v-model="row.item"/>
              <InputField type="text" :customStyle="width" v-model="row.qty"/>
              <InputField type="text" :customStyle="width" v-model="row.rate"/>
              <InputField type="text" :customStyle="width" v-model="row.rate"/>
              <Icon :iconName="'trash'" :fill="'red_1'" class="cursor-pointer" alt="delete"/>
           </div>
      </div>
    </div>
  </div>
  </div>
</template>





