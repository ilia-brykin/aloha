import {
  computed,
  toRef,
} from "vue";

export default function AMenuBlockerClickAPI(props, {
  closeAllPanels = () => {},
}) {
  const isBlockerClickable = toRef(props, "isBlockerClickable");

  const clickBlocker = () => {
    closeAllPanels();
  };

  const attributesBlockerClick = computed(() => {
    const ATTRIBUTES = {};
    if (isBlockerClickable.value) {
      ATTRIBUTES.onClick = clickBlocker;
      ATTRIBUTES.class = "a_menu_2__blocker a_menu_2_clickable";
    }
    return ATTRIBUTES;
  });

  return {
    attributesBlockerClick,
  };
}
