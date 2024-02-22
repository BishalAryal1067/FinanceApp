<template>
    <div class="flex max-w-screen justify-between bg-black_1" v-once>
    <!--navigation bar-->
     <div class="max-w-fit" v-memo="[Navbar]">
        <Navbar/>
     </div>
     <!--component to be rendered based on route-->
     <div class="w-[80%]" v-memo="[RouterView]">
        <slot>
            <RouterView/>
          </slot>
     </div>
    </div>
</template>

<script setup>
 import Navbar from '@component/Navigation/Navbar.vue';
 import { RouterView } from 'vue-router';
</script>

