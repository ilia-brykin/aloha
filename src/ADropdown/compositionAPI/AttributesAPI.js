import {
  computed,
  ref,
  toRef,
} from "vue";

import {
  cloneDeep,
} from "lodash-es";

export default function AttributesAPI(props, {
  statusExpanded = ref(false),
  onToggle = () => {},
  onKeydown = () => {},
}) {
  const buttonAttributes = toRef(props, "buttonAttributes");
  const buttonClass = toRef(props, "buttonClass");
  const buttonTag = toRef(props, "buttonTag");
  const disabled = toRef(props, "disabled");
  const dropdownAttributes = toRef(props, "dropdownAttributes");
  const dropdownClass = toRef(props, "dropdownClass");
  const id = toRef(props, "id");
  const isRenderDefault = toRef(props, "isRenderDefault");
  const menuWidth = toRef(props, "menuWidth");

  const idLocal = computed(() => {
    return buttonAttributes.value.id || id.value;
  });

  const buttonAttributesLocal = computed(() => {
    const BUTTON_ATTRIBUTES = cloneDeep(buttonAttributes.value);
    BUTTON_ATTRIBUTES.id = idLocal.value;
    BUTTON_ATTRIBUTES.ref = "dropdownButtonRef";
    BUTTON_ATTRIBUTES["aria-haspopup"] = "true";
    BUTTON_ATTRIBUTES["aria-expanded"] = statusExpanded.value;
    if (buttonClass.value) {
      BUTTON_ATTRIBUTES.class = buttonClass.value;
    }
    BUTTON_ATTRIBUTES.onClick = onToggle;
    BUTTON_ATTRIBUTES.onKeydown = onKeydown;

    if (buttonTag.value === "button") {
      BUTTON_ATTRIBUTES.type = BUTTON_ATTRIBUTES.type || "button";
    }
    if (disabled.value) {
      if (buttonTag.value === "button") {
        BUTTON_ATTRIBUTES.disabled = true;
      } else if (buttonTag.value === "a") {
        BUTTON_ATTRIBUTES["aria-disabled"] = "true";
      }
    }
    return BUTTON_ATTRIBUTES;
  });

  const dropdownAttributesLocal = computed(() => {
    const DROPDOWN_ATTRIBUTES = cloneDeep(dropdownAttributes.value);
    DROPDOWN_ATTRIBUTES.ref = "dropdownRef";
    DROPDOWN_ATTRIBUTES["aria-labelledby"] = idLocal.value;
    DROPDOWN_ATTRIBUTES.class = ["a_dropdown__menu", dropdownClass.value, {
      a_dropdown__menu_show: statusExpanded.value,
    }];
    if (menuWidth.value) {
      DROPDOWN_ATTRIBUTES.style = `width: ${ menuWidth.value }px`;
    }
    return DROPDOWN_ATTRIBUTES;
  });

  const isMenuRendered = computed(() => {
    return isRenderDefault.value || statusExpanded.value;
  });

  return {
    buttonAttributesLocal,
    dropdownAttributesLocal,
    isMenuRendered,
  };
}
