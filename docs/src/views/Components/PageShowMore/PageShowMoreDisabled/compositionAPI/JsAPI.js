export default function JsAPI() {
  const codeJs = `import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreDisabled",
  components: {
    AShowMore,
  },
};`;

  return {
    codeJs,
  };
}
