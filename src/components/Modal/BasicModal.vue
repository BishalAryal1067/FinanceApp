<template>
    <div class="w-screen h-screen absolute left-0 right-0 top-0 bottom-0 grid place-items-center backdrop-blur-lg" id="wrapper" v-if="showModal">
     <!--modal content-->
     <div id="content" class="bg-[#fff] min-w-[20rem] px-5 py-10 rounded-md">
        <!--modal header-->
       <div id="header" class="flex justify-between">
        <div id="title">
            <slot name="icon"></slot>
            <p class="text-lg"> {{ heading }} </p>
        </div>
        
        <p class="text-xs uppercase text-red_2 font-medium cursor-pointer" @click="$emit('close')">close</p>

       </div>
       <!--modal message-->
       <div id="message" class="py-4">
         <p> {{ message }} </p>
       </div>
     </div>
    </div>
</template>

<script setup>

defineProps({
  showModal :{
    type:Boolean,
    default:false
  },
  heading: {
    type:String,
    default:"Title",
  },
  message:{
    type:String,
    default:"This is modal message"
  }
})

defineEmits(['close'])

</script>
