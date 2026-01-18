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
        id: "PageDisplay",
        label: "Display",
        class: "test_menu_display",
        to: {
          name: "PageDisplay",
        },
      },
      {
        id: "PageFloat",
        label: "Float",
        class: "test_menu_float",
        to: {
          name: "PageFloat",
        },
      },
      {
        id: "PageOverflow",
        label: "Overflow",
        class: "test_menu_overflow",
        to: {
          name: "PageOverflow",
        },
      },
      {
        id: "PageScreenreader",
        label: "Screen reader",
        class: "test_menu_screenreader",
        to: {
          name: "PageScreenreader",
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
