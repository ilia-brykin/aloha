export default function TableAPI() {
  const rows = [
    {
      name: "translate-middle",
      className: "a_translate_middle",
      value: "transform: translate(-50%, -50%);",
    },
    {
      name: "translate-middle-x",
      className: "a_translate_middle_x",
      value: "transform: translateX(-50%);",
    },
    {
      name: "translate-middle-y",
      className: "a_translate_middle_y",
      value: "transform: translateY(-50%);",
    },
  ];

  return {
    rows,
  };
}
