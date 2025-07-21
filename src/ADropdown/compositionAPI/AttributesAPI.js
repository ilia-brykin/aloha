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
  const useRem = toRef(props, "useRem");

  const {
    scalePxWithRem,
  } = ARemPxAPI();

  const idLocal = computed(() => {
    return buttonAttributes.value.id || id.value;
  });

  const buttonAttributesLocal = computed(() => {
    const BUTTON_ATTRIBUTES = cloneDeep(buttonAttributes.value);
    BUTTON_ATTRIBUTES["aria-haspopup"] = "true";
    BUTTON_ATTRIBUTES["aria-expanded"] = statusExpanded.value;

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
        ATTRIBUTES.ariaDisabled = true;
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

  const isMenuRendered = computed(() => {
    return statusExpanded.value || (persist.value && wasOpened.value);
  });

  return {
    idLocal,
    buttonAttributesDisabled,
    buttonAttributesLocal,
    dropdownAttributesLocal,
    isMenuRendered,
  };
}
