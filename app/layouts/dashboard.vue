<script setup lang='ts'>
 const openNotifications = ref(false);


</script>


<template>
    <div class="flex flex-col gap-8 h-screen">
        <!--header-->
        <UHeader :toggle='false'>
          <template #left>
            <UAvatar text="B" size="md"/>
          </template>
          <template #right>
            <UChip>
             <USlideover v-model:open='openNotifications'>
                 <UButton icon="i-mynaui:bell" color='neutral' variant='subtle' />
                <template #content>
                  <UHeader :toggle="false">
                    <template #left>
                      Notifications
                    </template>
                    <template #right>
                      <UButton 
                        icon="i-mynaui:x-solid" 
                        color="neutral" 
                        variant="subtle"
                        @click="openNotifications = false"
                       />
                    </template>
                  </UHeader>
                </template>
             </USlideover>
            </UChip>
          </template>
        </UHeader>
        <!--render everything here-->
        <div class='flex-1 px-4 overflow-y-scroll'>
          <slot />
        </div>


        <navbar />
    </div>
</template>
