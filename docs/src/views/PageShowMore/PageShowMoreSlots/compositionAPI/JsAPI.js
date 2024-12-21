export default function JsAPI() {
  const codeJs = `import { 
  AShowMore,
} from "aloha-vue";
    
export default {
  name: "PageShowMoreSlots",
  components: {
    AShowMore,
  },
};`;

  return {
    codeJs,
  };
}
