export default function CodeAPI() {
  const installCode = `# Using npm
$ npm install aloha-vue

# Using yarn
$ yarn add aloha-vue

# Using pnpm
$ pnpm add aloha-vue`;

  const stylesCode = `import { createApp } from 'vue';
import App from './App.vue';
import 'aloha-vue/dist/aloha-vue.css';

const app = createApp(App);
app.mount('#app');`;

  const useInMainCode = `import { createApp } from 'vue';
import App from './App.vue';
import { AButton } from 'aloha-vue';
import 'aloha-vue/dist/aloha-vue.css';

const app = createApp(App);

app.component('AButton', AButton);

app.mount('#app');`;

  const useInHtmlCode = `<template>
  <div>
    <a-button @click="onClick">Click me</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert("The button is pressed!");
    },
  },
};
</script>`;

  return {
    installCode,
    stylesCode,
    useInHtmlCode,
    useInMainCode,
  };
}
