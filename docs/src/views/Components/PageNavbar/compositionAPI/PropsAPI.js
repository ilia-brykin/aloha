export default function PropsAPI() {
  const dataProps = [
    {
      name: "always-translate",
      description: "_A_TRANSLATION_PROPS_ALWAYS_TRANSLATE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "close-delay",
      description: "_A_NAVBAR_PROPS_CLOSE_DELAY_DESCRIPTION_",
      type: "Number",
      default: "200",
      required: false,
    },
    {
      name: "data",
      description: "_A_NAVBAR_PROPS_DATA_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "drawer-placement",
      description: "_A_NAVBAR_PROPS_DRAWER_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "\"left\"",
      required: false,
    },
    {
      name: "extra",
      description: "_A_GLOBAL_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_NAVBAR_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "() => uniqueId(\"a_navbar_\")",
      required: false,
    },
    {
      name: "is-close-by-button-invisible-in-viewport",
      description: "_A_GLOBAL_PROPS_IS_CLOSE_BY_BUTTON_INVISIBLE_IN_VIEWPORT_DESCRIPTION_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "is-end-in-drawer",
      description: "_A_NAVBAR_PROPS_IS_END_IN_DRAWER_DESCRIPTION_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "is-mobile-menu",
      description: "_A_NAVBAR_PROPS_IS_MOBILE_MENU_DESCRIPTION_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "is-sticky",
      description: "_A_NAVBAR_PROPS_IS_STICKY_DESCRIPTION_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "key-children",
      description: "_A_NAVBAR_PROPS_KEY_CHILDREN_DESCRIPTION_",
      type: "String",
      default: "\"children\"",
      required: false,
    },
    {
      name: "key-id",
      description: "_A_NAVBAR_PROPS_KEY_ID_DESCRIPTION_",
      type: "String",
      default: "\"id\"",
      required: false,
    },
    {
      name: "key-label",
      description: "_A_NAVBAR_PROPS_KEY_LABEL_DESCRIPTION_",
      type: "String",
      default: "\"label\"",
      required: false,
    },
    {
      name: "label",
      description: "_A_NAVBAR_PROPS_LABEL_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "open-delay",
      description: "_A_NAVBAR_PROPS_OPEN_DELAY_DESCRIPTION_",
      type: "Number",
      default: "100",
      required: false,
    },
    {
      name: "overflow",
      description: "_A_NAVBAR_PROPS_OVERFLOW_DESCRIPTION_",
      type: "String",
      default: "\"more\"",
      required: false,
    },
    {
      name: "texts",
      description: "_A_NAVBAR_PROPS_TEXTS_DESCRIPTION_",
      type: "Object",
      default: "{}",
      required: false,
    },
    {
      name: "trigger",
      description: "_A_NAVBAR_PROPS_TRIGGER_DESCRIPTION_",
      type: "String",
      default: "\"click\"",
      required: false,
    },
  ];

  const dataEvents = [
    { name: "navigate", type: "Function", description: "_A_NAVBAR_EVENTS_NAVIGATE_DESCRIPTION_" },
  ];

  const dataSlots = [
    { name: "end", description: "_A_NAVBAR_SLOTS_END_DESCRIPTION_" },
    { name: "item", description: "_A_NAVBAR_SLOTS_ITEM_DESCRIPTION_" },
    { name: "start", description: "_A_NAVBAR_SLOTS_START_DESCRIPTION_" },
  ];

  const dataTranslate = [
    "_A_NAVBAR_DRAWER_",
    "_A_NAVBAR_MORE_",
    "_A_NAVBAR_NAVIGATION_",
    "_A_NAVBAR_SUBMENU_",
    "_A_NAVBAR_TOGGLE_",
  ];

  return {
    dataEvents,
    dataProps,
    dataSlots,
    dataTranslate,
  };
}
