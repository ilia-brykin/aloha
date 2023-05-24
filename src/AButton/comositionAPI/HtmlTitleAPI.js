import {
  computed,
  ref,
  toRef,
  watch,
} from "vue";

export default function HtmlTitleAPI(props) {
  const html = toRef(props, "html");
  const iconLeft = toRef(props, "iconLeft");
  const iconRight = toRef(props, "iconRight");
  const isTitleHtml = toRef(props, "isTitleHtml");
  const loading = toRef(props, "loading");
  const safeHtml = toRef(props, "safeHtml");
  const tag = toRef(props, "tag");
  const text = toRef(props, "text");
  const textAfter = toRef(props, "textAfter");
  const textBefore = toRef(props, "textBefore");
  const title = toRef(props, "title");
  const titlePlacement = toRef(props, "titlePlacement");

  const buttonRef = ref(undefined);

  const htmlTitleAttributes = computed(() => {
    if (isTitleHtml.value) {
      return {
        tag: tag.value,
        placement: titlePlacement.value,
      };
    }
    return {};
  });

  const watchHtmlTitleProperties = computed(() => {
    return [
      html.value,
      iconLeft.value,
      iconRight.value,
      loading.value,
      safeHtml.value,
      text.value,
      textAfter.value,
      textBefore.value,
      title.value,
      titlePlacement.value,
    ];
  });

  watch(watchHtmlTitleProperties, () => {
    if (isTitleHtml.value) {
      buttonRef.value?.updateTitle();
    }
  });

  return {
    buttonRef,
    htmlTitleAttributes,
  };
}
