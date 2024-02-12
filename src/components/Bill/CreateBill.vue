<script setup>
import { ref, reactive, onMounted } from 'vue';
import InputField from "@component/FormElements/InputField.vue"
import Button from "@component/FormElements/Button.vue";
import Icon from '@icon/Icon.vue';
import BasicModal from '@component/Modal/BasicModal.vue';
import { supabase } from "@controller/supabaseConnection";
import {authStore} from "@store/AuthStore.js";

//styling for button
const buttonClass = 'px-4 py-2 rounded-lg max-w-fit box-border'

//variables for billing
const bill = reactive([])

//adding row
const addRow = ()=>{
  bill.push({item:'', qty:'', rate:'', total:''});
}

//deleting row
const deleteRow = (index) =>{
  console.log(index);
  bill.splice(index,1);
  console.log(bill)
}

//getting current user
const _AUTH_STORE = authStore();
const _USER_EMAIL = _AUTH_STORE.getSession?.email;


//saving bill details
// const saveBill = ()=>{
//   const billDetails = JSON.stringify({user : _USER_EMAIL, billDetails: bill})
//   console.log(billDetails);
// }

//calculate row total
const calculateRowTotal = (row)=>{
  const qty = Number(row.qty?.trim().match(/[^a-z]+/));
  const rate = Number(row.rate?.trim().match(/[^a-z]+/));
  row.total = rate * qty
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
        Add Item
       </span>
       <!--save button-->
       <Button 
       :label="'Save Bill'" 
       :class="[buttonClass, 'bg-[aqua]']"
       @click="saveBill"></Button>
    </div>
    <hr class="w-full h-[.2175rem] bg-grey_2 border-dashed stroke-[12px] my-2" />
      <div id="items-area" class="max-w-full">
        <!--empty-->
          <div id="empty-row" class="w-full flex justify-start" v-if="bill.length == 0">
            <p class="text-xs my-2 italic text-grey_1 font-medium">[Note*]: No item is added. Click on the add item above then enter details</p>
          </div>
        <!--items-->
            <div id="row" v-for="(row,index) in bill" class="w-full flex justify-start gap-2 items-center mb-2">
              <InputField type="text" :customStyle="'min-w-[7.5rem] max-w-[12rem]'" v-model="row.item" placeholder="Item"/>
              <InputField type="text" :customStyle="'min-w-[5rem] max-w-[7.5rem]'" v-model="row.qty" placeholder="Quantity"/>
              <InputField type="number" :customStyle="'min-w-[5rem] max-w-[7.5rem]'" v-model="row.rate" placeholder="Rate"/>
              <InputField type="text" :customStyle="'min-w-[5rem] max-w-[7.5rem]'" v-model="row.total" placeholder="Total" 
              @focus="calculateRowTotal(row)"/>
              <Icon :iconName="'trash'" 
              :fill="'red_1'" 
              :extraStyle="'cursor-pointer box-border p-2 rounded-[50%] hover:scale-[1.15]'" 
              alt="delete" 
              @click="deleteRow(index)"/>
           </div>
      </div>
    </div>
  </div>
  </div>
</template>





