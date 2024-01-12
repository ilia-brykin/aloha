import {
  computed,
  toRef,
} from "vue";

export default function JsAPI(props) {
  const functionName = toRef(props, "functionName");

  const codeJs = computed(() => {
    return `import AFiltersAPI from "aloha-vue/src/compositionAPI/AFiltersAPI";

export default {
  setup() {  
    const {
      ${ functionName.value },
    } = AFiltersAPI();
  },
};`;
  });

  return {
    codeJs,
  };
}
