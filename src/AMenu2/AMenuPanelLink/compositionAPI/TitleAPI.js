import {
  computed,
  toRef,
} from "vue";

export default function TitleAPI(props, {
  labelWithoutFilter = computed(() => ""),
}) {
  const item = toRef(props, "item");

  const isTitleHtml = computed(() => {
    return !!item.value.titleHtml;
  });

  const title = computed(() => {
    if (isTitleHtml.value) {
      return undefined;
    }
    return item.value.title || labelWithoutFilter.value;
  });

  return {
    isTitleHtml,
    title,
  };
}
