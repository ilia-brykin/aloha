# AList (List)

The **AList** component allows easy rendering of lists with flexible configuration options for data presentation.

## Basic usage

*props: `data`, `label`*

```html
<a-list
  :data="items"
  key-label="label"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListBasic",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};
```

## Dynamic Adjustment of HTML Tag

Using the component to dynamically switch between ordered (**ol**) and unordered (**ul**) lists via the **tag** property.

*props: `tag`*

```html
<a-radio
  v-model="modelTag"
  class="a_mb_4"
  :data="['ol', 'ul']"
  :is-data-simple-array="true"
></a-radio>

<a-list
  :data="items"
  key-label="label"
  :tag="modelTag"
></a-list>
```

```js
import {
  ref,
} from "vue";

import {
  AList,
  ARadio,
} from "aloha-vue";
    
export default {
  name: "PageListTag",
  components: {
    AList,
    ARadio,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];
    const modelTag = ref("ol");

    return {
      items,
      modelTag,
    };
  },
};
```

## Hierarchical Data Presentation

The **key-children** property allows items to have their own child elements, enabling the presentation of hierarchical data.

*props: `key-children`*

```html
<a-list
  :data="items"
  key-label="label"
  key-children="children"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyChildren",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "Parent 1",
        children: [
          {
            label: "Child 1" 
          },
          {
            label: "Child 2"
          }
        ],
      },
      {
        label: "Parent 2",
        children: [
          {
            label: "Child 3" 
          },
          {
            label: "Child 4"
          }
        ],
      }
    ];

    return {
      items,
    };
  },
};
```

## Usage with Simple Arrays and Nested Hierarchies

This example demonstrates the use of the **is-data-simple-array** property in the component to handle different data types: simple arrays and nested hierarchies.

*props: `is-data-simple-array`*

```html
<a-list
  :data="items1"
  :is-data-simple-array="true"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  :is-data-simple-array="true"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListIsDataSimpleArray",
  components: {
    AList,
  },
  setup() {
    const items1 = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];
    const items2 = [
      "Level 1",
      [
        "Level 2",
        [
          "Level 2.1",
          "Level 2.2",
        ],
      ],
      [
        "Level 3",
        [
          "Level 3.1",
          [
            "Level 3.2",
            [
              "Level 3.2.1",
              "Level 3.2.2",
            ],
          ],
        ],
      ],
    ];

    return {
      items1,
      items2,
    };
  },
};
```

## Display of Lists in Text or HTML Format

This example shows the use of the **is-html** property in the component in conjunction with the **a-switch** component to dynamically control the list display between text and HTML format.

*props: `is-html`*

```html
<a-switch
  v-model="modelIsHtml"
  label="_A_LIST_IS_HTML_LABEL_"
></a-switch>

<a-list
  :data="items"
  key-label="label"
  :is-html="modelIsHtml"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="itemsWithChildren"
  key-label="label"
  key-children="children"
  :is-html="modelIsHtml"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="itemsArrays"
  key-label="label"
  :is-data-simple-array="true"
  :is-html="modelIsHtml"
></a-list>
```

```js
import {
  ref,
} from "vue";

import {
  AList,
  ASwitch, 
} from "aloha-vue";
    
export default {
  name: "PageListIsHtml",
  components: {
    AList,
    ASwitch,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];
    const itemsWithChildren = [
      {
        label: "Level 1",
        children: [
          {
            label: "Level 1.1",
            children: [
              {
                label: "Level 1.1.1",
              },
              {
                label: "Level 1.1.2",
              },
            ],
          },
          {
            label: "Level 1.2",
            children: [
              {
                label: "Level 1.2.1",
              },
            ],
          },
        ],
      },
      {
        label: "Level 2",
        children: [
          {
            label: "Level 2.1",
          },
          {
            label: "Level 2.2",
          },
        ],
      },
    ];
    const itemsArrays = [
      "Level 1",
      [
        "Level 2",
        [
          "Level 2.1",
          "Level 2.2",
        ],
      ],
      [
        "Level 3",
        [
          "Level 3.1",
          [
            "Level 3.2",
            [
              "Level 3.2.1",
              "Level 3.2.2",
            ],
          ],
        ],
      ],
    ];
    const modelIsHtml = ref(false);

    return {
      items,
      itemsWithChildren,
      itemsArrays,
      modelIsHtml,
    };
  },
};
```

## Custom Separators Between Items

This example shows the use of the **separator** property in the component to set custom separators between items.

*props: `separator`*

```html
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="false"
  separator=", "
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="false"
  separator=" + "
></a-list>
<div class="a_mt_5"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator=","
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator=";"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListSeparator",
  components: {
    AList,
  },
  setup() {
    const items = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];

    return {
      items,
    };
  },
};
```

## Custom HTML Separators Between Items

The content used to separate items of a list can also be specified in HTML format. The content will be sanitized.

*props: `separator-html`*

```html
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator-html="<div aria-hidden='true'>-------------</div>"
></a-list>
<div class="a_mt_4"></div>
<a-list
  :data="items"
  :is-data-simple-array="true"
  :is-html="true"
  separator-html="<hr>"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListSeparatorHtml",
  components: {
    AList,
  },
  setup() {
    const items = [
      "label 1",
      "label 2",
      "label 3",
      "label 4",
    ];

    return {
      items,
    };
  },
};
```

## List and Item Styling

Specify the CSS class for the main list or item.

*props: `class-main`, `class-item`*

```html
<a-list
  :data="items"
  key-label="label"
  class-main="a_list_group" 
  class-item="a_list_group__item"
></a-list>
<a-list
  class="a_mt_5"
  :data="items"
  key-label="label"
  class-main="a_list_group a_list_group_gap"
  class-item="a_list_group__item"
></a-list>
<a-list
  class="a_mt_5"
  :data="items"
  key-label="label"
  class-main="a_list_group a_list_group_edge"
  class-item="a_list_group__item"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListClassGroup",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};
```

## Custom Format for Labels

The **key-label-callback** property allows for a custom transformation of the item labels.

*props: `key-label-callback`*

```html
<a-list
  :data="items"
  :key-label-callback="keyLabelCallback"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyLabelCallback",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
      },
      {
        label: "label 2",
      },
      {
        label: "label 3",
      },
      {
        label: "label 4",
      },
    ];

    return {
      items,
    };
  },
};
```

## Unique Identification of List Items

This example demonstrates the use of the **key-id** property in the component to assign a unique identifier to each item in the list. This is particularly useful when the list is composed of an array of objects and each object has a unique key (ID).

In the second example, the label key **(label)** is used as an identifier for the list items.

*props: `key-id`*

```html
<a-list
  :data="items1"
  key-label="label"
  key-id="id"
></a-list>
<a-list
  class="a_mt_4"
  :data="items2"
  key-label="label"
  key-id="label"
></a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListKeyId",
  components: {
    AList,
  },
  setup() {
    const items1 = [
      {
        label: "Lorem",
        id: "1",
      },
      {
        label: "ipsum",
        id: "2",
      },
      {
        label: "dolor",
        id: "3",
      },
      {
        label: "Lorem",
        id: "4",
      },
    ];
    const items2 = [
      {
        label: "Item 1",
      },
      {
        label: "Item 2",
      },
      {
        label: "Item 3",
      },
      {
        label: "Item 4",
      },
    ];

    return {
      items1,
      items2,
    };
  },
};
```

## Slot

A list with custom content in the items through the slot.

```html
<a-list
  :data="items"
  key-children="items"
>
  <template
    v-slot:listItem="{ item, itemIndex }"
  >
    <pre>{{ item.label }}</pre>
  </template>
</a-list>
```

```js
import { 
  AList,
} from "aloha-vue";
    
export default {
  name: "PageListWithSlot",
  components: {
    AList,
  },
  setup() {
    const items = [
      {
        label: "label 1",
        items: [
          {
            label: "label 1.1",
            items: [
              {
                label: "label 1.1.1",
              },
              {
                label: "label 1.1.2",
              },
              {
                label: "label 1.1.3",
              },
            ],
          },
          {
            label: "label 1.2",
          },
          {
            label: "label 1.3",
            items: [
              {
                label: "label 1.3.1",
              },
              {
                label: "label 1.3.2",
              },
              {
                label: "label 1.3.3",
              },
            ],
          },
        ],
      },
      {
        label: "level 2",
      },
      {
        label: "level 3",
      },
    ];

    return {
      items,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| class-item | String / Object / Array |  |  | CSS class for each item in the list |
| class-main | String / Object / Array |  |  | CSS class for each parent element |
| data | Array | [] |  | Array with the data to be rendered |
| is-data-simple-array | Boolean | false |  | Indicates whether only a simple array without objects is used |
| is-html | Boolean | true |  | If true, an HTML list (<ul><li>...</li></ul>) is created. Otherwise, a text list is generated (<span>...</span>) |
| key-children | String |  |  | Key for sub-items, if data is an array of objects |
| key-id | String |  |  | Key for unique IDs, if data is an array of objects (for performance improvement) |
| key-label | String |  |  | Key for the label to be displayed, if data is an array of objects |
| key-label-callback | Function |  |  | Function to generate labels with two parameters (**item** and **itemIndex**), if data is an array of objects |
| label-tag | String | span |  | HTML tag for the labels |
| list-item-tag | String | li |  | HTML tag for the items in the list |
| separator | String |  |  | Separator between items in the list. |
| separator-html | String |  |  | Separator between items in HTML format. |
| tag | String | ul |  | HTML tag for the entire list |

## Slots

| name | description |
| --- | --- |
| listItem | Custom content for each item in the list |

## CSS variables (`scss/utils/list_group.scss`, `scss/utils/list.scss`, `scss/components/ADivider.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_list_group_color` |  | Text color of an item. Set by the color classes (e.g. .a_list_group__item_success). |
| `--a_list_group_bg` |  | Background of an item. Set by the color classes. |
| `--a_list_group_border_color` |  | Border color of an item. Set by the color classes. |
| `--a_list_group_border_width` |  | Border width of an item. |
| `--a_list_group_border_radius` |  | Corner radius of the list. 0 with .a_list_group_edge. |
| `--a_list_group_item_padding_x` |  | Horizontal padding of an item. |
| `--a_list_group_item_padding_y` |  | Vertical padding of an item. |
| `--a_list_group_item_not_first_margin_top` |  | Space above every item except the first. 1rem with .a_list_group_gap. |
| `--a_list_group_item_not_first_border_top_width` |  | Top border width of every item except the first, so borders do not double. 1px with .a_list_group_gap. |
| `--a_list_group_item_border_radius` |  | Corner radius of an item. With .a_list_group_gap every item is rounded like the list. |
| `--a_list_group_action_color` |  | Text color of a clickable item (.a_list_group__item_action). |
| `--a_list_group_action_hover_color` |  | Text color of a hovered clickable item. |
| `--a_list_group_action_hover_bg` |  | Background of a hovered clickable item. |
| `--a_list_group_action_active_color` |  | Text color of a pressed clickable item. |
| `--a_list_group_action_active_bg` |  | Background of a pressed clickable item. |
| `--a_list_group_disabled_color` |  | Text color of a disabled item. |
| `--a_list_group_disabled_bg` |  | Background of a disabled item. |
| `--a_list_group_active_color` |  | Text color of the active item (.active). |
| `--a_list_group_active_bg` |  | Background of the active item. |
| `--a_list_group_active_border_color` |  | Border color of the active item. |
| `--a_list_dl_first_column_width` |  | Width of the term column (dt). The list is as wide as both columns together. |
| `--a_list_dl_last_column_width` |  | Width of the value column (dd). |
| `--a_list_dl_dt_text_align` |  | Text alignment of the terms. right with .a_list_dl_dt_right. |
| `--a_list_dl_item_padding_x` |  | Horizontal padding of a term and of a value. |
| `--a_list_dl_item_padding_y` |  | Vertical padding of a term and of a value. |
| `--a_list_dl_bg` |  | Background of the list. |
| `--a_list_dl_first_column_bg` |  | Background of the terms. |
| `--a_list_dl_last_column_bg` |  | Background of the values. |
| `--a_list_dl_first_column_border_width` |  | Width of the line between the terms. |
| `--a_list_dl_last_column_border_width` |  | Width of the line between the values. |
| `--a_list_dl_first_column_border_color` |  | Color of the line between the terms. |
| `--a_list_dl_last_column_border_color` |  | Color of the line between the values. |
| `--a_divider_margin_y` |  | Space above and below the line. |
| `--a_divider_bg` |  | Color of the line. |
