<script setup>

defineProps({
  label: {
    type: String,
    default: "Submit",
  },
  class : String,
});


</script>

<template>
  <button :class="class">{{ label }}</button>
</template>
