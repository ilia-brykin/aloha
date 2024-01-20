export default function RestItemsAPI() {
  const restItems = {
    id: "rest",
    label: "Rest",
    icon: "Dnd",
    children: [
      {
        id: "scale",
        label: "Scale",
        to: {
          name: "PageScale",
        },
      },
      {
        id: "svg",
        label: "Svg",
        to: {
          name: "PageSvg",
        },
      },
    ],
  };

  return {
    restItems,
  };
}
