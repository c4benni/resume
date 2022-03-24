<template>
  <div
    id="resume"
    role="document"
    class="lg:max-w-[748px] min-w-[644px] lg:rounded-md overflow-hidden mx-auto w-full bg-card dark:bg-card-dark text-black/90 dark:text-white/90"
  >
    <Header />

    <Body />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Header from "./Header.vue";
import Body from "./Body/index.vue";

export default defineComponent({
  name: "Resume",
  components: {
    Header,
    Body,
  },
});
</script>
