<template>
  <aside
    v-if="!breakpoint.isMobile"
    class="bg-primary/[0.04] dark:bg-primary-dark/[0.04] border-r border-black/5 dark:border-white/5 p-6 content-between lg:grid hidden"
  >
    <div class="grid gap-y-6 my-6">
      <p
        class="cursive-font text-[1.25rem] font-semibold dark:font-medium text-black/80 dark:text-white/90"
      >
        C4Benn
      </p>

      <Button block>
        Download
        <template #icon>
          <Download />
        </template>
      </Button>

      <Button block>
        Print
        <template #icon>
          <Print />
        </template>
      </Button>
    </div>

    <form action="." class="flex items-center h-full pb-6" @submit.prevent>
      <label
        for="check"
        class="mr-[8px] cursor-pointer text-paragraph dark:text-paragraph-dark text-base"
      >
        Dark theme
      </label>
      <Switch id="check" v-model="theme.dark" />
    </form>
  </aside>

  <template v-else>
    <Button
      class="fixed top-3 left-3 z-20 rounded-full w-[44px] h-[44px]"
      title="Menu"
      @click="drawerState = !drawerState"
    >
      <IconWrapper class="text-xl">
        <Component :is="drawerState ? 'Close' : 'Menu'" />
      </IconWrapper>
    </Button>

    <Teleport to="body">
      <div class="fixed inset-0">
        <UiTransition spring="stiff">
          <div
            v-if="drawerState"
            class="bg-black/70 fixed z-10 w-full h-full inset-0"
            @click="drawerState = false"
          />
        </UiTransition>

        <UiTransition config="slideY" spring="stiff">
          <div
            v-if="drawerState"
            class="w-full bg-card dark:bg-card-dark fixed z-10 left-0 bottom-0 px-6 py-8 dark:border-r border-r-white/10 shadow-md dark:shadow-none outline-none"
            tabindex="0"
            @vnode-mounted="drawerEntered"
          >
            <div class="grid gap-y-6 my-6">
              <p
                class="cursive-font text-[1.25rem] font-semibold dark:font-medium text-black/80 dark:text-white/90"
              >
                C4Benn
              </p>

              <Button block>
                Download
                <template #icon>
                  <Download />
                </template>
              </Button>

              <Button block>
                Print
                <template #icon>
                  <Print />
                </template>
              </Button>

              <form
                action="."
                class="flex items-center h-full pb-6 mt-6"
                @submit.prevent
              >
                <label
                  for="check"
                  class="mr-[8px] cursor-pointer text-paragraph dark:text-paragraph-dark text-base"
                >
                  Dark theme
                </label>
                <Switch id="check" v-model="theme.dark" />
              </form>
            </div>
          </div>
        </UiTransition>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  VNode,
  watch,
} from "@vue/runtime-core";
import Download from "./Icons/Download.vue";
import Print from "./Icons/Print.vue";
import Switch from "./Switch.vue";
import useBreakpoint from "./utils/hooks/useBreakpoint";
import theme from "./utils/useTheme";
import Menu from "./Icons/Menu.vue";
import IconWrapper from "./IconWrapper.vue";
import Close from "./Icons/Close.vue";

export default defineComponent({
  name: "Drawer",
  components: { Download, Print, Switch, Menu, IconWrapper, Close },
  setup() {
    const breakpoint = computed(() => useBreakpoint().value);

    const drawerState = ref(false);

    watch(
      () => breakpoint.value.isMobile,
      () => {
        drawerState.value = false;
      }
    );

    const drawerEntered = (vnode: VNode) => {
      vnode.el?.focus();
    };

    return { theme, breakpoint, drawerState, drawerEntered };
  },
});
</script>
