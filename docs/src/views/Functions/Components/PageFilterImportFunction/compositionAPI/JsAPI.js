import {
  computed,
  toRef,
} from "vue";

export default function JsAPI(props) {
  const functionName = toRef(props, "functionName");

  const codeJs = computed(() => {
    return `import ${ functionName.value } from "aloha-vue/src/filters/${ functionName.value }";`;
  });

  return {
    codeJs,
  };
}
