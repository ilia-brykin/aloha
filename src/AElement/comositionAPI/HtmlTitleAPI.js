import {
  computed,
  ref,
  toRef,
} from "vue";

export default function HtmlTitleAPI(props, {
  tagLocal = computed(() => ""),
}) {
  const isTitleHtml = toRef(props, "isTitleHtml");
  const titleAttributes = toRef(props, "titleAttributes");
  const titlePlacement = toRef(props, "titlePlacement");

  const elementRef = ref(undefined);

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
    elementRef,
    htmlTitleAttributes,
  };
}
