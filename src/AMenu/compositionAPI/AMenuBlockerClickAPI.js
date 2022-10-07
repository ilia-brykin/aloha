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
      ATTRIBUTES.class = "a_menu__blocker a_menu__blocker_clickable";
    }
    return ATTRIBUTES;
  });

  return {
    attributesBlockerClick,
  };
}
