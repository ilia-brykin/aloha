export default function PropsAPI() {
  const dataProps = [
    {
      name: "alt",
      description: "_A_AVATAR_PROPS_ALT_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "color",
      description: "_A_AVATAR_PROPS_COLOR_",
      type: "String",
      default: "\"auto\"",
      required: false,
    },
    {
      name: "decorative",
      description: "_A_AVATAR_PROPS_DECORATIVE_",
      type: "Boolean",
      default: "false",
      required: false,
    },
    {
      name: "icon",
      description: "_A_AVATAR_PROPS_ICON_",
      type: "String | Object",
      default: "undefined",
      required: false,
    },
    {
      name: "initials",
      description: "_A_AVATAR_PROPS_INITIALS_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "initialsLimit",
      description: "_A_AVATAR_PROPS_INITIALS_LIMIT_",
      type: "Number",
      default: "2",
      required: false,
    },
    {
      name: "name",
      description: "_A_AVATAR_PROPS_NAME_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "shape",
      description: "_A_AVATAR_PROPS_SHAPE_",
      type: "String",
      default: "\"circle\"",
      required: false,
    },
    {
      name: "size",
      description: "_A_AVATAR_PROPS_SIZE_",
      type: "String | Number",
      default: "\"medium\"",
      required: false,
    },
    {
      name: "src",
      description: "_A_AVATAR_PROPS_SRC_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "status",
      description: "_A_AVATAR_PROPS_STATUS_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "statusText",
      description: "_A_AVATAR_PROPS_STATUS_TEXT_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "tag",
      description: "_A_AVATAR_PROPS_TAG_",
      type: "String",
      default: "\"span\"",
      required: false,
    },
  ];

  const dataPropsGroup = [
    {
      name: "label",
      description: "_A_AVATAR_GROUP_PROPS_LABEL_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "max",
      description: "_A_AVATAR_GROUP_PROPS_MAX_",
      type: "Number",
      default: "undefined",
      required: false,
    },
    {
      name: "moreText",
      description: "_A_AVATAR_GROUP_PROPS_MORE_TEXT_",
      type: "String",
      default: "\"_A_AVATAR_GROUP_MORE_{{count}}_\"",
      required: false,
    },
    {
      name: "shape",
      description: "_A_AVATAR_GROUP_PROPS_SHAPE_",
      type: "String",
      default: "undefined",
      required: false,
    },
    {
      name: "size",
      description: "_A_AVATAR_GROUP_PROPS_SIZE_",
      type: "String | Number",
      default: "undefined",
      required: false,
    },
    {
      name: "tag",
      description: "_A_AVATAR_GROUP_PROPS_TAG_",
      type: "String",
      default: "\"div\"",
      required: false,
    },
  ];

  return {
    dataProps,
    dataPropsGroup,
  };
}
