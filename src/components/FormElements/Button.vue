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
  <button :class="class">
    <slot></slot>
    {{ label }}
  </button>
</template>
