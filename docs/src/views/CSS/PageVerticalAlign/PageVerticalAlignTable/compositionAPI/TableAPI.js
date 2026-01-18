export default function TableAPI() {
  const rows = [
    {
      className: "a_align_baseline",
      value: "vertical-align: baseline;",
    },
    {
      className: "a_align_top",
      value: "vertical-align: top;",
    },
    {
      className: "a_align_middle",
      value: "vertical-align: middle;",
    },
    {
      className: "a_align_bottom",
      value: "vertical-align: bottom;",
    },
    {
      className: "a_align_text_top",
      value: "vertical-align: text-top;",
    },
    {
      className: "a_align_text_bottom",
      value: "vertical-align: text-bottom;",
    },
  ];

  return {
    rows,
  };
}
