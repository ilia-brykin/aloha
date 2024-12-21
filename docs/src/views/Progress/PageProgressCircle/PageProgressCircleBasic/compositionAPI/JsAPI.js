export default function JsAPI() {
  const codeJs = `import { 
  AProgressCircle,
} from "aloha-vue";";
    
export default {
  name: "PageProgressBasic",
  components: {
    AProgressCircle,
  },
};`;

  return {
    codeJs,
  };
}
