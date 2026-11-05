export default function PropsAPI() {
  const dataProps = [
    {
      name: "class-column-default",
      description: "_A_FORM_PROPS_CLASS_COLUMN_DEFAULT_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
    {
      name: "class-columns",
      description: "_A_FORM_PROPS_CLASS_COLUMNS_DESCRIPTION_",
      type: "String / Object",
      default: undefined,
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
