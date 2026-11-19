# ATableForm

Editable table with rows backed by schema-driven controls.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATableForm } from "aloha-vue";
```

[Runnable Vue example](../examples/ATableForm.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/table-form)

Pass stable row IDs and column definitions. Handle updateRows to retain user edits in the owning model.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `actionsClasses` | Object | `{}` | — | — |
| `actionsDisabledCallback` | Object | `{}` | — | — |
| `actionsHideCallback` | Object | `{}` | — | — |
| `actionsTitleCallback` | Object | `{}` | — | — |
| `addRow` | Function | `undefined` | — | — |
| `changeModel` | Function | `undefined` | — | — |
| `columns` | Array | — | Yes | — |
| `columnsDefaultValue` | String, Number | `""` | — | — |
| `errorIcon` | String | Built-in SVG | — | — |
| `extra` | Object | `undefined` | — | — |
| `focusAfterMove` | Boolean | `true` | — | — |
| `fullWidthRowCallback` | Function | `undefined` | — | — |
| `icons` | Object | `{}` | — | — |
| `id` | String | Generated ID | — | — |
| `isActionsSticky` | Boolean | `false` | — | — |
| `isAddable` | Boolean | `false` | — | — |
| `isColumnsGrow` | Boolean | `false` | — | — |
| `isDeletable` | Boolean | `false` | — | — |
| `isDeletableConfirm` | Boolean | `false` | — | — |
| `isDragAndDrop` | Boolean | `false` | — | — |
| `isEditable` | Boolean | `false` | — | — |
| `isEditOnRowClick` | Boolean | `false` | — | — |
| `keyId` | String | `undefined` | — | — |
| `label` | String, Number | `""` | — | — |
| `labelClass` | String, Object, Array | `undefined` | — | — |
| `labelTag` | String | `"h2"` | — | — |
| `prepareEditModel` | Function | `undefined` | — | — |
| `rowClass` | String, Object, Array, Function | `undefined` | — | — |
| `rows` | Array | `[]` | — | — |
| `rowsFooter` | Array | `[]` | — | — |
| `rowView` | String | `"table"` | — | — |
| `saveRow` | Function | Default callback | — | — |
| `texts` | Object | `{}` | — | — |
| `widths` | Object | `{}` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `deleteRow` | `{ row, rowIndex, rowId, btnDeleteId }` |
| `moveRow` | `{ focusId, fromIndex, row, toIndex }` |
| `updateRows` | `{ focusId, rows, trigger, fromIndex, toIndex }` |

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `label` | — | — |
| `requiredAppend` | — | — |
| `requiredPrepend` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ATableForm/ATableForm.js)
