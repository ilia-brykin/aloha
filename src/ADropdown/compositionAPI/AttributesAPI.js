import {
  computed,
  ref,
  toRef,
} from "vue";

import ARemPxAPI from "../../compositionAPI/ARemPxAPI";

import {
  assign,
  cloneDeep,
} from "lodash-es";

export default function AttributesAPI(props, {
  eventsMenu = computed(() => ({})),
  isMenu = computed(() => false),
  statusExpanded = ref(false),
  wasOpened = ref(false),
}) {
  const buttonAttributes = toRef(props, "buttonAttributes");
  const buttonTag = toRef(props, "buttonTag");
  const disabled = toRef(props, "disabled");
  const dropdownAttributes = toRef(props, "dropdownAttributes");
  const dropdownClass = toRef(props, "dropdownClass");
  const id = toRef(props, "id");
  const menuWidth = toRef(props, "menuWidth");
  const persist = toRef(props, "persist");
  const readonly = toRef(props, "readonly");
  const useRem = toRef(props, "useRem");

  const {
    scalePxWithRem,
  } = ARemPxAPI();

  const idLocal = computed(() => {
    return buttonAttributes.value.id || id.value;
  });

  const isMenuRendered = computed(() => {
    return statusExpanded.value || (persist.value && wasOpened.value);
  });

  const menuId = computed(() => {
    return `${ idLocal.value }_menu`;
  });

  const buttonTagLocal = computed(() => {
    if (readonly.value) {
      return "span";
    }
    return buttonTag.value;
  });

  const buttonAttributesLocal = computed(() => {
    const BUTTON_ATTRIBUTES = cloneDeep(buttonAttributes.value);
    if (readonly.value) {
      return BUTTON_ATTRIBUTES;
    }

    // aria-haspopup "menu" only for a real menu (actions); own content is a disclosure with aria-expanded
    if (isMenu.value) {
      BUTTON_ATTRIBUTES["aria-haspopup"] = "menu";
    }
    BUTTON_ATTRIBUTES["aria-expanded"] = statusExpanded.value ? "true" : "false";
    if (isMenuRendered.value) {
      BUTTON_ATTRIBUTES["aria-controls"] = menuId.value;
    }

    if (buttonTag.value === "button") {
      BUTTON_ATTRIBUTES.type = BUTTON_ATTRIBUTES.type || "button";
    }
    return BUTTON_ATTRIBUTES;
  });

  const buttonAttributesDisabled = computed(() => {
    const ATTRIBUTES = {};
    if (disabled.value) {
      if (buttonTag.value === "button") {
        ATTRIBUTES.disabled = true;
      } else if (buttonTag.value === "a") {
        ATTRIBUTES["aria-disabled"] = "true";
      }
    }

    return ATTRIBUTES;
  });

  const dropdownAttributesLocal = computed(() => {
    const DROPDOWN_ATTRIBUTES = cloneDeep(dropdownAttributes.value);
    DROPDOWN_ATTRIBUTES.class = ["a_dropdown__menu", dropdownClass.value, {
      a_dropdown__menu_show: statusExpanded.value,
    }];
    if (menuWidth.value) {
      if (useRem.value) {
        DROPDOWN_ATTRIBUTES.style = `width: ${ scalePxWithRem(menuWidth.value) }px`;
      } else {
        DROPDOWN_ATTRIBUTES.style = `width: ${ menuWidth.value }px`;
      }
    }
    return assign({}, DROPDOWN_ATTRIBUTES, eventsMenu.value);
  });


  return {
    idLocal,
    buttonAttributesDisabled,
    buttonAttributesLocal,
    buttonTagLocal,
    dropdownAttributesLocal,
    isMenuRendered,
    menuId,
  };
}
