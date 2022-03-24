<template>
  <div
    class="w-full pt-6 px-[51px] dark:border-x dark:border-b rounded-[inherit] rounded-t-none dark:border-white/10 dark:border-dashed"
  >
    <Section title="Summary">
      <p>
        {{ data.summary }}
      </p>
    </Section>

    <Section title="Skills">
      <ul class="grid grid-cols-2">
        <li v-for="skill in data.skills" :key="skill">
          {{ skill }}
        </li>
      </ul>
    </Section>

    <Section title="Experience">
      <div class="grid gap-y-[44px]">
        <Experience
          v-for="experience in data.experience"
          :content="experience"
        />
      </div>
    </Section>

    <Section title="Education and Training">
      <div class="grid gap-y-[44px]">
        <div v-for="education in data.education" :key="education.title">
          <h2 class="bold">
            {{ education.title }}
          </h2>

          <p>
            {{ education.content }}
          </p>
        </div>
      </div>
    </Section>

    <Section title="Websites, Portfolios, Profiles">
      <ul class="lists">
        <li v-for="link in data.links" :key="link.title">
          <a :href="link.href" target="_blank" rel="noopener" class="anchor">{{
            link.title
          }}</a>
        </li>
      </ul>
    </Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Section from "./Section.vue";
import data from "./data";
import Experience from "./Experience.vue";

export default defineComponent({
  name: "Body",
  components: { Section, Experience },
  setup() {
    return { data };
  },
});
</script>
