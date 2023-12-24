<script setup>
import Icon from "@icon/Icon.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const activeNavItem = ref([]);
const router = useRouter();

const navItems = [
  {title:'Manage your finanaces', icon:'coins'},
  {title:'Settings', icon:'gear'},
  {title:'Profile and preferences', icon:'user'},
  {title:'Create a bill', icon:'plus'}
]

</script>

<template>
  <div
    class="flex flex-col min-w-[7.5rem] items-center justify-start text-xl py-12 gap-6 bg-black_2 h-screen max-h-screen"
  >
    <div id="nav-box" v-for="(item, index) in navItems" class="cursor-pointer">
      <tippy :content="item.title" :id="index">
        <Icon :iconName="item.icon"/>
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
