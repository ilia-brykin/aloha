import {
  computed,
  toRef,
} from "vue";

export default function BodyHtmlAPI(props) {
  const bodyHtml = toRef(props, "bodyHtml");
  const id = toRef(props, "id");

  const bodyHtmlId = computed(() => {
    if (!bodyHtml.value) {
      return undefined;
    }

    return `${ id.value }_body_html`;
  });

  return {
    bodyHtmlId,
  };
}
