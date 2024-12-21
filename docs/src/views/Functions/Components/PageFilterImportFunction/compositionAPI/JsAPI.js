import {
  computed,
  toRef,
} from "vue";

export default function JsAPI(props) {
  const functionName = toRef(props, "functionName");
  const typeImport = toRef(props, "typeImport");

  const codeJs = computed(() => {
    if (typeImport.value === "filters") {
      return `import { ${ functionName.value } } from "aloha-vue";`;
    }
    if (typeImport.value === "utils") {
      return `import { ${ functionName.value } } from "aloha-vue";`;
    }
    if (typeImport.value === "utilsMath") {
      return `import { ${ functionName.value } } from "aloha-vue";`;
    }
    return "";
  });

  return {
    codeJs,
  };
}
