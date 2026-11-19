# ATree

Hierarchical widget with optional selection, checkboxes and lazy loading.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATree } from "aloha-vue";
```

[Runnable Vue example](../examples/ATree.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/tree)

Give the tree a label and every node a stable key. Preserve focus and keyboard interactions when customizing node content.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | String | `undefined` | — | Accessible name of the tree (required if there is no aria-labelledby). |
| `ariaLabelledby` | String | `undefined` | — | Id of an element that names the tree. |
| `data` | Array | `[]` | — | Nodes of the tree. |
| `defaultExpandLevel` | Number | `0` | — | Levels that are open at the start. |
| `emptyText` | String | `"_A_TREE_EMPTY_"` | — | Text without nodes. |
| `expanded` | Array | `undefined` | — | Keys of the open nodes (v-model:expanded). |
| `filterMethod` | Function | `undefined` | — | Own search: ({ item, label, searchModel }) => boolean. |
| `id` | String | Generated ID | — | Id of the tree. |
| `indent` | Number, String | `undefined` | — | Indent of a level (number in pixels or CSS value). |
| `isAccordion` | Boolean | `false` | — | Only one open node per level. |
| `isCheckbox` | Boolean | `false` | — | Shows checkboxes. |
| `isCheckOnClickNode` | Boolean | `false` | — | A click on the node changes the checkbox. |
| `isCheckStrictly` | Boolean | `false` | — | A checkbox changes only its own node. |
| `isExpandAll` | Boolean | `false` | — | All nodes are open at the start. |
| `isExpandOnClickNode` | Boolean | `true` | — | A click on the node opens and closes it. |
| `isSelectable` | Boolean | `true` | — | Nodes can be selected. |
| `json` | Any | `undefined` | — | Any JSON value that is shown as a tree (instead of data). |
| `keyChildren` | String, Function | `"children"` | — | Key, path or function of the children. |
| `keyDisabled` | String, Function | `"disabled"` | — | Key, path or function of the disabled state. |
| `keyId` | String, Function | `"id"` | — | Key, path or function of the unique key of a node. |
| `keyIsLeaf` | String, Function | `"isLeaf"` | — | With load: key, path or function that marks a node without children. |
| `keyLabel` | String, Function | `"label"` | — | Key, path or function of the label. |
| `load` | Function | `undefined` | — | Loads children: ({ item, key, level }) => Promise. |
| `modelValue` | Array | `undefined` | — | Keys of the checked nodes (v-model). |
| `searchModel` | String | `""` | — | Search text. |
| `selected` | String, Number | `undefined` | — | Key of the selected node (v-model:selected). |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `check` | `{ item, key, checked, checkedKeys, $event }` |
| `collapse` | `{ item, key, $event }` |
| `expand` | `{ item, key, $event }` |
| `load-error` | `{ item, key, error }` |
| `node-click` | `{ item, key, $event }` |
| `update:expanded` | `[...expandedKeys.value]` |
| `update:modelValue` | `[...keys]` |
| `update:selected` | `node.key` / `key` |

Vue model bindings: `v-model:expanded`, `v-model`, `v-model:selected`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `empty` | — | Content without nodes. |
| `node` | `{ item, key, label, level, isExpanded, isLeaf, checked, isSelected, searchModel }` | Content of a node instead of the label. |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ATree/ATree.js)
