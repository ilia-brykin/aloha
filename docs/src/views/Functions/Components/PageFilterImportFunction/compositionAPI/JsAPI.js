import {
  computed,
  toRef,
} from "vue";

export default function JsAPI(props) {
  const functionName = toRef(props, "functionName");
  const typeImport = toRef(props, "typeImport");

  const codeJs = computed(() => {
    if (typeImport.value === "filters") {
      return `import ${ functionName.value } from "aloha-vue/src/filters/${ functionName.value }";`;
    }
    if (typeImport.value === "utils") {
      return `import { ${ functionName.value } } from "aloha-vue/src/utils/utils";`;
    }
    if (typeImport.value === "utilsMath") {
      return `import { ${ functionName.value } } from "aloha-vue/src/utils/utilsMath";`;
    }
    return "";
  });

  return {
    codeJs,
  };
}
