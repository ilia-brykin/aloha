# AFilters (Filters)

Allows filtering data by various criteria.

## Filters Component

The Filters component allows users to filter data by various criteria.

*props: `filters`, `v-model:applied-model`, `v-model:unapplied-model`*

```html
<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>
```

```js
import {
  ref,
} from "vue";

import { 
  AFilters,
} from "aloha-vue";
    
export default {
  name: "PageFiltersExample",
  components: {
    AFilters,
  },
  setup() {
    const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_PAGE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_PAGE_FILTER_TEXT_",
        alwaysVisible: true,
      },
      {
        type: "date",
        id: "date",
        label: "_A_PAGE_FILTER_DATE_",
        alwaysVisible: true,
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};
```

## Filters with Default Hidden Filters

Filters can be hidden by default and shown when needed.

*props: `filters`*

```html
<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>
```

```js
import {
  ref,
} from "vue";

import { 
  AFilters,
} from "aloha-vue";
    
export default {
  name: "PageFiltersDefaultHide",
  components: {
    AFilters,
  },
  setup() {
     const filters = [
      {
        type: "select",
        id: "select1",
        label: "Select 1",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        data: [
          {
            label: "Aloha 0",
            id: "aloha_0",
          },
          {
            label: "Aloha 1",
            id: "aloha_1",
          },
        ],
      },
      {
        type: "multiselect",
        id: "select_one_per_group",
        label: "Select one per group",
        alwaysVisible: true,
        keyLabel: "label",
        keyId: "id",
        keyGroup: "group",
        mode: "one_per_group",
        translateData: true,
        data: [
          {
            label: "_TXT_POSITIVE_",
            id: "koeln_true",
            group: "Köln",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "koeln_false",
            group: "Köln",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "koeln_null",
            group: "Köln",
          },
          {
            label: "_TXT_POSITIVE_",
            id: "bonn_true",
            group: "Bonn",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "bonn_false",
            group: "Bonn",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "bonn_null",
            group: "Bonn",
          },
          {
            label: "_TXT_POSITIVE_",
            id: "duesseldorf_true",
            group: "Düsseldorf",
          },
          {
            label: "_TXT_NEGATIVE_",
            id: "duesseldorf_false",
            group: "Düsseldorf",
          },
          {
            label: "_TXT_NEUTRAL_",
            id: "duesseldorf_null",
            group: "Düsseldorf",
          },
        ],
      },
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        alwaysVisible: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "dateRange",
        id: "dateRange",
        label: "_A_TABLE_FILTER_INPUT_DATE_RANGE_",
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
      },
      {
        type: "date",
        id: "date",
        label: "_A_TABLE_FILTER_DATE_",
      },
      {
        type: "text",
        id: "aloha1",
        label: "_A_TABLE_FILTER_EXTRA_",
      },
      {
        type: "integerRange",
        id: "integerNumber",
        label: "Integer range",
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};
```

## Filters with Model **ID**

Filters can be configured with a model **ID** to control filtering.

*props: `filters`*

```html
<a-filters
  :filters="filters"
  v-model:applied-model="appliedModel"
  v-model:unapplied-model="unappliedModel"
>
</a-filters>
```

```js
import {
  ref,
} from "vue";

import { 
  AFilters,
} from "aloha-vue";
    
export default {
  name: "PageFiltersDefaultHide",
  components: {
    AFilters,
  },
  setup() {
     const filters = [
      {
        type: "text",
        id: "search",
        label: "_A_TABLE_FILTER_SEARCH_",
        main: true,
      },
      {
        type: "text",
        id: "aloha",
        label: "_A_TABLE_FILTER_TEXT_",
      },
      {
        type: "numberRange",
        id: "numberRange",
        label: "_A_TABLE_FILTER_INPUT_NUMBER_RANGE_",
      },
      {
        type: "date",
        id: "date",
        label: "_A_TABLE_FILTER_DATE_",
      },
      {
        type: "text",
        id: "aloha1",
        label: "_A_TABLE_FILTER_EXTRA_",
      },
      {
        type: "integerRange",
        id: "integerNumber",
        label: "Integer range",
      },
    ];

    const appliedModel = ref({});
    const unappliedModel = ref({});
    
    return {
      appliedModel,
      filters,
      unappliedModel,
    };
  },
};
```

## CSS variables (`scss/components/AFilters.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_filters_top_padding` |  | Padding of the filter panel above the table. |
| `--a_filters_top_form_max_width` |  | Maximum width of the filter form. |
| `--a_filters_top_label_width` |  | Width of the label column of a filter row. |
| `--a_filters_top_subgroup_width` |  | Width of the field column of a filter row. |
| `--a_filters_top_always_visible_padding` |  | Padding of the box with the always visible filters. Smaller below 769px. |
| `--a_filter_hor_divider_border_width` |  | Width of the line under the header and above the footer of the filter dropdown. |
| `--a_filter_hor_divider_border_color` |  | Color of the line under the header and above the footer of the filter dropdown. |
| `--a_filter_hor_hr_border_width` |  | Border widths of the separator line in the filter dropdown (top, right, bottom, left). |
| `--a_filter_hor_hr_border_color` |  | Color of the separator line in the filter dropdown. |
| `--a_filter_hor_hr_margin_y` |  | Space above and below the separator line. |
| `--a_filter_hor_header_font_size` |  | Font size of the header of the filter dropdown. |
| `--a_filter_hor_width` |  | Width of the filter dropdown. |
| `--a_filter_hor_max_width` |  | Maximum width of the filter dropdown. |
| `--a_filter_max_height` |  | Maximum height of the filter dropdown. |
| `--a_filter_hor_padding_x` |  | Horizontal padding inside the filter dropdown. |
| `--a_filter_hor_padding_y` |  | Vertical padding inside the filter dropdown. |
| `--a_filter_hor_body_max_height` |  | Maximum height of the scrollable body of the filter dropdown. |
| `--a_filter_hor_footer_bg` |  | Background of the sticky footer of the filter dropdown (translucent). |
| `--a_filter_hor_footer_actions_bg` |  | Background behind the footer buttons. |
| `--a_table_filters_center_padding` |  | Padding of the list of selected filters between the filter panel and the table. |
