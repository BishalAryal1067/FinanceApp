<template>
  <GlobalLayout v-cloak>
    <div class="w-full bg-black_1 h-screen max-h-screen flex gap-3 px-5 pt-3">
      <!--cards wrapper-->
      <div class="flex gap-2">
        <TransitionGroup name="slide">
          <div v-for="(bill, index) in state.billInformation" :key="index" class="w-[7.5rem] h-[7.5rem] bg-blue_shade_1 rounded-md">
            <p class="text-[white]"> {{ bill?.bill_detail?.bill_title }} </p>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </GlobalLayout>
</template>

<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import getBillInformation from "@controller/fetchData";
import { ref, onMounted, reactive, watch, TransitionGroup } from "vue";

const state = reactive({ billInformation: [] });
onMounted(() => {
  getBillInformation().then(res => {
    res.forEach(item => {
      state.billInformation.push({ id: item?.id, user: item?.user, bill_detail: JSON.parse(item?.bill_detail) })
    })
  });
})
</script>

<style scoped> xa .list-enter-active,
 .list-leave-active {
   transition: all 0.25s ease;
 }

 .list-enter-from,
 .list-leave-to {
   opacity: 0;
   transform: scale(0)
 }

 .list-leave-active {
   position: absolute;
 }

 .slide-enter-from,
 .slide-leave-to {
   opacity: 0;
   transform: scale(0)
 }

 .slide-enter-active,
 .slide-leave-active {
   transition: all .35s ease-in-out;
 }
</style>
