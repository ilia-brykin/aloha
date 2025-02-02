export default function PropsAPI() {
  const dataProps = [
    {
      name: "active-tab-id",
      description: "_A_TABS_PROPS_ACTIVE_TAB_ID_DESCRIPTION_",
      type: "String / Number",
      default: undefined,
      required: false,
    },
    {
      name: "data",
      description: "_A_TABS_PROPS_DATA_DESCRIPTION_",
      type: "Array",
      default: undefined,
      required: true,
    },
    {
      name: "disabled",
      description: "_A_TABS_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_GLOBAL_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "() => uniqueId(\"a_tabs_\")",
      required: false,
    },
    {
      name: "is-boxed",
      description: "_A_TABS_PROPS_IS_BOXED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "is-change-outside",
      description: "_A_TABS_PROPS_IS_CHANGE_OUTSIDE_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "is-title-html",
      description: "_A_GLOBAL_PROPS_IS_TITLE_HTML_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "is-vertical",
      description: "_A_TABS_PROPS_IS_VERTICAL_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "key-active",
      description: "_A_TABS_PROPS_KEY_ACTIVE_DESCRIPTION_",
      type: "String",
      default: "active",
      required: false,
    },
    {
      name: "key-content",
      description: "_A_TABS_PROPS_KEY_CONTENT_DESCRIPTION_",
      type: "String",
      default: "content",
      required: false,
    },
    {
      name: "key-disabled",
      description: "_A_TABS_PROPS_KEY_DISABLED_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-id",
      description: "_A_TABS_PROPS_KEY_ID_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "key-label",
      description: "_A_TABS_PROPS_KEY_LABEL_DESCRIPTION_",
      type: "String",
      default: "label",
      required: false,
    },
    {
      name: "key-title",
      description: "_A_TABS_PROPS_KEY_TITLE_DESCRIPTION_",
      type: "String",
      default: "title",
      required: false,
    },
    {
      name: "title-placement",
      description: "_A_GLOBAL_PROPS_TITLE_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "top",
      required: false,
    },

  ];

  return {
    dataProps,
  };
}
