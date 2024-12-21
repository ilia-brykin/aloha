export default function JsAPI() {
  const codeJs = `import { 
  ACloak,
} from "aloha-vue";
    
export default {
  name: "PageCloakAlign",
  components: {
    ACloak,
  },
};`;

  return {
    codeJs,
  };
}
