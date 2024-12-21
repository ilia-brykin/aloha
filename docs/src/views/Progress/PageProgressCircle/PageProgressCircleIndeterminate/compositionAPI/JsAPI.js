export default function JsAPI() {
  const codeJs = `import { 
  AProgressCircle,
} from "aloha-vue";";
    
export default {
  name: "PageProgressCircleIndeterminate",
  components: {
    AProgressCircle,
  },
};`;

  return {
    codeJs,
  };
}
