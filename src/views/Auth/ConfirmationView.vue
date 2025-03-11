<script setup>
import { reactive, onMounted, ref, watch } from "vue";
import Icon from "@icon/Icon.vue";
import InputField from "@component/FormElements/InputField.vue";

const otp = reactive({
      0 : "",
      1: "" ,
      
});

const otpInput = ref(null);

onMounted(()=>{
  console.log(otpInput)
  otpInput.value.focus()
})

watch(otpInput, ()=>{
   if(otpInput) console.log(otpInput)
})

</script>

<template>
    <div class="bg-teal_dark flex justify-center items-center h-screen">
      <div class="w-1/3 rounded-sm flex flex-col gap-2 justify-center items-center bg-[white] py-5">
        <div class="flex items-center gap-4">
            <Icon :fill="'blue_shade_1'" :iconName="'envelope'"/>
            <h1 class="text-blue_shade_1 mb-0 text-lg font-bold">Check your email for verification</h1>
        </div>
        <!--otp container-->
        <div class="w-full flex justify-center m-h-fit gap-2" id="otp-input-container">
            <input-field 
                v-for="i in 6"
                :ref="otpInput"
                :key="i" 
                type="text" 
                custom-style="w-[2rem]"
            />
         </div>                                                                         
      </div>
    </div> 
</template>

<style>
.confirm-tagline {
 color: white;
 font-size: 1.5rem;
}

#otp-input-container>input {
 background: transparent;
 border: .1rem solid white;
 border-radius: .25rem;
 width: 2rem;
 box-sizing: border-box;
 padding: .5rem;
 color: white;
}
</style>


