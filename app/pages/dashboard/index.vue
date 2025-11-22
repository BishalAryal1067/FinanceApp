<script setup lang="ts">
definePageMeta({
  layout: "dashboard"
})
</script>

<template>
    <UContainer class='w-full py-2'>
        <UserAccounts />
        <MonthlyCalendar />
    </UContainer>
</template>
