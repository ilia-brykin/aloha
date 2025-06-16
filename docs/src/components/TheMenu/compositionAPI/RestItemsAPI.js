export default function RestItemsAPI() {
  const restItems = {
    id: "rest",
    label: "Rest",
    icon: "ThreeDotsVertical",
    class: "test_menu_rest",
    children: [
      {
        id: "scale",
        label: "Scale",
        class: "test_menu_scale",
        to: {
          name: "PageScale",
        },
      },
      {
        id: "svg",
        label: "Svg",
        class: "test_menu_svg",
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
