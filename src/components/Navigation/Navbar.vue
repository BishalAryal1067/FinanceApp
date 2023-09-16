<script setup>
import Finance from "../Icons/Finance.vue";
import Gear from "../Icons/Gear.vue";
import Slider from "../Icons/Slider.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const activeNavItem = ref([]);

</script>

<template>
  <div
    class="flex flex-col min-w-[7.5rem] items-center justify-start text-xl py-12 gap-6"
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
    <div id="nav-box"></div>
    <div id="nav-box"></div>
  </div>
</template>
