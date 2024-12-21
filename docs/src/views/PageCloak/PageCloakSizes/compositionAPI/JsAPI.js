export default function JsAPI() {
  const codeJs = `import { 
  ACloak,
} from "aloha-vue";
    
export default {
  name: "PageCloakSizes",
  components: {
    ACloak,
  },
};`;

  return {
    codeJs,
  };
}
