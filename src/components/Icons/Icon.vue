<template>
    <i :class="getIconName"
    :style="`color: ${convertToHex(fill)}`">
    </i>
</template>

<script setup>
import { convertToHex } from '@helper/colorConverter';
import {computed} from "vue";

const props = defineProps({
    fill: {
        type: String,
        default: "grey_2",
    },
    iconName: {
        type:String,
        required:true,
    }
})

const getIconName = computed(()=>`fa-solid fa-${props.iconName}`);
</script>

