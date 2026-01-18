import {
  computed,
} from "vue";

import {
  breakpoints,
} from "../../../../global/const/breakpoints.const";

export default function TableAPI() {
  const displays = [
    {
      className: "d_inline",
      value: "display: inline;",
    },
    {
      className: "d_inline_block",
      value: "display: inline-block;",
    },
    {
      className: "d_block",
      value: "display: block;",
    },
    {
      className: "d_grid",
      value: "display: grid;",
    },
    {
      className: "d_table",
      value: "display: table;",
    },
    {
      className: "d_table_cell",
      value: "display: table-cell;",
    },
    {
      className: "d_table_row",
      value: "display: table-row;",
    },
    {
      className: "d_flex",
      value: "display: flex;",
    },
    {
      className: "d_inline_flex",
      value: "display: inline-flex;",
    },
    {
      className: "d_none",
      value: "display: none;",
    },
  ];


  const rows = computed(() => {
    const ROWS = [];
    breakpoints.forEach(breakpoint => {
      displays.forEach((display, index) => {
        const ROW = {
          className: `a_${ display.className }_${ breakpoint.name }`,
          value: display.value,
        };
        if (index === 0) {
          ROW.breakpointValue = `${ breakpoint.name } (${ breakpoint.value })`;
        }
        ROWS.push(ROW);
      });
    });

    return ROWS;
  });

  const displaysLength = computed(() => {
    return displays.length;
  });

  return {
    displays,
    displaysLength,
    rows,
  };
}
