export default function PropsAPI() {
  const dataProps = [
    {
      name: "children",
      description: "_A_UI_PROPS_CHILDREN_DESCRIPTION_",
      type: "Array",
      default: "() => []",
      required: false,
    },
    {
      name: "class-column",
      description: "_A_UI_PROPS_CLASS_COLUMN_DESCRIPTION_",
      type: "String / Object",
      default: "a_column a_column_12",
      required: false,
    },
    {
      name: "class-columns",
      description: "_A_UI_PROPS_CLASS_COLUMNS_DESCRIPTION_",
      type: "String / Object",
      default: "a_columns a_columns_count_12",
      required: false,
    },
    {
      name: "errors-all",
      description: "_A_UI_PROPS_ERRORS_ALL_DESCRIPTION_",
      type: "Object",
      default: "() => ({})",
      required: false,
    },
  ];

  return {
    dataProps,
  };
}
