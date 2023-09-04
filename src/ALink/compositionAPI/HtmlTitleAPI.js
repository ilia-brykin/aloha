import {
  computed,
  toRef,
} from "vue";

export default function HtmlTitleAPI(props, {
  tagLocal = computed(() => ""),
}) {
  const isTitleHtml = toRef(props, "isTitleHtml");
  const titleAttributes = toRef(props, "titleAttributes");
  const titlePlacement = toRef(props, "titlePlacement");

  const htmlTitleAttributes = computed(() => {
    if (isTitleHtml.value) {
      return {
        tag: tagLocal.value,
        placement: titlePlacement.value,
        ...titleAttributes.value,
      };
    }
    return {};
  });

  return {
    htmlTitleAttributes,
  };
}
