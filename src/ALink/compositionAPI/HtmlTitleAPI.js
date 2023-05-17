import {
  computed,
  toRef,
} from "vue";

export default function HtmlTitleAPI(props, {
  tagLocal = computed(() => ""),
}) {
  const isTitleHtml = toRef(props, "isTitleHtml");
  const titlePlacement = toRef(props, "titlePlacement");

  const htmlTitleAttributes = computed(() => {
    if (isTitleHtml.value) {
      return {
        tag: tagLocal.value,
        placement: titlePlacement.value,
      };
    }
    return {};
  });

  return {
    htmlTitleAttributes,
  };
}
