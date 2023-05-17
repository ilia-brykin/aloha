import {
  computed,
  toRef,
} from "vue";

export default function AriaLabelHiddenAPI(props) {
  const ariLabel = toRef(props, "ariLabel");

  const attributesAriaLabelHidden = computed(() => {
    if (ariLabel.value) {
      return {
        ariaLabel: ariLabel.value,
      };
    }
    return {
      ariaHidden: true,
      ariaLabel: "aloha"
    };
  });

  return {
    attributesAriaLabelHidden,
  };
}
