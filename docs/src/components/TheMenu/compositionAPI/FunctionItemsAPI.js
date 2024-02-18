export default function FunctionItemsAPI() {
  const functionItems = {
    id: "functions",
    label: "Functions",
    icon: "Code",
    children: [
      {
        id: "functions_filters",
        label: "Filters",
        children: [
          {
            id: "PageFilterBoolean",
            label: "filterBoolean",
            to: {
              name: "PageFilterBoolean",
            },
          },
          {
            id: "PageFilterCurrency",
            label: "filterCurrency",
            to: {
              name: "PageFilterCurrency",
            },
          },
          {
            id: "PageFilterDate",
            label: "filterDate",
            to: {
              name: "PageFilterDate",
            },
          },
          {
            id: "PageFilterDefaultForEmpty",
            label: "filterDefaultForEmpty",
            to: {
              name: "PageFilterDefaultForEmpty",
            },
          },
          {
            id: "PageFilterEmail",
            label: "filterEmail",
            to: {
              name: "PageFilterEmail",
            },
          },
          {
            id: "PageFilterFileSize",
            label: "filterFileSize",
            to: {
              name: "PageFilterFileSize",
            },
          },
          {
            id: "PageFilterFloat",
            label: "filterFloat",
            to: {
              name: "PageFilterFloat",
            },
          },
          {
            id: "PageFilterJson",
            label: "filterJson",
            to: {
              name: "PageFilterJson",
            },
          },
          {
            id: "PageFilterKeyValue",
            label: "filterKeyValue",
            to: {
              name: "PageFilterKeyValue",
            },
          },
          {
            id: "PageFilterLimitTo",
            label: "filterLimitTo",
            to: {
              name: "PageFilterLimitTo",
            },
          },
          {
            id: "PageFilterLink",
            label: "filterLink",
            to: {
              name: "PageFilterLink",
            },
          },
          {
            id: "PageFilterList",
            label: "filterList",
            to: {
              name: "PageFilterList",
            },
          },
          {
            id: "PageFilterPropertyByValue",
            label: "filterPropertyByValue",
            to: {
              name: "PageFilterPropertyByValue",
            },
          },
          {
            id: "PageFilterSearchHighlight",
            label: "filterSearchHighlight",
            to: {
              name: "PageFilterSearchHighlight",
            },
          },
        ],
      },
      {
        id: "functions_utils_math",
        label: "Utils math",
        children: [
          {
            id: "PageUtilsMathIsEven",
            label: "isEven",
            to: {
              name: "PageUtilsMathIsEven",
            },
          },
          {
            id: "PageUtilsMathIsOdd",
            label: "isOdd",
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
