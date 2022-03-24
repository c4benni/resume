<template>
  <main
    class="lg:h-screen lg:max-h-screen lg:w-full lg:overflow-y-auto lg:py-8"
  >
    <Resume />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Resume from "./Resume/index.vue";

export default defineComponent({
  name: "Main",
  components: { Resume },
});
</script>
