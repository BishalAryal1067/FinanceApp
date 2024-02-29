<template>
  <GlobalLayout v-cloak>
    <div class="w-full bg-black_1 h-screen max-h-screen flex gap-3 px-5 pt-3">
      <!--cards wrapper-->
      <div class="flex gap-2">
        <TransitionGroup name="slide">
          <div id="card" 
            v-for="(bill, index) in state.billInformation" :key="index" 
            class="w-[15rem] h-[7.5rem] box-border px-[.65rem] py-[.25rem] rounded-md flex flex-col justify-start items-start bg-grey_3 cursor-pointer hover:scale-[.97]">
            <div class="w-full flex justify-between items-center border-b-[1px] border-b-grey_2">
            <p class="text-[white] text-lg"> {{ bill?.bill_detail?.bill_title }} </p>
            <p class="text-[white] text-normal opacity-[.65]"> {{ getShortDate(bill?.bill_detail?.bill_date) }} </p>
            </div>
            <div class="pt-2 flex flex-col gap-1">
            <p class="text-[white] text-sm"> Total items: <span class="font-bold"> {{bill?.bill_detail?.items.length}} </span> </p>
            <p class="text-[white] text-sm"> Total Spent: <span class="font-bold"> NRS. {{getTotalCost(bill?.bill_detail?.items)}} </span> </p>
            </div>

          </div>
        </TransitionGroup>
      </div>
    </div>
  </GlobalLayout>
</template>

<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import getBillInformation from "@controller/fetchData";
import getMonth from "@controller/getMonth";
import { ref, onMounted,onUpdated, reactive, watch, TransitionGroup } from "vue";
import {authStore} from "@store/AuthStore";
import {useRouter} from "vue-router";

const _AUTH_STORE = authStore();
const _CURRENT_USER = _AUTH_STORE.getSession?.email;
const router = useRouter();


const getShortDate = (date)=>{
  let shortDate =  new Date(date);
  return shortDate = shortDate.getFullYear() + ' '+ getMonth([shortDate.getMonth()]) + ' '+ shortDate.getDate();
}

const getTotalCost = (items=>{
  let totalCost = 0;
  items.forEach(item=>{
    totalCost += Number(item?.total)
  })
  return totalCost;
})

const state = reactive({ billInformation: [] });
onMounted(() => {
  //check for session 
  if(!_AUTH_STORE.getSession){
    router.push({name: "auth.login"});
  }
  getBillInformation(_CURRENT_USER).then(res => {
    res.forEach(item => {
      state.billInformation.push({ id: item?.id, user: item?.user, bill_detail: JSON.parse(item?.bill_detail) })
    })
  });
});

onUpdated(()=>{
  if(!_AUTH_STORE.getSession){
    router.push({name:"auth.login"});
  }
})
</script>

<style scoped>

 .slide-enter-from,
 .slide-leave-to {
   opacity: 0;
   transform: scale(0)
 }

 .slide-enter-active,
 .slide-leave-active {
   transition: all .35s ease-in-out;
 }

 #card {
   transition: transform .35s ease;
 }
</style>
