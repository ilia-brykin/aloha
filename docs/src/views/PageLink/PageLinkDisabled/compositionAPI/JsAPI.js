export default function JsAPI() {
  const codeJs = `import { 
  ALink,
} from "aloha-vue";
    
export default {
  name: "PageLinkDisabled",
  components: {
    ALink,
  },
};`;

  return {
    codeJs,
  };
}
