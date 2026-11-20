# ATableForm

## ATableForm

```html
<a-simple-table
  :columns="columns"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormBasic",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
      },
      {
        id: "name",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_NAME_",
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_TEAM_",
          options: {
            data: [
              { label: "_A_TABLE_FORM_TEAM_NORTH_", value: "north" },
              { label: "_A_TABLE_FORM_TEAM_WEST_", value: "west" },
              { label: "_A_TABLE_FORM_TEAM_SOUTH_", value: "south" },
              { label: "_A_TABLE_FORM_TEAM_EAST_", value: "east" },
            ],
            keyId: "value",
            keyLabel: "label",
          },
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_SCORE_",
          options: {
            min: 0,
          },
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "ÐœÐ°Ñ€Ñ‚Ð° Ð˜Ð²Ð°Ð½Ð¾Ð²Ð°",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    return {
      columns,
      rows,
      rowsFooter,
    };
  },
};
```

## Row reordering

The example shows accessible row reordering using **drag-and-drop** and move up and down buttons.

*props: `actions-disabled-callback`, `is-drag-and-drop`*

```html
<a-table-form
  :actions-disabled-callback="actionsDisabledCallback"
  :columns="columns"
  :is-drag-and-drop="true"
  :rows-footer="rowsFooter"
  :rows="rows"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @update-rows="updateRows"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormDND",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        keyLabel: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
      },
      {
        id: "name",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_NAME_",
          type: "text",
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_TEAM_",
          options: {
            data: [
              { label: "Ð¡ÐµÐ²ÐµÑ€", value: "Ð¡ÐµÐ²ÐµÑ€" },
              { label: "Ð—Ð°Ð¿Ð°Ð´", value: "Ð—Ð°Ð¿Ð°Ð´" },
              { label: "Ð®Ð³", value: "Ð®Ð³" },
              { label: "Ð’Ð¾ÑÑ‚Ð¾Ðº", value: "Ð’Ð¾ÑÑ‚Ð¾Ðº" },
            ],
            keyId: "value",
            keyLabel: "label",
          },
          type: "select",
        },
        keyLabel: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
      },
      {
        id: "score",
        formElement: {
          label: "_A_TABLE_FORM_COLUMN_SCORE_",
          options: {
            min: 0,
          },
          type: "integer",
        },
        keyLabel: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
      },
    ];

    const rows = ref([
      {
        dndDisabled: true,
        id: 1,
        name: "Марта Иванова",
        position: 1,
        score: 18,
        team: "Север",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const actionsDisabledCallback = {
      dnd: ({ row }) => row.dndDisabled,
    };

    const updateRows = ({ rows: _rows, trigger }) => {
      rows.value = _rows;
      console.log("trigger", trigger);
    };

    return {
      actionsDisabledCallback,
      columns,
      rows,
      rowsFooter,
      updateRows,
    };
  },
};
```

## Row editing

The example shows row editing, adding a new row, and deleting rows with confirmation.

*props: `is-addable`, `is-deletable`, `is-deletable-confirm`, `is-editable`, `save-row`, `texts`*

```html
<a-checkbox>
  v-model="modelCheckbox"
  :data="dataCheckbox"
  :translate-data="true"
  class="a_mb_4"
  key-id="value"
  key-label="label"
</a-checkbox>
<a-simple-table
  :add-row="addRow"
  :columns="columns"
  :is-addable="modelCheckbox.includes('is-addable')"
  :is-deletable-confirm="modelCheckbox.includes('is-deletable-confirm')"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-edit-on-row-click="modelCheckbox.includes('is-edit-on-row-click')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  :texts="texts"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
  @delete-row="deleteRow"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormEdit",
  components: {
    ATableForm,
  },
  setup() {
    const dataCheckbox = [
      {
        label: "is-deletable-confirm",
        value: "is-deletable-confirm",
      },
      {
        label: "is-deletable",
        value: "is-deletable",
      },
      {
        label: "is-editable",
        value: "is-editable",
      },
      {
        label: "is-edit-on-row-click",
        value: "is-edit-on-row-click",
      },
      {
        label: "is-addable",
        value: "is-addable",
      },
    ];
    const modelCheckbox = ref(["is-deletable-confirm", "is-deletable", "is-editable", "is-edit-on-row-click", "is-addable"]);

    const texts = {
      actionEditCancel: "abbrechen",
      actionEditSave: "speichern",
      editInfoText: "Nur diese Zeile ist gerade im Bearbeitungsmodus.",
    };

    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        maxWidth: 96,
        minWidth: 96,
        width: 96,
        formElement: {
          controlsType: "none",
          type: "integer",
        },
      },
      {
        id: "name",
        formElement: {
          type: "text",
          required: true,
        },
        keyLabel: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        maxWidth: "18rem",
        minWidth: "12rem",
        width: "16rem",
      },
      {
        id: "team",
        formElement: {
          data: [
            {
              label: "_A_TABLE_FORM_TEAM_NORTH_",
              value: "north",
            },
            {
              label: "_A_TABLE_FORM_TEAM_WEST_",
              value: "west",
            },
            {
              label: "_A_TABLE_FORM_TEAM_SOUTH_",
              value: "south",
            },
            {
              label: "_A_TABLE_FORM_TEAM_EAST_",
              value: "east",
            },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        minWidth: "12rem",
      },
      {
        id: "score",
        footerDefaultValue: "68",
        footerKeyLabel: "score",
        formElement: {
          controlsType: "none",
          min: 0,
          type: "integer",
        },
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        maxWidth: 120,
        minWidth: 120,
        width: 120,
      },
    ];

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
      {
        id: 2,
        name: "Oleg Sidorov",
        position: 2,
        score: 17,
        team: "west",
      },
      {
        id: 3,
        name: "Anna Petrova",
        position: 3,
        score: 16,
        team: "south",
      },
      {
        id: 4,
        name: "Igor Kovalev",
        position: 4,
        score: 17,
        team: "east",
      },
    ]);

    const rowsFooter = [
      {
        name: "_A_TABLE_FORM_FOOTER_TOTAL_",
        score: 68,
      },
    ];

    const saveRow = async({ model, rowIndex }) => {
      await new Promise(resolve => {
        setTimeout(resolve, 300);
      });

      const errors = {};

      if (!model.name?.trim()) {
        errors.name = ["Name ist erforderlich."];
      }

      if (!model.team) {
        errors.team = ["Team ist erforderlich."];
      }

      if (model.score < 18) {
        errors.score = ["Score must be at least 18."];
      }

      if (Object.keys(errors).length) {
        return {
          errors,
        };
      }

      rows.value.splice(rowIndex, 1, model);
    };

    const deleteRow = ({ row, rowIndex }) => {
      rows.value.splice(rowIndex, 1);
      console.log("row", row);
      console.log("rowIndex", rowIndex);
    };

    const addRow = ({ model }) => {
      console.log("model ", model);
      const errors = {};

      if (!model.name?.trim()) {
        errors.name = ["Name ist erforderlich."];
      }

      if (!model.team) {
        errors.team = ["Team ist erforderlich."];
      }

      if (model.score < 18) {
        errors.score = ["Score must be at least 18."];
      }

      if (Object.keys(errors).length) {
        return {
          errors,
        };
      }
      rows.value.push({
        id: rows.value.length + 1,
        ...model,
      });
    };

    return {
      addRow,
      columns,
      dataCheckbox,
      deleteRow,
      modelCheckbox,
      rows,
      rowsFooter,
      saveRow,
      texts,
    };
  },
};
```

## Row-specific form element properties

The example uses formElementEditPropsCallback to disable the score field for a specific row when its current editing status is Locked.

*props: `is-editable`, `save-row`*

```html
<a-table-form
  :columns="columns"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_EXAMPLE_LABEL_"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "name",
        formElement: {
          type: "text",
        },
        label: "_A_TABLE_FORM_COLUMN_NAME_",
      },
      {
        id: "status",
        formElement: {
          data: [
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_EDITABLE_", value: "editable" },
            { label: "_A_TABLE_FORM_EDIT_PROPS_STATUS_LOCKED_", value: "locked" },
          ],
          keyId: "value",
          keyLabel: "label",
          translateData: true,
          type: "select",
        },
        label: "_A_TABLE_FORM_EDIT_PROPS_COLUMN_STATUS_",
      },
      {
        id: "score",
        formElement: {
          min: 0,
          type: "integer",
        },
        formElementEditPropsCallback: ({ rowData }) => ({
          disabled: rowData.status === "locked",
        }),
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
      },
    ];
    const rows = ref([
      { id: 1, name: "Marta Ivanova", score: 18, status: "editable" },
      { id: 2, name: "Oleg Sidorov", score: 17, status: "locked" },
    ]);
    const saveRow = ({ model, rowIndex }) => {
      rows.value.splice(rowIndex, 1, model);
    };

    return {
      columns,
      rows,
      saveRow,
    };
  },
};
```

## List view with nested fieldsets

The example shows the list view, where all column configurations are rendered by AForm inside one wide cell. Nested fieldsets, validation, adding, editing, deleting, and row reordering remain available.

*props: `row-view`*

```html
<a-table-form
  :add-row="addRow"
  :columns="columns"
  :is-addable="true"
  :is-deletable-confirm="true"
  :is-drag-and-drop="true"
  :is-editable="true"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  label="_A_TABLE_FORM_LIST_LABEL_"
  row-view="list"
  @delete-row="deleteRow"
  @update-rows="updateRows"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "fundingTypes",
        label: "_A_TABLE_FORM_LIST_FUNDING_TYPES_",
        formElement: {
          classColumn: "a_column a_column_12",
          data: [
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_FEES_", value: "fees" },
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_TRAVEL_", value: "travel" },
            { label: "_A_TABLE_FORM_LIST_FUNDING_TYPE_INVESTMENT_", value: "investment" },
          ],
          keyId: "value",
          keyLabel: "label",
          required: true,
          translateData: true,
          type: "multiselect",
        },
      },
      {
        id: "percentDeviation",
        label: "_A_TABLE_FORM_LIST_PERCENT_DEVIATION_",
        formElement: {
          classColumn: "a_column a_column_4",
          classColumns: "a_columns a_columns_count_12 a_columns_gap_2",
          type: "fieldset",
          children: [
            {
              classColumn: "a_column a_column_6",
              controlsType: "none",
              id: "percentNegative",
              label: "_A_TABLE_FORM_LIST_NEGATIVE_",
              type: "integer",
            },
            {
              classColumn: "a_column a_column_6",
              controlsType: "none",
              id: "percentPositive",
              label: "_A_TABLE_FORM_LIST_POSITIVE_",
              type: "integer",
            },
          ],
        },
      },
      {
        id: "validationMessage",
        label: "_A_TABLE_FORM_LIST_VALIDATION_MESSAGE_",
        formElement: {
          classColumn: "a_column a_column_12",
          required: true,
          type: "textarea",
        },
      },
    ];

    const rows = ref([
      {
        fundingTypes: ["fees", "travel"],
        id: 1,
        percentNegative: 20,
        percentPositive: 20,
        validationMessage: "The configured deviation threshold was exceeded.",
      },
    ]);

    const validate = model => {
      const errors = {};
      if (!model.fundingTypes?.length) {
        errors.fundingTypes = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      if (!model.validationMessage?.trim()) {
        errors.validationMessage = ["_A_TABLE_FORM_LIST_ERROR_REQUIRED_"];
      }
      return errors;
    };

    const saveRow = ({ model, rowIndex }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }
      rows.value.splice(rowIndex, 1, model);
    };

    const addRow = ({ model }) => {
      const errors = validate(model);
      if (Object.keys(errors).length) {
        return { errors };
      }
      rows.value.push({
        ...model,
        id: Math.max(0, ...rows.value.map(row => row.id)) + 1,
      });
    };

    const deleteRow = ({ rowIndex }) => {
      rows.value.splice(rowIndex, 1);
    };

    const updateRows = ({ rows: rowsUpdated }) => {
      rows.value = rowsUpdated;
    };

    return {
      addRow,
      columns,
      deleteRow,
      rows,
      saveRow,
      updateRows,
    };
  },
};
```

## Sticky actions

The example shows a wide table with a sticky actions column on the right.

*props: `is-actions-sticky`, `is-deletable-confirm`, `is-editable`*

```html
<a-one-checkbox
  v-model="isActionsSticky"
  label="isActionsSticky"
/>
<a-simple-table
  :columns="columns"
  :is-actions-sticky="isActionsSticky"
  :is-deletable-confirm="true"
  :is-editable="true"
  :rows="rows"
  key-id="id"
  label="20 columns"
/>
```

```js
import {
  ref,
} from "vue";

import {
  AOneCheckbox,
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormSticky",
  components: {
    AOneCheckbox,
    ATableForm,
  },
  setup() {
    const isActionsSticky = ref(true);

    const columns = Array.from({ length: 20 }, (_, index) => ({
      id: `c${index + 1}`,
      label: `${index + 1}`,
      width: 120,
      formElement: {
        controlsType: "none",
        type: "integer",
      },
    }));

    const rows = ref(Array.from({ length: 6 }, (_, rowIndex) => {
      const row = {
        id: rowIndex + 1,
      };

      columns.forEach((column, columnIndex) => {
        row[column.id] = (rowIndex + 1) * 100 + columnIndex + 1;
      });

      return row;
    }));

    return {
      columns,
      isActionsSticky,
      rows,
    };
  },
};
```

## Column grow

The example shows how columns with width and grow share extra table space, including scenarios with actions and drag-and-drop columns.

*props: `is-columns-grow`, `is-deletable`, `is-drag-and-drop`, `is-editable`*

```html
<a-checkbox
  v-model="modelCheckbox"
  :data="dataCheckbox"
  key-id="value"
  key-label="label"
/>

<div style="max-width: 40rem;">
  <a-table-form
    :columns="columns"
    :is-columns-grow="true"
    :is-deletable="modelCheckbox.includes('is-deletable')"
    :is-drag-and-drop="modelCheckbox.includes('is-drag-and-drop')"
    :is-editable="modelCheckbox.includes('is-editable')"
    :rows-footer="rowsFooter"
    :rows="rows"
    :save-row="saveRow"
    key-id="id"
    @delete-row="deleteRow"
  />
</div>

<a-table-form
  :columns="columns"
  :is-columns-grow="true"
  :is-deletable="modelCheckbox.includes('is-deletable')"
  :is-drag-and-drop="modelCheckbox.includes('is-drag-and-drop')"
  :is-editable="modelCheckbox.includes('is-editable')"
  :rows-footer="rowsFooter"
  :rows="rows"
  :save-row="saveRow"
  key-id="id"
  @delete-row="deleteRow"
/>
```

```js
import {
  ref,
} from "vue";

import {
  ATableForm,
} from "aloha-vue";

export default {
  name: "PageTableFormGrow",
  components: {
    ATableForm,
  },
  setup() {
    const columns = [
      {
        id: "position",
        label: "_A_TABLE_FORM_COLUMN_POSITION_",
        width: 96,
        grow: 1,
      },
      {
        id: "name",
        label: "_A_TABLE_FORM_COLUMN_NAME_",
        width: "16rem",
        grow: 2,
      },
      {
        id: "team",
        label: "_A_TABLE_FORM_COLUMN_TEAM_",
        width: "12rem",
        grow: 1,
      },
      {
        id: "score",
        label: "_A_TABLE_FORM_COLUMN_SCORE_",
        width: 120,
        grow: 1,
      },
    ];

    const dataCheckbox = [
      { label: "is-deletable", value: "is-deletable" },
      { label: "is-editable", value: "is-editable" },
      { label: "is-drag-and-drop", value: "is-drag-and-drop" },
    ];
    const modelCheckbox = ref(["is-deletable", "is-editable"]);

    const rows = ref([
      {
        id: 1,
        name: "Marta Ivanova",
        position: 1,
        score: 18,
        team: "north",
      },
    ]);

    return {
      columns,
      dataCheckbox,
      modelCheckbox,
      rows,
    };
  },
};
```

## CSS variables (`scss/components/ATableForm.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_table_form_bg` |  | Background of the table and of the sticky actions column. |
| `--a_table_form_border_color` |  | Color of the cell and table borders. |
| `--a_table_form_drop_indicator_color` |  | Color of the line that shows where a dragged row will be dropped. |
| `--a_table_form_drop_indicator_width` |  | Thickness of the drop indicator line. |
| `--a_table_form_head_bg` |  | Background of the header row. |
| `--a_table_form_head_color` |  | Text color of the header row. |
| `--a_table_form_head_font_weight` |  | Font weight of the header and footer rows. |
| `--a_table_form_row_dragging_bg` |  | Background of the row that is being dragged. |
| `--a_table_form_row_dragging_opacity` |  | Opacity of the row that is being dragged and of the drag preview. |
| `--a_table_form_row_dragging_outline` |  | Outline of the row that is being dragged (shorthand). |
| `--a_table_form_focus_color` |  | Color of the focus frame of a focused row. |
| `--a_table_form_focus_width` |  | Thickness of the focus frame of a focused row. |
| `--a_table_form_focus_box_shadow` |  | Focus ring around the table when the table itself has focus. |
| `--a_table_form_row_hover_bg` |  | Background of a hovered row. |
| `--a_table_form_row_drag_bg` |  | Background of the row under the dragged row and of the dragged row while dragging. |
| `--a_table_form_footer_bg` |  | Background of the footer row. |
| `--a_table_form_cell_padding_y` |  | Vertical padding of a cell. |
| `--a_table_form_cell_padding_x` |  | Horizontal padding of a cell. |
| `--a_table_form_cell_actions_edge_box_shadow` |  | Line on the right edge of the sticky actions column. |
| `--a_table_form_cell_actions_sticky_shadow` |  | Shadow on the left of the sticky actions column that separates it from the scrolled cells. |
