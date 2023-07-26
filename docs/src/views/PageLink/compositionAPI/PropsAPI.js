export default function PropsAPI() {
  const dataProps = [
    {
      name: "attributes",
      description: "_A_LINK_PROPS_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "class",
      description: "_A_LINK_PROPS_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "disabled",
      description: "_A_LINK_PROPS_DISABLED_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "extra",
      description: "_A_LINK_PROPS_EXTRA_DESCRIPTION_",
      type: "Object",
      default: undefined,
      required: false,
    },
    {
      name: "href",
      description: "_A_LINK_PROPS_HREF_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "html",
      description: "_A_LINK_PROPS_HTML_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "html-screen-reader",
      description: "_A_LINK_PROPS_HTML_SCREEN_READER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "icon-attributes",
      description: "_A_LINK_PROPS_ICON_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
    {
      name: "icon-class",
      description: "_A_LINK_PROPS_ICON_CLASS_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "icon-left",
      description: "_A_LINK_PROPS_ICON_LEFT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "icon-right",
      description: "_A_LINK_PROPS_ICON_RIGHT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "icon-tag",
      description: "_A_LINK_PROPS_ICON_TAG_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "id",
      description: "_A_LINK_PROPS_ID_DESCRIPTION_",
      type: "String",
      default: "() => uniqueId(\"a_link_\")",
      required: false,
    },
    {
      name: "is-title-html",
      description: "_A_LINK_PROPS_IS_TITLE_HTML_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "loading",
      description: "_A_LINK_PROPS_LOADING_DESCRIPTION_",
      type: "Boolean",
      default: false,
      required: false,
    },
    {
      name: "loading-align",
      description: "_A_LINK_PROPS_LOADING_ALIGN_DESCRIPTION_",
      type: "String",
      default: "right",
      required: false,
      // validator: value => ["right", "left"].indexOf(value) !== -1,
    },
    {
      name: "loading-class",
      description: "_A_LINK_PROPS_LOADING_CLASS_DESCRIPTION_",
      type: "String / Object",
      default: "a_spinner_small",
      required: false,
    },
    {
      name: "safe-html",
      description: "_A_LINK_PROPS_SAFE_HTML_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "safe-html-screen-reader",
      description: "_A_LINK_PROPS_SAFE_HTML_SCREEN_READER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "target",
      description: "_A_LINK_PROPS_TARGET_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "text",
      description: "_A_LINK_PROPS_TEXT_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-after",
      description: "_A_LINK_PROPS_TEXT_AFTER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-aria-hidden",
      description: "_A_LINK_PROPS_TEXT_ARIA_HIDDEN_DESCRIPTION_",
      type: "Boolean",
      default: undefined,
      required: false,
    },
    {
      name: "text-before",
      description: "_A_LINK_PROPS_TEXT_BEFORE_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-class",
      description: "_A_LINK_PROPS_TEXT_CLASS_DESCRIPTION_",
      type: "String",
      default: undefined,
      required: false,
    },
    {
      name: "text-screen-reader",
      description: "_A_LINK_PROPS_TEXT_SCREEN_READER_DESCRIPTION_",
      type: "String / Number / Object",
      default: undefined,
      required: false,
    },
    {
      name: "text-tag",
      description: "_A_LINK_PROPS_TEXT_TAG_DESCRIPTION_",
      type: "String",
      default: "span",
      required: false,
    },
    {
      name: "title",
      description: "_A_LINK_PROPS_TITLE_DESCRIPTION_",
      type: "String / Number / Object / Array",
      default: undefined,
      required: false,
    },
    {
      name: "title-attributes",
      description: "_A_LINK_PROPS_TITLE_ATTRIBUTES_DESCRIPTION_",
      type: "Object",
      default: "{}",
      required: false,
    },
    {
      name: "title-placement",
      description: "_A_LINK_PROPS_TITLE_PLACEMENT_DESCRIPTION_",
      type: "String",
      default: "top",
      required: false,
      //  validator: value => ["top", "left", "bottom", "right"].indexOf(value) !== -1,
    },
    {
      name: "title-z-index",
      description: "_A_LINK_PROPS_TITLE_Z_INDEX_DESCRIPTION_",
      type: "String / Number",
      default: "auto",
      required: false,
    },
    {
      name: "to",
      description: "_A_LINK_PROPS_TO_DESCRIPTION_",
      type: "Object / String",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}