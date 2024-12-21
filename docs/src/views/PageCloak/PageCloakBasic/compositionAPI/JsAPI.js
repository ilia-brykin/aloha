export default function JsAPI() {
  const codeJs = `import { 
  ACloak,
} from "aloha-vue";
    
export default {
  name: "PageCloakBasic",
  components: {
    ACloak,
  },
};`;

  return {
    codeJs,
  };
}
