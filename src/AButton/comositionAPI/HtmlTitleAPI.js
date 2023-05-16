import {
  computed,
  toRef,
} from "vue";

export default function HtmlTitleAPI(props) {
  const isTitleHtml = toRef(props, "isTitleHtml");
  const tag = toRef(props, "tag");
  const titlePlacement = toRef(props, "titlePlacement");

  const htmlTitleAttributes = computed(() => {
    if (isTitleHtml.value) {
      return {
        tag: tag.value,
        placement: titlePlacement.value,
      };
    }
    return {};
  });

  return {
    htmlTitleAttributes,
  };
}
