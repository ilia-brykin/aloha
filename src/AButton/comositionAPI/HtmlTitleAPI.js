import {
  computed,
  ref,
  toRef,
} from "vue";

export default function HtmlTitleAPI(props) {
  const isTitleHtml = toRef(props, "isTitleHtml");
  const tag = toRef(props, "tag");
  const titleAttributes = toRef(props, "titleAttributes");
  const titlePlacement = toRef(props, "titlePlacement");

  const buttonRef = ref(undefined);

  const htmlTitleAttributes = computed(() => {
    if (isTitleHtml.value) {
      return {
        tag: tag.value,
        placement: titlePlacement.value,
        ...titleAttributes.value,
      };
    }
    return {};
  });


  return {
    buttonRef,
    htmlTitleAttributes,
  };
}
