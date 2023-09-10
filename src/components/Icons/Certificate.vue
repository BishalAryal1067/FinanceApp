<script setup>
import { convertToHex } from "../../helpers/colorConverter";

defineProps({
  fill: {
    type: String,
    default: "grey_2",
  },
});
</script>

<template>
  <i
    class="fa-solid fa-certificate"
    :style="`color: ${convertToHex(fill)}`"
  ></i>
</template>
