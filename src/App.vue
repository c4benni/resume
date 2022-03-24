<script lang="ts">
import { defineComponent, onBeforeMount } from "@vue/runtime-core";
import Drawer from "./components/Drawer.vue";
import { themeMediaListener } from "./components/utils/useTheme";
import Main from "./components/Main/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Drawer,
    Main,
  },
  setup() {
    onBeforeMount(() => {
      themeMediaListener();
    });
  },
});
</script>

<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-[256px,1fr] bg-surface dark:bg-surface-dark lg:w-screen lg:h-screen lg:max-w-[100vw] lg:max-h-[100vh] lg:overflow-hidden overscroll-contain"
  >
    <Drawer />

    <Main />
  </div>
</template>
