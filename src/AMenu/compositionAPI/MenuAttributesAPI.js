import {
  computed,
  ref,
  toRef,
} from "vue";

import AMobileAPI from "../../compositionAPI/AMobileAPI";

export default function MenuAttributesAPI(props, {
  isMenuOpen = ref(false),
  toggleMenu = () => {
  },
}) {
  const isBlockerClickable = toRef(props, "isBlockerClickable");
  const menuId = toRef(props, "menuId");

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

  const headerId = computed(() => {
    return `${ menuId.value }_header`;
  });

  const attributesMenuClick = computed(() => {
    const ATTRIBUTES = {};
    if (isBlockerClickable.value &&
      !isMenuOpen.value) {
      ATTRIBUTES.onClick = () => toggleMenu({ isOpen: true });
      ATTRIBUTES.class = "a_menu a_menu_clickable";
    }
    return ATTRIBUTES;
  });

  return {
    attributesMenuClick,
    attributesMobile,
    headerId,
  };
}
