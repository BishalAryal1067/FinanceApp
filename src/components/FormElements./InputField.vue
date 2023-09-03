<template>
  <div id="input-field" class="flex flex-col gap-1">
    <span class="font-medium text-black_1 text-[1.05rem]">
      {{ inputHeader }}
    </span>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="inputType"
      :placeholder="placeholder"
      class="border-[.1rem] border-black_2 rounded-md text-[.95rem] text-black_2 font-medium p-2 min-w-[20rem] outline-none focus:outline-[2px] focus-visible:outline-offset-[-1px] focus:outline-green_1"
      :class="{
        'outline-red_1 outline-offset-[-1px] focus:outline-red_1 focus:outline-offset-[-1px]':
          hasError,
      }"
    />
    <slot></slot>
  </div>
</template>

<script setup>
defineEmits(["update:modelValue"]);

defineProps({
  inputType: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    required: true,
  },
  inputHeader: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String || Number,
    required: true,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
});
</script>
