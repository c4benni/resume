<template>
  <button
    class="button"
    :class="{
      'w-full': block,
    }"
  >
    <slot />

    <IconWrapper v-if="$slots.icon">
      <slot name="icon" />
    </IconWrapper>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import IconWrapper from "./IconWrapper.vue";

export default defineComponent({
  name: "Button",

  props: {
    block: Boolean,
  },

  components: { IconWrapper },
});
</script>

<style scoped lang="postcss">
.button {
  @apply font-medium text-base outline-none transform-gpu inline-grid justify-center items-center select-none transition-[opacity,transform,box-shadow] relative grid-flow-col gap-x-[0.5em] before:opacity-0 before:transition-opacity before:bg-current isolate before:-z-1 can-hover:hover:before:opacity-5 can-hover:active:before:opacity-10 active:before:opacity-5 h-[44px] px-4 before:absolute rounded-md after:border after:absolute after:w-full after:h-full after:rounded-[inherit] after:border-black/10 dark:after:border-white/5 active:scale-[0.9875] can-hover:hover:shadow-sm bg-surface dark:bg-surface-dark text-black/80 dark:text-white/80 before:w-full before:h-full before:rounded-[inherit] before:top-0 before:left-0 active:will-change-transform hover:will-change-transform focus-visible:ring-2 strict-touch:active:ring-2 ring-primary dark:ring-primary-dark;
}
</style>
