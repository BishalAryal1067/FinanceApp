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
    class="fa-solid fa-sliders"
    :style="`color: ${convertToHex(fill)}`"
  ></i>
</template>
