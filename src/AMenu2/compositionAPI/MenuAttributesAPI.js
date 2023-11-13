import {
  computed,
  ref,
  toRef,
} from "vue";

export default function MenuAttributesAPI(props, {
  isMenuOpen = ref(false),
  toggleMenu = () => {},
}) {
  const isBlockerClickable = toRef(props, "isBlockerClickable");

  const attributesMenuClick = computed(() => {
    const ATTRIBUTES = {};
    if (isBlockerClickable.value &&
      !isMenuOpen.value) {
      ATTRIBUTES.onClick = () => toggleMenu({ isOpen: true });
      ATTRIBUTES.class = "a_menu_2 a_menu_2_clickable";
    }
    return ATTRIBUTES;
  });

  return {
    attributesMenuClick,
  };
}
