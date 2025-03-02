import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/router";

//vue tippy library for the tooltips
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";

//pinia for state management
import { createPinia } from "pinia";
const pinia = createPinia();

//graphql client
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./controllers/apollo";
import Plugin from '@storipress/apollo-vue-devtool';

const app = createApp(App);
app.use(VueTippy, {
  directive: "tippy", // => v-tippy
  component: "tippy", // => <tippy/>
  componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
  defaultProps: {
    placement: "auto-end",
    allowHTML: true,
  },
  theme: "light",
});
app.provide(DefaultApolloClient, apolloClient);
app.use(router);
app.use(pinia);
app.use(Plugin);
app.mount("#app");
