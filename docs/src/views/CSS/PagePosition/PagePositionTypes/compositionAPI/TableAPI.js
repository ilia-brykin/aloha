export default function TableAPI() {
  const rows = [
    {
      name: "static",
      className: "a_position_static",
      valueLines: [
        "position: static;",
      ],
    },
    {
      name: "relative",
      className: "a_position_relative",
      valueLines: [
        "position: relative;",
      ],
    },
    {
      name: "absolute",
      className: "a_position_absolute",
      valueLines: [
        "position: absolute;",
      ],
    },
    {
      name: "fixed",
      className: "a_position_fixed",
      valueLines: [
        "position: fixed;",
      ],
    },
    {
      name: "sticky",
      className: "a_position_sticky",
      valueLines: [
        "position: sticky;",
      ],
    },
    {
      name: "absolute-all",
      className: "a_position_absolute_all",
      valueLines: [
        "position: absolute;",
        "top: 0;",
        "right: 0;",
        "bottom: 0;",
        "left: 0;",
      ],
    },
  ];

  return {
    rows,
  };
}
