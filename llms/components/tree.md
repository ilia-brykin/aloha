# ATree (Tree)

The **ATree** component shows hierarchical data: nodes can be expanded, selected and checked, searched and loaded lazily. The data is plain JSON with configurable keys; with `json` any JSON value is shown as a tree.

Accessibility: the WAI-ARIA tree pattern (`role="tree"`, `treeitem`, `group` with level, position, expanded, selected and checked state). Only one node is in the tab order, the arrow keys move the focus. The number of found nodes is announced.

- **↑ ↓**: next / previous node
- **→**: open the node or go to the first child
- **←**: close the node or go to the parent
- **Home / End**: first / last node
- **Enter**: select
- **Space**: check (with checkboxes) or select
- *****: open all nodes of the level
- **a–z**: go to the next node starting with the letter

## Basic usage

Nodes are objects with `id`, `label` and `children`. `v-model:selected` is the key of the selected node.

*props: `data`, `selected`, `aria-label`*

```html
<a-tree
  v-model:selected="selected"
  :data="data"
  aria-label="Company structure"
></a-tree>
<div>selected: {{ selected }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeBasic",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const selected = ref(undefined);

    return {
      data,
      selected,
    };
  },
};
```

## Expanding

`default-expand-level` opens the first levels, `is-expand-all` all nodes. `v-model:expanded` holds the keys of the open nodes, the methods `expandAll` and `collapseAll` change them. `is-accordion` keeps only one node per level open; with `is-expand-on-click-node` `false` only the arrow opens a node.

*props: `default-expand-level`, `is-expand-all`, `is-accordion`, `is-expand-on-click-node`, `expanded`*

```html
<a-button
  class="a_btn a_btn_secondary a_btn_small"
  text="Expand all"
  @click="treeRef.expandAll()"
></a-button>
<a-button
  class="a_btn a_btn_secondary a_btn_small"
  text="Collapse all"
  @click="treeRef.collapseAll()"
></a-button>
<a-tree
  ref="treeRef"
  v-model:expanded="expanded"
  :data="data"
  :default-expand-level="1"
  aria-label="Company structure"
></a-tree>
<div>expanded: {{ expanded }}</div>

<a-tree
  :data="data"
  :is-accordion="true"
  aria-label="Company structure"
></a-tree>

<a-tree
  :data="data"
  :is-expand-on-click-node="false"
  aria-label="Company structure"
></a-tree>
```

```js
import {
  ref,
} from "vue";

import {
  AButton,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeExpand",
  components: {
    AButton,
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const expanded = ref(undefined);
    const treeRef = ref(undefined);

    return {
      data,
      expanded,
      treeRef,
    };
  },
};
```

## Checkboxes

`is-checkbox` shows checkboxes, `v-model` holds the checked keys. Checking a node checks its children; a parent is checked when all children are checked, otherwise it is partly checked. Disabled nodes are not changed.

*props: `is-checkbox`, `model-value`, `is-check-on-click-node`*

```html
<a-tree
  ref="treeRef"
  v-model="checked"
  :data="data"
  :is-checkbox="true"
  :default-expand-level="2"
  aria-label="Company structure"
></a-tree>
<div>model-value: {{ checked }}</div>
<div>getCheckedItems({ isLeafOnly: true }): {{ leafLabels }}</div>
```

```js
import {
  computed,
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeCheckbox",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const checked = ref(["frontend", "backend"]);
    const treeRef = ref(undefined);

    const leafLabels = computed(() => {
      // checked is read here, so the list is updated after every change
      return checked.value && treeRef.value ?
        treeRef.value.getCheckedItems({ isLeafOnly: true }).map(item => item.label) :
        [];
    });

    return {
      checked,
      data,
      leafLabels,
      treeRef,
    };
  },
};
```

## Independent checkboxes

With `is-check-strictly` a checkbox changes only its own node.

*props: `is-check-strictly`*

```html
<a-tree
  v-model="checked"
  :data="data"
  :is-checkbox="true"
  :is-check-strictly="true"
  :is-expand-all="true"
  aria-label="Company structure"
></a-tree>
<div>model-value: {{ checked }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeCheckStrictly",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const checked = ref(["it"]);

    return {
      checked,
      data,
    };
  },
};
```

## Search

`search-model` shows the matching nodes and their parents and highlights the text. `filter-method` replaces the search: `({ item, label, searchModel }) => boolean`.

*props: `search-model`, `filter-method`*

```html
<a-input
  v-model="searchModel"
  class="a_mb_3"
  label="Search"
  type="search"
></a-input>
<a-tree
  :data="data"
  :search-model="searchModel"
  aria-label="Company structure"
></a-tree>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeSearch",
  components: {
    AInput,
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    const searchModel = ref("end");

    return {
      data,
      searchModel,
    };
  },
};
```

## Lazy loading

`load` gets `{ item, key, level }` and returns a Promise with the children; while loading the node shows a spinner. A node with `isLeaf` has no children. If the Promise is rejected, the node stays closed, can be opened again and `load-error` is emitted.

*props: `load`, `key-is-leaf`*

```html
<a-tree
  :data="data"
  :load="load"
  aria-label="Folders"
></a-tree>
```

```js
import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeLazy",
  components: {
    ATree,
  },
  setup() {
    const data = [
      { id: "documents", label: "Documents" },
      { id: "photos", label: "Photos" },
      { id: "readme", label: "readme.txt", isLeaf: true },
    ];

    // Simulated request. Return a Promise with the children; isLeaf marks nodes without children.
    const load = ({ item, level }) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(level < 3 ?
            [
              { id: `${ item.id }_a`, label: `${ item.label } A` },
              { id: `${ item.id }_b`, label: `${ item.label } B` },
              { id: `${ item.id }_file`, label: "file.pdf", isLeaf: true },
            ] :
            []);
        }, 800);
      });
    };

    return {
      data,
      load,
    };
  },
};
```

## Own JSON keys

The data does not need to be converted: `key-id`, `key-label`, `key-children`, `key-disabled` and `key-is-leaf` take a key, a path (`meta.title`) or a function `({ item }) => value`.

*props: `key-id`, `key-label`, `key-children`, `key-disabled`*

```html
<a-tree
  v-model:selected="selected"
  :data="data"
  key-id="uuid"
  key-label="meta.title"
  key-children="subordinates"
  :key-disabled="({ item }) => !item.active"
  :is-expand-all="true"
  aria-label="Employees"
></a-tree>
<div>selected: {{ selected }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeKeys",
  components: {
    ATree,
  },
  setup() {
    // JSON as it comes from an API
    const data = [
      {
        uuid: "7c1e",
        active: true,
        meta: { title: "Anna Becker, CEO" },
        subordinates: [
          { uuid: "9a2f", active: true, meta: { title: "Ben Ott, CTO" } },
          { uuid: "3d8b", active: false, meta: { title: "Clara Lenz, CFO" } },
        ],
      },
    ];
    const selected = ref(undefined);

    return {
      data,
      selected,
    };
  },
};
```

## Own node content

The slot `node` replaces the label and gets `item`, `key`, `label`, `level`, `isExpanded`, `isLeaf`, `checked`, `isSelected` and `searchModel`.

*props: `node`*

```html
<a-tree
  :data="data"
  :is-expand-all="true"
  aria-label="Company structure"
>
  <template v-slot:node="{ item, label, isLeaf }">
    <span class="a_d_flex a_align_items_center a_gap_2">
      <span>{{ label }}</span>
      <span
        v-if="!isLeaf"
        class="a_badge a_badge_secondary a_pill_rounded"
      >{{ item.children.length }}</span>
    </span>
  </template>
</a-tree>
```

```js
import {
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeSlot",
  components: {
    ATree,
  },
  setup() {
    const data = [
      {
        id: "management",
        label: "Management",
      },
      {
        id: "it",
        label: "IT",
        children: [
          {
            id: "development",
            label: "Development",
            children: [
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "qa", label: "Quality assurance" },
            ],
          },
          { id: "support", label: "Support" },
          { id: "security", label: "Security", disabled: true },
        ],
      },
      {
        id: "sales",
        label: "Sales",
        children: [
          { id: "sales_europe", label: "Europe" },
          { id: "sales_asia", label: "Asia" },
        ],
      },
    ];

    return {
      data,
    };
  },
};
```

## Any JSON

`json` shows any JSON value, e.g. a response of an API: keys, values by type, the size of objects and arrays. The search finds keys and values, the key of a node is its path (`$.address.geo.lat`).

*props: `json`, `default-expand-level`*

```html
<a-input
  v-model="searchModel"
  class="a_mb_3"
  label="Search"
  type="search"
></a-input>
<a-tree
  v-model:selected="selected"
  :json="json"
  :search-model="searchModel"
  :default-expand-level="1"
  aria-label="JSON"
></a-tree>
<div>selected: {{ selected }}</div>
```

```js
import {
  ref,
} from "vue";

import {
  AInput,
  ATree,
} from "aloha-vue";

export default {
  name: "PageTreeJson",
  components: {
    AInput,
    ATree,
  },
  setup() {
    const json = {
      id: 42,
      name: "Anna Becker",
      email: "anna.becker@example.com",
      active: true,
      manager: null,
      roles: ["admin", "editor"],
      address: {
        street: "Hauptstraße 1",
        city: "Berlin",
        geo: { lat: 52.52, lng: 13.405 },
      },
    };
    const searchModel = ref("");
    const selected = ref(undefined);

    return {
      json,
      searchModel,
      selected,
    };
  },
};
```

## Props

| name | type | default | required | description |
| --- | --- | --- | --- | --- |
| aria-label | String |  |  | Accessible name of the tree (required if there is no aria-labelledby). |
| aria-labelledby | String |  |  | Id of an element that names the tree. |
| data | Array | [] |  | Nodes of the tree. |
| default-expand-level | Number | 0 |  | Levels that are open at the start. |
| empty-text | String | "_A_TREE_EMPTY_" |  | Text without nodes. |
| expanded | Array |  |  | Keys of the open nodes (v-model:expanded). |
| filter-method | Function |  |  | Own search: ({ item, label, searchModel }) => boolean. |
| id | String | uniqueId("a_tree_") |  | Id of the tree. |
| indent | Number / String |  |  | Indent of a level (number in pixels or CSS value). |
| is-accordion | Boolean | false |  | Only one open node per level. |
| is-check-on-click-node | Boolean | false |  | A click on the node changes the checkbox. |
| is-check-strictly | Boolean | false |  | A checkbox changes only its own node. |
| is-checkbox | Boolean | false |  | Shows checkboxes. |
| is-expand-all | Boolean | false |  | All nodes are open at the start. |
| is-expand-on-click-node | Boolean | true |  | A click on the node opens and closes it. |
| is-selectable | Boolean | true |  | Nodes can be selected. |
| json | Any |  |  | Any JSON value that is shown as a tree (instead of data). |
| key-children | String / Function | "children" |  | Key, path or function of the children. |
| key-disabled | String / Function | "disabled" |  | Key, path or function of the disabled state. |
| key-id | String / Function | "id" |  | Key, path or function of the unique key of a node. |
| key-is-leaf | String / Function | "isLeaf" |  | With load: key, path or function that marks a node without children. |
| key-label | String / Function | "label" |  | Key, path or function of the label. |
| load | Function |  |  | Loads children: ({ item, key, level }) => Promise. |
| model-value | Array |  |  | Keys of the checked nodes (v-model). |
| search-model | String | "" |  | Search text. |
| selected | String / Number |  |  | Key of the selected node (v-model:selected). |

## Events

| name | description |
| --- | --- |
| update:model-value | Checked keys changed. |
| update:selected | Selected key changed. |
| update:expanded | Keys of the open nodes changed. |
| node-click | A node was selected by click or keyboard: { item, key, $event }. |
| check | A checkbox was changed: { item, key, checked, checkedKeys, $event }. |
| expand | A node was opened: { item, key, $event }. |
| collapse | A node was closed: { item, key, $event }. |
| load-error | load was rejected: { item, key, error }. |

## Slots

| name | description |
| --- | --- |
| node | Content of a node instead of the label. |
| empty | Content without nodes. |

## Methods

| name | description |
| --- | --- |
| expandAll() | Opens all nodes. |
| collapseAll() | Closes all nodes. |
| expandToKey(key) | Opens the parents of a node. |
| focus({ key }) | Focuses a node (by default the node in the tab order). |
| setSelected(key) | Selects a node and opens its parents. |
| checkNode({ key, checked }) | Checks or unchecks a node. |
| setCheckedKeys(keys) | Sets the checked keys. |
| getCheckedItems({ isLeafOnly }) | Returns the checked items, optionally only leaves. |
| getHalfCheckedKeys() | Returns the keys of partly checked nodes. |
| getNode(key) | Returns the item of a key. |

## Translations

| key | en |
| --- | --- |
| `_A_TREE_EMPTY_` | No data |
| `_A_TREE_NOTHING_FOUND_` | Nothing found |
| `_A_TREE_FOUND_{{count}}_` | Found: {{count}} |

## CSS variables (`scss/components/ATree.scss`)

| name | value | description |
| --- | --- | --- |
| `--a_tree_indent` |  | Indent of every level. |
| `--a_tree_gap` |  | Space between the toggle, the checkbox and the label. |
| `--a_tree_node_height` |  | Minimal height of a node. |
| `--a_tree_node_padding_x` |  | Horizontal padding of a node. |
| `--a_tree_node_padding_y` |  | Vertical padding of a node. |
| `--a_tree_node_border_radius` |  | Corner radius of a node. |
| `--a_tree_color` |  | Text color of a node. |
| `--a_tree_hover_bg` |  | Background of a node on hover. |
| `--a_tree_selected_bg` |  | Background of the selected node. |
| `--a_tree_selected_color` |  | Text color of the selected node. |
| `--a_tree_selected_font_weight` |  | Font weight of the selected node. |
| `--a_tree_disabled_color` |  | Text color of a disabled node. |
| `--a_tree_disabled_opacity` |  | Opacity of the checkbox of a disabled node. |
| `--a_tree_mark_bg` |  | Background of the found text. |
| `--a_tree_toggle_size` |  | Size of the toggle button. |
| `--a_tree_toggle_color` |  | Color of the arrow of the toggle. |
| `--a_tree_toggle_hover_bg` |  | Background of the toggle on hover. |
| `--a_tree_checkbox_size` |  | Size of the checkbox. |
| `--a_tree_checkbox_bg` |  | Background of an unchecked checkbox. |
| `--a_tree_checkbox_border_color` |  | Border color of an unchecked checkbox (contrast at least 3:1). |
| `--a_tree_checkbox_checked_bg` |  | Background of a checked checkbox. |
| `--a_tree_checkbox_checked_color` |  | Color of the check mark. |
| `--a_tree_json_font_size` |  | Font size in the json mode. |
| `--a_tree_json_key_color` |  | Color of the keys in the json mode. |
| `--a_tree_json_string_color` |  | Color of strings in the json mode. |
| `--a_tree_json_number_color` |  | Color of numbers in the json mode. |
| `--a_tree_json_boolean_color` |  | Color of booleans and null in the json mode. |
| `--a_tree_json_punctuation_color` |  | Color of the colon and of the size of objects and arrays. |
