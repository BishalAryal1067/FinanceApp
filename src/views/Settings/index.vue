<script setup>
import GlobalLayout from "@layout/GlobalLayout.vue";
import Icon from "@component/Icons/Icon.vue";
import InputField from "@component/FormElements/InputField.vue";
import Button from '@component/FormElements/Button.vue'
</script>

<template>
  <GlobalLayout>
   <div id="wrapper" class="flex gap-2 mt-3">
      <div id="tab-section">
         <div id="tab" 
          class="text-grey_2 bg-grey_3 text-md flex gap-2 items-center box-border py-[.25rem] px-[.5rem] border-[1px] border-grey_1 rounded-md cursor-pointer"> 
          <span>Change Password</span> 
          <Icon :iconName="'key'" :fill="'grey_2'"/>
          </div>
      </div>
      <div id="setting_section"
      class="flex">
        <div class="change_setting">
          <p>Send an OTP</p>
          <InputField :placeholder="'Enter your email'"/>
          <Button :label="'Send'" :class="'bg-teal text-[white] px-[.75rem] py-[.25rem] rounded-sm mt-2'"/>
        </div>
      </div>
    </div> 
  </GlobalLayout>
</template>
