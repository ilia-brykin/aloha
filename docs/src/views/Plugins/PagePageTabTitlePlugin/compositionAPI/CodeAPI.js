export default function CodeAPI() {
  const connectionCode = `import { createApp } from "vue";
import App from "./App.vue";
import { APageTabTitlePlugin } from "aloha-vue";

const app = createApp(App);

app.use(APageTabTitlePlugin, "Documentation aloha-vue");

app.mount("#app");`;

  const useCode = `<template>
  <div>
    <a-page-tab-title title="Home Page"></a-page-tab-title>
    <h1>Welcome!</h1>
    <p>This is a demo page.</p>
  </div>
</template>

<script>
import { 
  APageTabTitle,
} from "aloha-vue";

export default {
  name: "HomePage",
  components: {
    APageTabTitle,
  },
};
</script>`;

  return {
    connectionCode,
    useCode,
  };
}
