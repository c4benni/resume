<template>
  <section
    class="before:block before:w-[80px] before:border-t before:border-dashed before:border-black/20 dark:before:border-white/25 mt-[25px] mb-[56px]"
  >
    <h2
      class="text-[18px] leading-[1.5] text-primary dark:text-primary-dark font-bold pb-[6px] mt-[10px]"
    >
      {{ title }}
    </h2>

    <div class="text-black/90 dark:text-white/80">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Section",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
