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
    ],
  };

  return {
    cssItems,
  };
}
