import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/global.scss";
import Prism from "prismjs";

createApp(App).use(store).use(router).mount("#app");
Prism.highlightAll();
