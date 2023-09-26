<script setup>
import { convertToHex } from "@helper/colorConverter";

defineProps({
  fill: {
    type: String,
    default: "grey_2",
  },
});
</script>

<template>
  <i
    class="fa-solid fa-plus"
    :style="`color: ${convertToHex(fill)}`"
  ></i>
</template>
