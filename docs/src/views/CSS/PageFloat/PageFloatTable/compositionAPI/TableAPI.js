export default function TableAPI() {
  const rows = [
    {
      className: "a_float_left",
      value: "float: left;",
    },
    {
      className: "a_float_right",
      value: "float: right;",
    },
    {
      className: "a_float_none",
      value: "float: none;",
    },
  ];

  return {
    rows,
  };
}
