import {
  computed,
  toRef,
} from "vue";

export default function JsAPI(props) {
  const functionDescription = toRef(props, "functionDescription");

  const codeJs = computed(() => {
    return `${ functionDescription.value };`;
  });

  return {
    codeJs,
  };
}
