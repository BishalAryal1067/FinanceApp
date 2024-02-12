<template>
    <i :class="[getIconName, extraStyle]"
    :style="[`color: ${convertToHex(fill)}`]" @click="$emit('click')" @mouseover="$emit('hover')">
    </i>
</template>

<script setup>
import { convertToHex } from '@helper/colorConverter';
import {computed} from "vue";

defineEmits(['hover', 'click'])

const props = defineProps({
    fill: {
        type: String,
        default: "grey_2",
    },
    iconName: {
        type:String,
        required:true,
    },
    extraStyle: {
        type:String,
        required:false
    }
})

const getIconName = computed(()=>`fa-solid fa-${props.iconName}`);
</script>

