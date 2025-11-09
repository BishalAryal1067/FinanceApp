<script setup lang="ts">


</script>

<template>
    <div class='flex w-full h-screen justify-center items-center'>
    <UForm class="flex flex-col gap-4">
        <UFormField label="Email" name="email">
          <UInput  />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput type="password"/>
        </UFormField>

        <UButton 
          type="submit" 
          class="flex justify-center cursor-pointer"
          @click="navigateTo('/dashboard')"
        >
          Submit
        </UButton>
        </UForm>
    </div>
</template>
