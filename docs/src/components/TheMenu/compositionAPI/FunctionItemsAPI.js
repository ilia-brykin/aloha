export default function FunctionItemsAPI() {
  const functionItems = {
    id: "functions",
    label: "Functions",
    icon: "Code",
    class: "test_menu_functions",
    children: [
      {
        id: "functions_filters",
        label: "Filters",
        class: "test_menu_functions_filters",
        children: [
          {
            id: "PageFilterBoolean",
            label: "filterBoolean",
            class: "test_menu_filter_boolean",
            to: {
              name: "PageFilterBoolean",
            },
          },
          {
            id: "PageFilterCapitalize",
            label: "filterCapitalize",
            class: "test_menu_filter_capitalize",
            to: {
              name: "PageFilterCapitalize",
            },
          },
          {
            id: "PageFilterCurrency",
            label: "filterCurrency",
            class: "test_menu_filter_currency",
            to: {
              name: "PageFilterCurrency",
            },
          },
          {
            id: "PageFilterDate",
            label: "filterDate",
            class: "test_menu_filter_date",
            to: {
              name: "PageFilterDate",
            },
          },
          {
            id: "PageFilterDefaultForEmpty",
            label: "filterDefaultForEmpty",
            class: "test_menu_filter_default_for_empty",
            to: {
              name: "PageFilterDefaultForEmpty",
            },
          },
          {
            id: "PageFilterEmail",
            label: "filterEmail",
            class: "test_menu_filter_email",
            to: {
              name: "PageFilterEmail",
            },
          },
          {
            id: "PageFilterEscapeHTML",
            label: "filterEscapeHTML",
            class: "test_menu_filter_escape_html",
            to: {
              name: "PageFilterEscapeHTML",
            },
          },
          {
            id: "PageFilterFileSize",
            label: "filterFileSize",
            class: "test_menu_filter_filesize",
            to: {
              name: "PageFilterFileSize",
            },
          },
          {
            id: "PageFilterFloat",
            label: "filterFloat",
            class: "test_menu_filter_float",
            to: {
              name: "PageFilterFloat",
            },
          },
          {
            id: "PageFilterJson",
            label: "filterJson",
            class: "test_menu_filter_json",
            to: {
              name: "PageFilterJson",
            },
          },
          {
            id: "PageFilterKeyValue",
            label: "filterKeyValue",
            class: "test_menu_filter_key_value",
            to: {
              name: "PageFilterKeyValue",
            },
          },
          {
            id: "PageFilterLimitTo",
            label: "filterLimitTo",
            class: "test_menu_filter_limit_to",
            to: {
              name: "PageFilterLimitTo",
            },
          },
          {
            id: "PageFilterLink",
            label: "filterLink",
            class: "test_menu_filter_link",
            to: {
              name: "PageFilterLink",
            },
          },
          {
            id: "PageFilterList",
            label: "filterList",
            class: "test_menu_filter_list",
            to: {
              name: "PageFilterList",
            },
          },
          {
            id: "PageFilterLowerCase",
            label: "filterLowerCase",
            class: "test_menu_filter_lowercase",
            to: {
              name: "PageFilterLowerCase",
            },
          },
          {
            id: "PageFilterMask",
            label: "filterMask",
            class: "test_menu_filter_mask",
            to: {
              name: "PageFilterMask",
            },
          },
          {
            id: "PageFilterPropertyByValue",
            label: "filterPropertyByValue",
            class: "test_menu_filter_property_by_value",
            to: {
              name: "PageFilterPropertyByValue",
            },
          },
          {
            id: "PageFilterSearchHighlight",
            label: "filterSearchHighlight",
            class: "test_menu_filter_search_highlight",
            to: {
              name: "PageFilterSearchHighlight",
            },
          },
          {
            id: "PageFilterUpperCase",
            label: "filterUpperCase",
            class: "test_menu_filter_uppercase",
            to: {
              name: "PageFilterUpperCase",
            },
          },
        ],
      },
      {
        id: "functions_utils",
        label: "Utils",
        class: "test_menu_functions_utils",
        children: [
          {
            id: "PageUtilsGetTotalNestedCount",
            label: "getTotalNestedCount",
            class: "test_menu_utils_get_total_nested_count",
            to: {
              name: "PageUtilsGetTotalNestedCount",
            },
          },
          {
            id: "PageUtilsIsArrayOfArrays",
            label: "isArrayOfArrays",
            class: "test_menu_utils_is_array_of_arrays",
            to: {
              name: "PageUtilsIsArrayOfArrays",
            },
          },
          {
            id: "PageUtilsIsArrayOfStrings",
            label: "isArrayOfStrings",
            class: "test_menu_utils_is_array_of_string",
            to: {
              name: "PageUtilsIsArrayOfStrings",
            },
          },
        ],
      },
      {
        id: "functions_utils_math",
        label: "Utils math",
        class: "test_menu_functions_utils_math",
        children: [
          {
            id: "PageUtilsMathIsEven",
            label: "isEven",
            class: "test_menu_is_even",
            to: {
              name: "PageUtilsMathIsEven",
            },
          },
          {
            id: "PageUtilsMathIsOdd",
            label: "isOdd",
            class: "test_menu_is_odd",
            to: {
              name: "PageUtilsMathIsOdd",
            },
          },
        ],
      },
    ],
  };

  return {
    functionItems,
  };
}
