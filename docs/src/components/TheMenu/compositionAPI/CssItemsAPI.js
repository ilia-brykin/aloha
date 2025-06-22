export default function CssItemsAPI() {
  const cssItems = {
    id: "css",
    label: "CSS",
    icon: "FiletypeCss",
    class: "test_menu_css",
    children: [
      {
        id: "PageBadge",
        label: "Badge",
        class: "test_menu_badge",
        to: {
          name: "PageBadge",
        },
      },
      {
        id: "PageColumns",
        label: "Columns",
        class: "test_menu_columns",
        to: {
          name: "PageColumns",
        },
      },
      {
        id: "PageText",
        label: "Text",
        class: "test_menu_text",
        to: {
          name: "PageText",
        },
      },
    ],
  };

  return {
    cssItems,
  };
}
