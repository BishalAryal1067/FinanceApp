<script setup lang='ts'>
 let isLoading = true;

 const accounts = [
     {
       id: 1,
       name: "Nepal Bank Limited",
       abbr: "NBL",
       type: "Bank",
       balance: 2235.76
     },
     {
       id: 2,
       name: "Standard Chartered",
       abbr: "SC",
       type: "Bank", 
       balance: 2235.76
     }, 
     {
       id: 3,
       name: "Esewa",
       abbr: "ESEWA",
       type: "App",
       balance: 2235.76
     }

 ]

 setTimeout(()=> {
   isLoading = false;
 }, 250);

</script>

<template>
        <USkeleton v-if='isLoading' class='w-32 h-18' />
        <UContainer v-else class='w-full'>
            <UCard variant='outline' class='w-full'>
              <template #header>
                  <div class='flex justify-between items-center'>
                    <span class='text-sm'>Accounts</span>
                    <UIcon name='i-mynaui:plus'/>
                  </div>
              </template>
              <template #default>
                <div 
                  v-for='account in accounts' 
                  :id='account.id'
                  class='flex w-full justify-between text-xs font-medium py-1'
                  >
                    <div class='w-8 max-w-8'>{{ account.abbr }} </div>
                    <div>{{ account.type }} </div>
                    <div>{{ account.balance }} </div>
                </div>
              </template>
             </UCard>
        </UContainer>
</template>
