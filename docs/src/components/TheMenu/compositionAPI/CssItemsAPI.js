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
        id: "PageColors",
        label: "Colors",
        class: "test_menu_colors",
        to: {
          name: "PageColors",
        },
      },
      {
        id: "PagePosition",
        label: "Position",
        class: "test_menu_position",
        to: {
          name: "PagePosition",
        },
      },
      {
        id: "PageSpacing",
        label: "Spacing",
        class: "test_menu_spacing",
        to: {
          name: "PageSpacing",
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
