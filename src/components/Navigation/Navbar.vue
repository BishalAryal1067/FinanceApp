<script setup>
import Add from "../Icons/Add.vue";
import Finance from "../Icons/Finance.vue";
import Gear from "../Icons/Gear.vue";
import Slider from "../Icons/Slider.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const activeNavItem = ref([]);
const router = useRouter();

</script>

<template>
  <div
    class="flex flex-col min-w-[7.5rem] items-center justify-start text-xl py-12 gap-6 bg-black_2 h-screen max-h-screen"
  >
    <div id="nav-box" class="cursor-pointer">
      <tippy content="Manage your finances">
        <Finance fill="blue_light" />
      </tippy>
    </div>
    <div id="nav-box" class="cursor-pointer">
      <tippy content="Settings">
        <Gear fill="blue_light" />
      </tippy>
    </div>
    <div id="nav-box">
      <tippy content="Pofile & preferences" class="cursor-pointer">
        <Slider fill="blue_light" />
      </tippy>
    </div>
    <div id="nav-box" @click="router.push({name:'add-details'})">
      <tippy content="Create bills" class="cursor-pointer">
        <Add fill="blue_light" />
      </tippy>
    </div>
    <div id="nav-box"></div>
  </div>
</template>
