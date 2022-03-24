<template>
  <div>
    <h3>
      <span class="bold uppercase">
        {{ content.title }}
      </span>

      <span> | {{ content.from }} - {{ content?.to || "Current" }} </span>
    </h3>

    <h4 class="bold">
      {{ content.company }} - {{ content.state }},
      {{ content?.country || "Nigeria" }}
    </h4>

    <ul class="lists">
      <li v-for="item in content.description" :key="item" v-html="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { Content } from "../../../../types";

export default defineComponent({
  name: "Experience",
  props: {
    content: {
      type: Object as PropType<Content>,
      required: true,
    },
  },
});
</script>
