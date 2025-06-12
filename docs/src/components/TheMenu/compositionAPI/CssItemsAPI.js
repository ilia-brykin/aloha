export default function CssItemsAPI() {
  const cssItems = {
    id: "css",
    label: "CSS",
    icon: "FiletypeCss",
    children: [
      {
        id: "PageBadge",
        label: "Badge",
        to: {
          name: "PageBadge",
        },
      },
      {
        id: "PageColumns",
        label: "Columns",
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
