import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./assets/main.css";
import uiTransition from "ui-transition";
import { InstallOptions } from "ui-transition/dist/src/types";
import Button from "./components/Button.vue";

const app = createApp(App);

app.component("Button", Button);

app.use(uiTransition, {
  transitions: {
    slideX: (from = 100, to = 0, unit = "%") => ({
      frame: (step, phase) => {
        const build = {
          enter: {
            transform: `translate3d(${step(from, to)}${unit}, 0, 0)`,
          },

          leave: {
            transform: `translate3d(${step(to, from)}${unit}, 0, 0)`,
          },
        };

        return build[phase];
      },
    }),

    slideY: (from = 100, to = 0, unit = "%") => ({
      frame: (step, phase) => {
        const build = {
          enter: {
            transform: `translate3d(0, ${step(from, to)}${unit}, 0)`,
          },

          leave: {
            transform: `translate3d(0, ${step(to, from)}${unit}, 0)`,
          },
        };

        return build[phase];
      },
    }),
  },
} as InstallOptions);

app.mount("#app");
