export default function JsAPI() {
  const codeJs = `import { 
  ACloak,
} from "aloha-vue";
    
export default {
  name: "PageCloakText",
  components: {
    ACloak,
  },
};`;

  return {
    codeJs,
  };
}
