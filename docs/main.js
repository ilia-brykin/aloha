import App from "./App.vue";
import { createApp } from "vue";
import store from "./store/index";
import router from "./router/index";

createApp(App).use(store).use(router).mount("#app");
