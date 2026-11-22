# ATable Table

## Simple Table

A component used for straightforward data presentation in a tabular format, without the inclusion of advanced features like sorting, filtering, or additional actions.

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSimpleExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Simple HTML table

`is-simple-table` renders a native `

` without the toolbar and the extra features of **ATable**.

*props: `is-simple-table`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSimpleExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Striped rows

With `is-striped` every second row gets the background `--a_table_row_striped_bg`. Hover, selected rows and the open preview still have their own colors. The default for all tables can be set with `AComponentsPlugin` (`ATable: { props: { isStriped: true } }`).

*props: `is-striped`*

```html
<a-table
  :columns="columns"
  :data="data"
  :is-striped="true"
  label="_A_TABLE_GROUP_SIMPLE_IS_STRIPED_LABEL_"
  key-id="id"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSimpleIsStripedExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## Grouped columns

Columns with `children` get a common header above their sub-columns. `:has-mobile="false"` keeps the table view on small screens.

*props: `is-simple-table`, `has-mobile`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSimpleExample",
  components: {
    ATable,
  },
  setup() {
     const columnsGrouped = [
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_7_",
      },
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
        group: ["Group 1", "Group 1.3"],
        width: 500,
      },
      {
        id: "column6",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_2_",
        group: ["Group 1", "Group 1.1", "Group 1.1.1"],
      },
      {
        id: "column7",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_3_",
        group: ["Group 1.1", "Group 1.1.2", "Group 1"],
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
        group: ["Group 1", "Group 1.2"],
      },
      {
        id: "column9",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_7_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
        group: ["Group 2", "Group 2.1"],
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_6_",
        group: ["_A_TABLE_COLUMN_6_", "Group 2.2"],
      },
      {
        id: "column6",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_8_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columnsGrouped,
      data,
    };
  },
};
```

## Slots of the mobile view

On small screens each row is shown as a card. The slots `rowMobilePrepend` and `rowMobileAppend` add content at the start and the end of each card.

*props: `is-simple-table`; slots: `rowMobilePrepend`, `rowMobileAppend`*

```html
<a-table
  :columns="columns"
  :data="data"
  label="_A_TABLE_GROUP_SIMPLE_LABEL_"
  key-id="id"
>
</a-table>
```

```js
import {
  ref,
} from "vue";

import { ATable } from "aloha-vue";
    
export default {
  name: "PageTableSimpleExample",
  components: {
    ATable,
  },
  setup() {
     const columns = [
      {
        id: "column1",
        keyLabel: "id",
        label: "_A_TABLE_COLUMN_1_",
      },
      {
        id: "column2",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_2_",
      },
      {
        id: "column3",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_3_",
      },
      {
        id: "column4",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_4_",
      },
      {
        id: "column5",
        keyLabel: "aloha",
        label: "_A_TABLE_COLUMN_5_",
      },
    ];

    const data = ref([]);

    const setData = () => {
      const DATA = [];
      times(20, item => {
        DATA.push({
          id: item,
          aloha: `aloha ${ item }`,
        });
      });
      data.value = DATA;
    };

    setData();
    
    return {
      columns,
      data,
    };
  },
};
```

## CSS variables (`scss/components/ATable.scss`, `scss/components/AResizer.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_table_bg` |  | Background of the table rows and cells. |
| `--a_table_border_width` |  | Width of the frame around the table (0 for borderType "innerBordered"). |
| `--a_table_border_color` |  | Color of the frame around the table. |
| `--a_table_border_radius` |  | Corner radius of the frame around the table. |
| `--a_table_font_variant_numeric` |  | Digits of the same width, so numbers line up in columns. |
| `--a_table_th_bg` |  | Background of the table header. |
| `--a_table_th_color` |  | Text color of the table header. |
| `--a_table_th_hover_color` |  | Text color of a sortable header cell on hover. |
| `--a_table_th_font_size` |  | Font size of the table header. |
| `--a_table_th_font_weight` |  | Font weight of the table header. |
| `--a_table_th_border_vertical_width` |  | Width of the vertical lines between header cells in bordered tables. |
| `--a_table_th_border_vertical_color` |  | Color of the vertical lines between header cells in bordered tables. |
| `--a_table_th_border_horizontal_width` |  | Width of the line under a column group header in bordered tables. |
| `--a_table_th_border_horizontal_color` |  | Color of the line under a column group header in bordered tables. |
| `--a_table_th_border_bottom_width` |  | Width of the line under the table header. |
| `--a_table_th_border_bottom_color` |  | Color of the line under the table header. |
| `--a_table_th_sorting_bg` |  | Background of the header cell of the sorted column. |
| `--a_table_th_sorting_color` |  | Text and icon color of the header cell of the sorted column. |
| `--a_table_th_sort_icon_opacity` |  | Opacity of the sort icons of a column that is not sorted (1 on hover and focus). |
| `--a_table_row_border_bottom_width` |  | Width of the line between rows. |
| `--a_table_row_border_bottom_color` |  | Color of the line between rows. |
| `--a_table_row_hover_bg` |  | Background of a hovered row or a row with focus inside. |
| `--a_table_row_focus_shadow` |  | Focus ring of a focused row. |
| `--a_table_row_striped_bg` |  | Background of every second row in a striped table (isStriped). |
| `--a_table_row_selected_bg` |  | Background of a row selected with the checkbox (multiple actions). |
| `--a_table_row_preview_open_bg` |  | Background of the row whose preview is open. |
| `--a_table_row_accent_width` |  | Width of the bar on the left of the row whose preview is open. |
| `--a_table_row_accent_color` |  | Color of the bar on the left of the row whose preview is open. |
| `--a_table_row_preview_was_open_bg` |  | Background of the row whose preview was open last. |
| `--a_table_row_preview_focus_bg` |  | Color used for the border of selected items in the multiple actions panel. |
| `--a_table_td_border_vertical_width` |  | Width of the vertical lines between body cells in bordered tables. |
| `--a_table_td_border_vertical_color` |  | Color of the vertical lines between body cells in bordered tables. |
| `--a_table_cell_padding_x` |  | Horizontal padding of a cell. |
| `--a_table_cell_padding_y` |  | Vertical padding of a cell. |
| `--a_table_action_sticky_shadow` |  | Shadow on the left of the sticky actions column. |
| `--a_table_empty_padding_y` |  | Top and bottom padding of the text of an empty table. |
| `--a_table_empty_color` |  | Text color of an empty table. |
| `--a_table_quick_search_width` |  | Width of the quick search field. |
| `--a_table_between_actions_margin` |  | Space between the icon and the text in a header cell and between action elements. |
| `--a_table_preview_right_padding` |  | Padding of the header and the body of the right preview. |
| `--a_table_preview_right_width` |  | Width of the right preview. |
| `--a_table_preview_right_bg` |  | Background of the right preview. |
| `--a_table_preview_right_border_width` |  | Border width of the right preview (top, right, bottom, left). |
| `--a_table_preview_right_border_color` |  | Border color of the right preview. |
| `--a_table_preview_right_header_bg` |  | Background of the header of the right preview. |
| `--a_table_preview_right_header_font_size` |  | Font size of the header of the right preview. |
| `--a_table_preview_right_shadow_size` |  | Offsets, blur and spread of the shadow of the right preview. |
| `--a_table_preview_right_shadow_color` |  | Shadow color of the right preview. |
| `--a_table_preview_down_bg` |  | Background of the preview below a row. |
| `--a_table_preview_down_border_width` |  | Border width of the preview below a row. |
| `--a_table_preview_down_border_color` |  | Border color of the preview below a row. |
| `--a_table_preview_down_padding_y` |  | Top and bottom padding of the preview below a row. |
| `--a_table_preview_down_padding_left` |  | Left padding of the preview below a row. |
| `--a_table_preview_down_padding_right` |  | Right padding of the preview below a row. |
| `--a_table_preview_down_border_radius` |  | Corner radius of the preview below a row. |
| `--a_table_footer_border_top` |  | Border above the table footer (shorthand: width, style, color). |
| `--a_table_mobile_dt_dd_border_bottom` |  | Border under a label/value pair in the mobile view (shorthand). |
| `--a_table_mobile_dt_width` |  | Share of the row width for the label in the mobile view (0–1). |
| `--a_table_mobile_dd_width` |  | Share of the row width for the value in the mobile view (0–1). |
| `--a_table_mobile_dt_padding_left` |  | Left padding of a label in the mobile view. |
| `--a_table_mobile_dd_padding_right` |  | Right padding of a value in the mobile view. |
| `--a_table_mobile_row_level_icon_bg` |  | Background of the tree level icon of a row in the mobile view. |
| `--a_table_multiple_border_radius` |  | Corner radius of the multiple actions panel and of its selected items. |
| `--a_table_multiple_border` |  | Border of the multiple actions panel (shorthand). |
| `--a_table_multiple_bg` |  | Background of the multiple actions panel. |
| `--a_table_multiple_header_text_font_size` |  | Font size of the header text of the multiple actions panel. |
| `--a_table_multiple_items_selected_border` |  | Border of a selected item in the multiple actions panel (shorthand). |
| `--a_table_multiple_items_selected_bg` |  | Background of a selected item in the multiple actions panel. |
| `--a_table_sort_sequence_num_bg` |  | Background of the sort order number in a header cell (multi-column sorting). |
| `--a_table_sort_sequence_num_color` |  | Text color of the sort order number in a header cell. |
| `--a_table_dnd_th_bg` |  | Color of the drop indicator when a column is dragged onto a header cell. |
| `--a_table_dnd_th_width` |  | Width of the drop indicator when a column is dragged onto a header cell. |
| `--a_table_tree_level_padding_left` |  | Indent of a nested row per tree level. |
| `--a_table_between_actions_margin` |  | Space between an icon and the text in the column dropdown. Set here too: the dropdown is rendered in body, outside .a_table__parent. |
| `--a_table_dnd_dropdown_li_bg` |  | Color of the drop indicator when a column is dragged in the column dropdown. |
| `--a_table_draggable_li_height` |  | Height of the drop indicator in the column dropdown. |
| `--a_resizer_width` |  | Thickness of the resizer line. |
| `--a_resizer_bg` |  | Color of the resizer line. |
| `--a_resizer_hover_bg` |  | Color of the resizer line on hover. |
