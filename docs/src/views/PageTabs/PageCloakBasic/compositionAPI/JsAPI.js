export default function JsAPI() {
  const codeJs = `import ACloak from "aloha-vue/src/ACloak/ACloak";
    
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
