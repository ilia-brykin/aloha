# ATable

Data table with optional sorting, filtering, pagination and row actions.

Reference for the repository build of `aloha-vue@3.0.0-alpha.1`. See the [quick start](../quick-start.md) for package differences.

## Usage

```js
import { ATable } from "aloha-vue";
```

[Runnable Vue example](../examples/ATable.vue) · [Application setup](../quick-start.md) · [Interactive documentation](https://ilia-brykin.github.io/aloha/table-simple)

Pass columns and rows using the documented keys, a stable row ID and a descriptive label. Toggle the example data to exercise the empty state.

## Props

| JavaScript prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `additionalSortingColumns` | Array | `[]` | — | — |
| `borderType` | String | `"bordered"` (plugin default) | — | — |
| `clearSelectedRowsOnDataChange` | Boolean | `true` | — | — |
| `columnActionsOnePlusDropdownOptions` | Object | Built-in configuration | — | — |
| `columnActionsView` | String | `"dropdown"` | — | — |
| `columnActionsWidth` | Number | `undefined` | — | — |
| `columnActionsWidthDefaults` | Object | `{"default":170,"min":50,"onePlusDropdown":320,"onePlusDropdownMin":200,"btnGroupMaxWidth":180}` | — | — |
| `columnActionsWidthMin` | Number | `undefined` | — | — |
| `columns` | Array | — | Yes | — |
| `columnsDefaultValue` | String, Number | `""` | — | — |
| `columnWidthDefault` | Number | `250` | — | — |
| `countAllRows` | Number | `undefined` | — | — |
| `countVisibleMobileColumns` | Number | `4` | — | — |
| `data` | Array, Object, Promise | — | — | — |
| `disabledActions` | Boolean | `false` | — | — |
| `disabledMultipleActions` | Boolean | `false` | — | — |
| `disabledOptions` | Boolean | `false` | — | — |
| `disabledPreview` | Boolean | `false` | — | — |
| `disabledPreviewRowCallback` | Function | — | — | — |
| `disabledRowActions` | Boolean | `false` | — | — |
| `disabledSort` | Boolean | `false` | — | — |
| `disabledViews` | Boolean | `false` | — | — |
| `extra` | Object | `undefined` | — | — |
| `hasMobile` | Boolean | `true` | — | — |
| `hasScrollClass` | Boolean | `true` | — | — |
| `id` | String | Generated ID | — | — |
| `isActionColumnVisible` | Boolean | `false` | — | — |
| `isActionIconVisible` | Boolean | `true` | — | — |
| `isColumnsDnd` | Boolean | `false` | — | — |
| `isLabelVisible` | Boolean | `true` | — | — |
| `isLoadingMultipleActions` | Boolean | `false` | — | — |
| `isLoadingOptions` | Boolean | `false` | — | — |
| `isLoadingTable` | Boolean | `false` | — | — |
| `isQuickSearch` | Boolean | `false` | — | — |
| `isSimpleTable` | Boolean | `false` | — | — |
| `isSortingMultiColumn` | Boolean | `false` | — | — |
| `isSortingOutside` | Boolean | `false` | — | — |
| `isStriped` | Boolean | `false` (plugin default) | — | — |
| `isTree` | Boolean | `false` | — | — |
| `isTreeCollapsible` | Boolean | `true` | — | — |
| `isTreeOpened` | Boolean | `false` | — | — |
| `keyChildren` | String | `"children"` | — | — |
| `keyCountAllRowsInData` | String | `"count"` | — | — |
| `keyId` | String | `undefined` | — | — |
| `label` | String, Number | `""` | — | — |
| `labelClass` | String, Object | `undefined` | — | — |
| `labelTag` | String | `"h2"` | — | — |
| `modelColumnsOrdering` | Array | `[]` | — | — |
| `modelColumnsVisible` | Object | `{}` | — | — |
| `modelIsTableWithoutScrollStart` | Boolean | `false` | — | — |
| `modelQuickSearch` | String | `""` | — | — |
| `modelSort` | String, Array | `[]` | — | — |
| `modelView` | String, Number | `undefined` | — | — |
| `multipleActions` | Array | `[]` | — | — |
| `offsetStart` | Number | `0` | — | — |
| `pagination` | Object | Built-in configuration | — | — |
| `preview` | String | `undefined` | — | — |
| `previewBoxWidth` | Number | `300` | — | — |
| `previewStyles` | String, Object | `undefined` | — | — |
| `resizeDebounce` | Number | `300` | — | — |
| `rowActions` | Array | `[]` | — | — |
| `rowActionsClass` | String, Object | `undefined` | — | — |
| `rowActionsSticky` | Boolean | `true` | — | — |
| `rowClass` | String, Object, Function | `undefined` | — | — |
| `rowsCountRenderPerTick` | Number | `25` | — | — |
| `rowsFooter` | Array | `[]` | — | — |
| `showCount` | Boolean | `true` | — | — |
| `showFirstSortingSequenceNumber` | Boolean | `false` | — | — |
| `sortingMultiColumnKey` | String | `"shift"` | — | — |
| `sortingSequenceNumberClass` | String, Object | `"a_badge"` | — | — |
| `tableActions` | Array | `[]` | — | — |
| `tableActionsIndexFirstDropdownAction` | Number | `-1` | — | — |
| `tableActionsIndexFirstDropdownActionMobile` | Number | `0` | — | — |
| `texts` | Object | `{"empty":"_A_TABLE_EMPTY_TEXT_"}` | — | — |
| `useAdditionalSorting` | Boolean | `true` | — | — |
| `useRem` | Boolean | `true` | — | — |
| `useViewSlot` | Boolean | `false` | — | — |
| `valuesForColumnDefault` | Array | `[null,null,""]` | — | — |
| `views` | Array | `[]` | — | — |

## Events and model bindings

| Event | Payload |
| --- | --- |
| `changeColumnsOrdering` | `{ columnIndexDraggable, columnIndexOver, modelColumnsOrdering }` / `{ modelColumnsOrdering, shouldFixColumns }` |
| `changeColumnsVisible` | See source or linked demo |
| `changeLimit` | `{ offset, limit }` |
| `changeOffset` | `{ offset, limit }` |
| `changeSorting` | `{ modelSort }` |
| `initTable` | `value` |
| `mouseupResizePreviewRight` | See source or linked demo |
| `toggleMultipleActions` | `{ isActive, action }` |
| `togglePreview` | `{ row, rowIndex, typeToggle }` |
| `update:modelColumnsOrder` | Updated value |
| `update:modelColumnsVisible` | `cloneDeep(modelColumnsVisibleLocal.value)` |
| `update:modelQuickSearch` | `model` |
| `updateModelIsTableWithoutScroll` | `model` |
| `updateView` | `{ _modelView, view, modelFilters, init }` / `{ _modelView, view, modelFilters }` |

Vue model bindings: `v-model:model-columns-visible`, `v-model:model-quick-search`.

## Slots

| Slot | Slot props | Description |
| --- | --- | --- |
| `tablePrepend` | `{ id }` | — |
| `topPanelAppend` | — | — |

[Component source](https://github.com/ilia-brykin/aloha/blob/d40c0018addf72c7fac33b40eb3146e11d493147/src/ATable/ATable.js)
