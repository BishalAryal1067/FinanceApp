<script setup>

defineProps({
  label: {
    type: String || null,
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
