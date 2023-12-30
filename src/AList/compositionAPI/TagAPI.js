import {
  computed,
  toRef,
} from "vue";

export default function TagAPI(props) {
  const tag = toRef(props, "tag");
  const isHtml = toRef(props, "isHtml");

  const tagLocal = computed(() => {
    if (!isHtml.value &&
      (tag.value === "ul" ||
        tag.value === "ol")) {
      return "span";
    }
    return tag.value;
  });

  return {
    tagLocal,
  };
}
