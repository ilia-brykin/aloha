export default function CodeAPI() {
  const importCode = `import {
  AMenu,
} from "aloha-vue";`;

  const importCssCode = `import "aloha-vue/dist/aloha-vue.css";`;
  const importsAlohaVueCode = `import {
  ATabs,
  AMobileAPI,
  AAlertPlugin,
} from "aloha-vue";`;

  return {
    importCode,
    importCssCode,
    importsAlohaVueCode,
  };
}
