import {
  computed,
  toRef,
} from "vue";

export default function AriaLabelHiddenAPI(props) {
  const ariLabel = toRef(props, "ariLabel");

  const attributesAriaLabelHidden = computed(() => {
    if (ariLabel.value) {
      return {
        "aria-label": ariLabel.value,
      };
    }
    return {
      "aria-hidden": true,
    };
  });

  return {
    attributesAriaLabelHidden,
  };
}
