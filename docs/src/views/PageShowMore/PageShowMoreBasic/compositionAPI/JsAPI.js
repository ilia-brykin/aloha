export default function JsAPI() {
  const codeJs = `import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreBasic",
  components: {
    AShowMore,
  },
};`;

  return {
    codeJs,
  };
}
