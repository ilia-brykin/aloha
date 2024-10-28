import {
  computed,
  ref,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

export default function MenuAttributesAPI(props, {
  isMenuOpen = ref(false),
  toggleMenu = () => {},
}) {
  const isBlockerClickable = toRef(props, "isBlockerClickable");

  const {
    isMobileWidth,
  } = AMobileAPI();

  const attributesMobile = computed(() => {
    if (isMobileWidth.value) {
      return {
        role: "dialog",
        ariaModal: true,
      };
    }

    return {};
  });

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
    attributesMobile,
  };
}
