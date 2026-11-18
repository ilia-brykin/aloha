export default function PropsAPI() {
  const dataProps = [
    {
      name: "animated",
      description: "_A_SKELETON_PROPS_ANIMATED_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "avatar",
      description: "_A_SKELETON_PROPS_AVATAR_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "count",
      description: "_A_SKELETON_PROPS_COUNT_",
      type: "Number",
      default: "1",
      required: false,
    },
    {
      name: "extra",
      description: "_A_SKELETON_PROPS_EXTRA_",
      type: "Object",
      default: "undefined",
      required: false,
    },
    {
      name: "loading",
      description: "_A_SKELETON_PROPS_LOADING_",
      type: "Boolean",
      default: "true",
      required: false,
    },
    {
      name: "rows",
      description: "_A_SKELETON_PROPS_ROWS_",
      type: "Number",
      default: "3",
      required: false,
    },
    {
      name: "tag",
      description: "_A_SKELETON_PROPS_TAG_",
      type: "String",
      default: "\"div\"",
      required: false,
    },
    {
      name: "text",
      description: "_A_SKELETON_PROPS_TEXT_",
      type: "String",
      default: "\"_A_SKELETON_LOADING_\"",
      required: false,
    },
    {
      name: "throttle",
      description: "_A_SKELETON_PROPS_THROTTLE_",
      type: "Number",
      default: "0",
      required: false,
    },
    {
      name: "title",
      description: "_A_SKELETON_PROPS_TITLE_",
      type: "Boolean",
      default: "true",
      required: false,
    },
  ];

  const dataPropsItem = [
    {
      name: "height",
      description: "_A_SKELETON_ITEM_PROPS_HEIGHT_",
      type: "String | Number",
      default: "undefined",
      required: false,
    },
    {
      name: "tag",
      description: "_A_SKELETON_ITEM_PROPS_TAG_",
      type: "String",
      default: "\"span\"",
      required: false,
    },
    {
      name: "variant",
      description: "_A_SKELETON_ITEM_PROPS_VARIANT_",
      type: "String",
      default: "\"text\"",
      required: false,
    },
    {
      name: "width",
      description: "_A_SKELETON_ITEM_PROPS_WIDTH_",
      type: "String | Number",
      default: "undefined",
      required: false,
    },
  ];

  return {
    dataProps,
    dataPropsItem,
  };
}
