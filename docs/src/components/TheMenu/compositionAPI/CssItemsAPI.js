export default function CssItemsAPI() {
  const cssItems = {
    id: "css",
    label: "CSS",
    icon: "FiletypeCss",
    children: [
      {
        id: "columns",
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
