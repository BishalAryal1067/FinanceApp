<template>
  <div class="flex flex-col">
    <!-- <div id="row" v-for="(row, index) in rows" :id="index" class="flex gap-3 py-2 items-center">
      <InputField :placeholder="'Enter bill item'" v-model:modelValue="row.items.itemName" />
      <InputField :placeholder="'Enter total cost'" v-model="row.items.cost" />
      <div id="date" class="h-full flex items-center gap-3">
        <span
          class="bg-green_light border-[1px] rounded-lg border-green_1 flex h-fit justify-center items-center text-sm font-medium text-black_2 py-1 px-3 cursor-pointer">Today</span>
        <span
          class="bg-green_light border-[1px] rounded-lg border-green_1 flex h-fit justify-center items-center text-sm font-medium text-black_2 py-1 px-3 cursor-pointer">Yesterday</span>
        <InputField :input-type="'date'" v-model="row.date" />
      </div>
      <span class="bg-red_2 flex p-2 rounded-lg cursor-pointer" @click="removeRow(index)">
        <Icon :iconName="'trash'"/>
      </span>

    </div> -->
    <!--new bill-->

    <!--button sections-->
    <div class="flex gap-3 pt-3">
      <Button :label="'Add new item'" :class="[buttonClass, 'bg-blue_light']" @click="addRow">
        <Add :fill="'teal_dark'" />
      </Button>
      <Button :label="'Save'" :class="[buttonClass, 'bg-green_1']" @click="saveData" />
    </div>
    <!--success Modal-->
    <BasicModal :show-modal="displayModal" @close="toggleModal" :heading="modalData.title" :message="modalData.message" />
  </div>

  <div id="bill" class="bg-grey_2 max-w-fit box-border px-3 py-2 rounded">
    <div id="bill-header" class="flex gap-2">
      <InputField :placeholder="'Bill heading...'"/>
      <InputField :inputType="'date'" :placeholder="'date'"/>
  </div>
  <hr class="w-full h-[.2175rem] bg-grey_2 border-dashed stroke-[12px] my-2" />
    <div id="items-area" class="max-w-full">
       <div id="item-header" class="w-full flex justify-end">
         <span class="bg-[teal] flex items-center gap-2 justify-center px-2 py-1 rounded-lg cursor-pointer text-sm font-semibold text-grey_2">
         <Icon :iconName="'add'"/>
         Add new item
        </span>

        <Icon :iconName="'home'" :fill="'grey_1'"/>
       </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import InputField from "@component/FormElements/InputField.vue"
import Button from "@component/FormElements/Button.vue";
import Icon from '@icon/Icon.vue';
import BasicModal from '@component/Modal/BasicModal.vue';
import { supabase } from "@controller/supabaseConnection";

const displayModal = ref(false);
const toggleModal = () => displayModal.value = !displayModal.value;
const modalData = reactive({
  title: '',
  message: ''
})

const rows = ref([
 {
  date : '',
  items : [{itemName: '', price: ''}]
 }
]);

console.log(rows)
const addRow = () => {
  rows.value.push( {
  date : '',
  items : [{itemName: '', price: ''}]
 })
}

const removeRow = (index) => {
  rows.value.splice(index, 1)
}

const bill = ref(null)
onMounted(async () => {
  const { data, error } = await supabase.from('Bill').select('*');
  if (!error) {
    bill.value = data;
    console.log('bill=', bill.value)
  }
  else {
    console.log('error ==', error)
  }
})
const errors = ref([])
const saveData = async () => {
  for (const row of rows.value) {
    // Insert each row into the "Bill" table
    const { data, error } = await supabase.from('Bill').insert([row]);
    error ? errors.value.push(error) : errors.value = [];
  }
  if (errors.value.length == 0) {
    rows.value = [];
    rows.value.push({
      item: '',
      cost: '',
      date: '',
    })
    modalData.title = 'Success';
    modalData.message = 'Data saved successfully'
    toggleModal();
  }
}


const buttonClass = 'px-4 py-2 rounded-lg'
</script>
