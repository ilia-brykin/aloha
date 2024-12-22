export default function RestItemsAPI() {
  const restItems = {
    id: "installation",
    label: "Installation",
    icon: "ThreeDotsVertical",
    children: [
      {
        id: "scale",
        label: "Quick start",
        to: {
          name: "PageQuickStart",
        },
      },
    ],
  };

  return {
    restItems,
  };
}
